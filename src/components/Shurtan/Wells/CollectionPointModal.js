import React, { useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TableModalShurtan, TdModalShurtanFirst, ModalDivShurtan, TdModalShurtan, TdModalShurtanData, ButtonModalShurtan } from '../../../styled'

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

const modal = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "200px",
        opacity: 1,
        transition: { delay: 0.5 }
    }
}

const CollectionPointModal = ({showCollectionPointModal, setShowCollectionPointModal, idPoint}) => {
    const modalRef = useRef();

    const closeModal = e => {
        if( modalRef.current === e.target ) {
            setShowCollectionPointModal(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showCollectionPointModal){
            setShowCollectionPointModal(false)
        }
    }, [setShowCollectionPointModal, showCollectionPointModal]);

    useEffect(()=>{
        document.addEventListener('keydown', keyPress);
        return() => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <AnimatePresence>
            { showCollectionPointModal && (
                <motion.div className="backdrop"
                            variants={backdrop}
                            initial="hidden"
                            animate="visible"
                            ref={modalRef}
                            onClick={closeModal}
                >
                    <motion.div className="modal"
                                variants={modal}
                    >
                        <ModalDivShurtan>
                            <TableModalShurtan>
                                <tbody>
                                <tr>
                                    <TdModalShurtanFirst>БВН:</TdModalShurtanFirst>
                                    <TdModalShurtan>{idPoint}</TdModalShurtan>
                                </tr>
                                <tr>
                                    <TdModalShurtanFirst>Рсп, кгс/см²:</TdModalShurtanFirst>
                                    <TdModalShurtan>14.53</TdModalShurtan>
                                </tr>
                                <tr>
                                    <TdModalShurtanFirst>Расход, м³/ч:</TdModalShurtanFirst>
                                    <TdModalShurtan>85.65</TdModalShurtan>
                                </tr>
                                <tr>
                                    <TdModalShurtanFirst>Темрература, °C:</TdModalShurtanFirst>
                                    <TdModalShurtan>58.00</TdModalShurtan>
                                </tr>
                                <tr>
                                    <TdModalShurtanData colSpan="2">Дата Обновления</TdModalShurtanData>
                                </tr>
                                <tr>
                                    <TdModalShurtan colSpan="2">2021-06-17 14:49:22</TdModalShurtan>
                                </tr>
                                </tbody>
                            </TableModalShurtan>
                            <ButtonModalShurtan onClick={() => setShowCollectionPointModal(prev => !prev)}>OK</ButtonModalShurtan>
                        </ModalDivShurtan>
                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
    )
}

export default CollectionPointModal