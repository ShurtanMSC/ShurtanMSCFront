import React, { useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    ModalDivShurtan,
    H2, H2Div, Table, Tr, Th, TdFirst, Td, InputModal, SaveDiv, SaveBtnModal, CloseBtnModal,
} from '../../../styled'

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

const modalGrafic = {
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

const TableGraficModal = ({showTableGraficModal, setShowTableGraficModal}) => {
    const modalRef = useRef();

    const closeModal = e => {
        if( modalRef.current === e.target ) {
            setShowTableGraficModal(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showTableGraficModal){
            setShowTableGraficModal(false)
        }
    }, [setShowTableGraficModal, showTableGraficModal]);

    useEffect(()=>{
        document.addEventListener('keydown', keyPress);
        return() => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <AnimatePresence>
            { showTableGraficModal && (
                <motion.div className="backdrop"
                            variants={backdrop}
                            initial="hidden"
                            animate="visible"
                            ref={modalRef}
                            onClick={closeModal}
                >
                    <motion.div className="modalGrafic"
                                variants={modalGrafic}
                    >
                        <ModalDivShurtan>
                            <H2Div>
                                <H2>Прогноз добычи</H2>
                            </H2Div>
                            <Table>
                                <thead>
                                <Tr>
                                    <Th style={{padding:'1rem', width:'35%'}}>Месяц</Th>
                                    <Th>2020</Th>
                                    <Th>2021</Th>
                                </Tr>
                                </thead>
                                <tbody>
                                <Tr>
                                    <TdFirst>Январь</TdFirst>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Февраль</TdFirst>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Март</TdFirst>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Апрель</TdFirst>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Май</TdFirst>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Июнь</TdFirst>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Июль</TdFirst>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Август</TdFirst>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Сентябрь</TdFirst>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Октябрь</TdFirst>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Ноябрь</TdFirst>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Декабрь</TdFirst>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                </Tr>
                                </tbody>
                            </Table>
                            <SaveDiv>
                                <div style={{marginLeft:'auto'}}>
                                    <SaveBtnModal>Сохранит</SaveBtnModal>
                                    <CloseBtnModal
                                        onClick={()=> setShowTableGraficModal(prev => !prev)}>Закрыт
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

export default TableGraficModal
