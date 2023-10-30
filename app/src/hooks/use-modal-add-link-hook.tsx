import { useState, useEffect } from 'react';

const useCustomModal = (initialState?: boolean) => {
    const [modalState, setModalState] = useState(initialState??false);

    const toggleModal = () => {
        setModalState(!modalState);
    };

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                toggleModal();
            }
        };

        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, []);

    return {
        modalState,
        toggleModal
    };
};

export default useCustomModal;
