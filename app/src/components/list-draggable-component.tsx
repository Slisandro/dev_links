import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TextFieldComponent from './textfield-component';

const defaultList = ["A", "B", "C", "D", "E"];

// React state to track order of items

function ListDraggableComponent() {
    const [itemList, setItemList] = React.useState(defaultList);

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
    };

    return (
        <div style={{ width: "100%" }}>
            <DragDropContext onDragEnd={handleDrop}>
                <Droppable droppableId="list-container">
                    {(provided) => (
                        <div
                            // style={{ width: "100%"}} //, maxHeight: "225px", overflowY: "auto" }}
                            className="list-container"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {itemList.map((item, index) => (
                                <Draggable key={item} draggableId={item} index={index}>
                                    {(provided) => (
                                        <div
                                            className="item-container"
                                            ref={provided.innerRef}
                                            {...provided.dragHandleProps}
                                            {...provided.draggableProps}
                                        >
                                            <div className="header-link">
                                                <div className="detail-item">
                                                    <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="12" height="1" fill="#737373" />
                                                        <rect y="5" width="12" height="1" fill="#737373" />
                                                    </svg>
                                                    <p className="link-number">
                                                        Link {index + 1}
                                                    </p>
                                                </div>
                                                <button>Remove</button>
                                            </div>
                                            {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "column" }}>
                                                <div className="container-input">
                                                    <label>Plataform</label>
                                                    <TextFieldComponent
                                                        id={"username"}
                                                        name={"username"}
                                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => null}
                                                        // error={"errors.username"}
                                                        value={"values.username"}
                                                        placeholder="e.g. alex@email.com"
                                                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <path d="M14 3H2C1.86739 3 1.74021 3.05268 1.64645 3.14645C1.55268 3.24021 1.5 3.36739 1.5 3.5V12C1.5 12.2652 1.60536 12.5196 1.79289 12.7071C1.98043 12.8946 2.23478 13 2.5 13H13.5C13.7652 13 14.0196 12.8946 14.2071 12.7071C14.3946 12.5196 14.5 12.2652 14.5 12V3.5C14.5 3.36739 14.4473 3.24021 14.3536 3.14645C14.2598 3.05268 14.1326 3 14 3ZM13.5 12H2.5V4.63688L7.66187 9.36875C7.75412 9.45343 7.87478 9.50041 8 9.50041C8.12522 9.50041 8.24588 9.45343 8.33813 9.36875L13.5 4.63688V12Z" fill="#737373" />
                                                        </svg>}
                                                    />
                                                </div>
                                                <div className="container-input">
                                                    <label>Link</label>
                                                    <TextFieldComponent
                                                        id={"username"}
                                                        name={"username"}
                                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => null}
                                                        // error={"errors.username"}
                                                        value={"values.username"}
                                                        placeholder="e.g. alex@email.com"
                                                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <path d="M14 3H2C1.86739 3 1.74021 3.05268 1.64645 3.14645C1.55268 3.24021 1.5 3.36739 1.5 3.5V12C1.5 12.2652 1.60536 12.5196 1.79289 12.7071C1.98043 12.8946 2.23478 13 2.5 13H13.5C13.7652 13 14.0196 12.8946 14.2071 12.7071C14.3946 12.5196 14.5 12.2652 14.5 12V3.5C14.5 3.36739 14.4473 3.24021 14.3536 3.14645C14.2598 3.05268 14.1326 3 14 3ZM13.5 12H2.5V4.63688L7.66187 9.36875C7.75412 9.45343 7.87478 9.50041 8 9.50041C8.12522 9.50041 8.24588 9.45343 8.33813 9.36875L13.5 4.63688V12Z" fill="#737373" />
                                                        </svg>}
                                                    />
                                                </div>
                                            </div> */}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default ListDraggableComponent