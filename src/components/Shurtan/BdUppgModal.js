import React, { useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    ModalDivShurtan,
    H2, H2Div, Table, Tr, Th, Td, SaveDiv, PModal, SpanModal, SaveBtnModal, CloseBtnModal } from '../../styled'

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

const modalSP = {
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

const BtnSearchModal = ({showBdUppgModal, setShowBdUppgModal}) => {
    const modalRef = useRef();

    const closeModal = e => {
        if( modalRef.current === e.target ) {
            setShowBdUppgModal(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showBdUppgModal){
            setShowBdUppgModal(false)
        }
    }, [setShowBdUppgModal, showBdUppgModal]);

    useEffect(()=>{
        document.addEventListener('keydown', keyPress);
        return() => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <AnimatePresence>
            { showBdUppgModal && (
                <motion.div className="backdrop"
                            variants={backdrop}
                            initial="hidden"
                            animate="visible"
                            ref={modalRef}
                            onClick={closeModal}
                >
                    <motion.div className="modalSP"
                                variants={modalSP}
                    >
                        <ModalDivShurtan>
                            <H2Div>
                                <H2>Мониторинг УППГ</H2>
                            </H2Div>
                            <H2Div>
                                <H2>УППГ-1</H2>
                            </H2Div>
                            <Table>
                                <thead>
                                <Tr>
                                    <Th>Накопленный объем</Th>
                                    <Th>Накопленный объем с начала суток</Th>
                                    <Th>Накопленный объем за вчера</Th>
                                    <Th>Накопленный объем с начала месяца</Th>
                                    <Th>Накопленный объем за предыдущий месяц</Th>
                                    <Th>Перепад давления</Th>
                                    <Th>Давление</Th>
                                    <Th>Температура</Th>
                                    <Th>Расход</Th>
                                </Tr>
                                </thead>
                                <tbody>
                                <Tr>
                                    <Td>0</Td>
                                    <Td>0</Td>
                                    <Td>0</Td>
                                    <Td>0</Td>
                                    <Td>0</Td>
                                    <Td>0</Td>
                                    <Td>0</Td>
                                    <Td>0</Td>
                                    <Td>0</Td>
                                </Tr>
                                </tbody>
                            </Table>
                            <H2Div style={{marginTop:'15px'}}>
                                <H2>УППГ-2</H2>
                            </H2Div>
                            <Table>
                                <thead>
                                <Tr>
                                    <Th>Накопленный объем</Th>
                                    <Th>Накопленный объем с начала суток</Th>
                                    <Th>Накопленный объем за вчера</Th>
                                    <Th>Накопленный объем с начала месяца</Th>
                                    <Th>Накопленный объем за предыдущий месяц</Th>
                                    <Th>Перепад давления</Th>
                                    <Th>Давление</Th>
                                    <Th>Температура</Th>
                                    <Th>Расход</Th>
                                </Tr>
                                </thead>
                                <tbody>
                                <Tr>
                                    <Td>0</Td>
                                    <Td>0</Td>
                                    <Td>0</Td>
                                    <Td>0</Td>
                                    <Td>0</Td>
                                    <Td>0</Td>
                                    <Td>0</Td>
                                    <Td>0</Td>
                                    <Td>0</Td>
                                </Tr>
                                </tbody>
                            </Table>
                            <SaveDiv>
                                <div>
                                    <PModal>Дата изменения: <SpanModal> 03.08.2021 </SpanModal> <SpanModal> 13:45:48 </SpanModal> </PModal>
                                </div>
                                <div>
                                    <SaveBtnModal>Сохранит</SaveBtnModal>
                                    <CloseBtnModal
                                        onClick={()=> setShowBdUppgModal(prev => !prev)}>Закрыт
                                    </CloseBtnModal>
                                </div>
                            </SaveDiv>
                        </ModalDivShurtan>
                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
    )
}
export default BtnSearchModal
