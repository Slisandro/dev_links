import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
// import TextFieldComponent from './textfield-component';
import { useDispatch, useSelector } from 'react-redux';
import technologies, { TechnologiesId } from '../constants/technologies-constants';
import useCustomModal from '../hooks/use-modal-add-link-hook';
import { setRemoveLink, setOrderLinks } from '../redux/reducers/links-reducers';
import FormLinkComponent from './form-link-component';
import ModalComponent from './modal-component';

// React state to track order of items
interface Item { type: TechnologiesId, url: string }

function ListDraggableComponent() {
    const dispatch = useDispatch();
    const links = useSelector((state: { links: Item[] }) => state.links);
    const [itemList, setItemList] = React.useState<Item[]>(links);

    React.useEffect(() => {
        setItemList(links)
    }, [links])

    // Function to update list on drop
    const handleDrop = (droppedItem: any) => {
        // Ignore drop outside droppable container
        if (!droppedItem.destination) return;
        var updatedList = [...itemList];
        // Remove dragged item
        const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
        // Add dropped item
        updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
        // Update State
        setItemList(updatedList);
        dispatch(setOrderLinks(updatedList))
    };

    return (
        <div style={{ width: "100%" }}>
            <DragDropContext onDragEnd={handleDrop}>
                <Droppable droppableId="list-container">
                    {(provided) => (
                        <div
                            className="list-container"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {itemList.map(({ type, url }, index) =>
                                <ListItem type={type} url={url} index={index} key={type} />
                            )}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
};

const ListItem = ({ type, url, index }: { type: Item["type"], url: Item["url"], index: number }) => {
    const { modalState, toggleModal } = useCustomModal(false);
    const dispatch = useDispatch();
    const handleEdit = () => toggleModal();
    const handleRemove = () => dispatch(setRemoveLink(type))
    return (
        <>
            {modalState && (
                <ModalComponent open={modalState}>
                    <FormLinkComponent entity={{ type, url }} toggleModal={toggleModal} />
                </ModalComponent>
            )}
            <Draggable key={type} draggableId={type} index={index}>
                {(provided) => (
                    <div
                        className="item-container"
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        style={{ display: "flex", userSelect: "none", ...provided.draggableProps.style }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "20px", userSelect: "none" }}>
                            {technologies.find(t => t.id === type)?.icon}
                            {url}
                        </div>
                        <div style={{ display: "flex", gap: "10px", marginLeft: "auto" }}>
                            <button
                                className="button outline"
                                style={{ cursor: "pointer", width: "max-content", height: "max-content", padding: "8px" }}
                                onClick={handleEdit}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" style={{ width: "18px", height: "18px" }}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </button>
                            <button className="button outline" style={{ cursor: "pointer", width: "max-content", height: "max-content", padding: "8px" }} onClick={handleRemove}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" style={{ width: "18px", height: "18px" }}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </Draggable>
        </>
    )
}

export default ListDraggableComponent