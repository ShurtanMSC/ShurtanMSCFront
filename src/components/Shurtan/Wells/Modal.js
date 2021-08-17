import React, { useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TableModalShurtan, TdModalShurtanFirst, ModalDivShurtan, TdModalShurtan, TdModalShurtanData, TdModalShurtanColor, ButtonModalShurtan } from '../../../styled'

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

const Modal = ({showModal, setShowModal, id}) => {
    const modalRef = useRef();

    const closeModal = e => {
        if( modalRef.current === e.target ) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showModal){
            setShowModal(false)
        }
    }, [setShowModal, showModal]);

    useEffect(()=>{
        document.addEventListener('keydown', keyPress);
        return() => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <AnimatePresence>
            { showModal && (
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
                                        <TdModalShurtanFirst>Номер скважины</TdModalShurtanFirst>
                                        <TdModalShurtan>{id}</TdModalShurtan>
                                    </tr>
                                    <tr>
                                        <TdModalShurtanFirst>Статус</TdModalShurtanFirst>
                                        <TdModalShurtanColor>В простое</TdModalShurtanColor>
                                    </tr>
                                    <tr>
                                        <TdModalShurtanFirst>Изменение состояния</TdModalShurtanFirst>
                                        <TdModalShurtan>258</TdModalShurtan>
                                    </tr>
                                    <tr>
                                        <TdModalShurtanFirst>Ру, кгс/см²</TdModalShurtanFirst>
                                        <TdModalShurtan>258</TdModalShurtan>
                                    </tr>
                                    <tr>
                                        <TdModalShurtanFirst>Рпл, кгс/см²</TdModalShurtanFirst>
                                        <TdModalShurtan>258</TdModalShurtan>
                                    </tr>
                                    <tr>
                                        <TdModalShurtanFirst>Расход, м³/ч</TdModalShurtanFirst>
                                        <TdModalShurtan>258</TdModalShurtan>
                                    </tr>
                                    <tr>
                                        <TdModalShurtanFirst>Темрература, °C</TdModalShurtanFirst>
                                        <TdModalShurtan>258</TdModalShurtan>
                                    </tr>
                                    <tr>
                                        <TdModalShurtanFirst>Интервал перфарации</TdModalShurtanFirst>
                                        <TdModalShurtan>2727-2750</TdModalShurtan>
                                    </tr>
                                    <tr>
                                        <TdModalShurtanData colSpan="2">Дата Обновления</TdModalShurtanData>
                                    </tr>
                                    <tr>
                                        <TdModalShurtan colSpan="2">2021-06-17 14:49:22</TdModalShurtan>
                                    </tr>
                                </tbody>
                            </TableModalShurtan>
                            <ButtonModalShurtan onClick={() => setShowModal(prev => !prev)}>OK</ButtonModalShurtan>
                        </ModalDivShurtan>
                    </motion.div>   
                </motion.div>
            ) }
        </AnimatePresence>
    )
}

export default Modal
