// ModalContext.js
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Box, Modal, useMediaQuery } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'

interface ModalContextType {
    modals: { sontent: ReactJSXElement, id: string }[],
    addModal: (modalContent: ReactJSXElement, modalId: string) => void,
    removeModal: (modalId: string) => void,
    clearModals: () => void,
    logModals: () => void,
}

const ModalContext = React.createContext<ModalContextType>({} as ModalContextType);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [modals, setModals] = useState<{ sontent: ReactJSXElement, id: string }[]>([]);

    const addModal = (modalContent: ReactJSXElement, modalId: string) => {
        setModals((prevModals) => [...prevModals, {
            sontent: modalContent,
            id: modalId
        }]);
    };

    const removeModal = (modalId: string) => {
        setModals((prevModals) => prevModals.filter((modal) => modal.id !== modalId));
    };

    const clearModals = () => {
        setModals([]);
    };

    const logModals = () => {
        console.log(modals);
    }

    return (
        <ModalContext.Provider value={{ modals, addModal, removeModal, clearModals, logModals }}>

            {children}

            {
                modals.map((modal) =>
                    <Modal open={true}
                        key={modal.id}
                        onClose={() => { removeModal(modal.id) }}
                        className='absolute h-4/5 top-3 block'
                    >
                        <div className='absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fef08a] border border-black md:p-2 md:w-96 w-80'>
                            {modal.sontent}
                        </div>
                    </Modal>
                )
            }

        </ModalContext.Provider >
    );
};

export { ModalContext, ModalProvider, type ModalContextType };
