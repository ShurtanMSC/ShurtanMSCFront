import React, {useRef, useEffect, useCallback, useContext} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    ModalDivShurtan,
    H2, H2Div, Table, Tr, Th, Td, SaveDiv, PModal, SpanModal,
    // SaveBtnModal,
    CloseBtnModal } from '../../styled'
import {AppContext} from "../../context";

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
    const {uppgDatabase, dateTime} = useContext(AppContext);


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
                                    <Th>Накопленный объем с начала года т.м<sup>3</sup></Th>
                                    <Th>Накопленный объем за предыдущий месяц т.м<sup>3</sup></Th>
                                    <Th>Накопленный объем с начала месяца т.м<sup>3</sup></Th>
                                    <Th>Накопленный объем за прошлые сутки т.м<sup>3</sup></Th>
                                    <Th>Накопленный объем с начала суток т.м<sup>3</sup></Th>
                                    <Th>Расход т.м<sup>3</sup>/ч</Th>
                                    <Th>Перепад давления кПа</Th>
                                    <Th>Давление кгс/см<sup>3</sup></Th>
                                    <Th>Температура <sup>o</sup>C</Th>
                                </Tr>
                                </thead>
                                <tbody>
                                <Tr>
                                    <Td>{uppgDatabase&&uppgDatabase[0] ? (Math.round(uppgDatabase[0].nakoplenniy_obyom*100)/100) : 0}</Td>
                                    <Td>{uppgDatabase&&uppgDatabase[0] ? (Math.round(uppgDatabase[0].nakoplenniy_obyom_za_pered_mesyach*100)/100) : 0}</Td>
                                    <Td>{uppgDatabase&&uppgDatabase[0] ? (Math.round(uppgDatabase[0].nakoplenniy_obyom_s_nachalo_mesyach*100)/100) : 0}</Td>
                                    <Td>{uppgDatabase&&uppgDatabase[0] ? (Math.round(uppgDatabase[0].nakoplenniy_obyom_za_vchera*100)/100) : 0}</Td>
                                    <Td>{uppgDatabase&&uppgDatabase[0] ? (Math.round(uppgDatabase[0].nakoplenniy_obyom_s_nachalo_sutok*100)/100) : 0}</Td>
                                    <Td>{uppgDatabase&&uppgDatabase[0] ? (Math.round(uppgDatabase[0].rasxod*100)/100) : 0}</Td>
                                    <Td>{uppgDatabase&&uppgDatabase[0] ? (Math.round(uppgDatabase[0].perepad_davleniya*100)/100) : 0}</Td>
                                    <Td>{uppgDatabase&&uppgDatabase[0] ? (Math.round(uppgDatabase[0].davleniya*100*10.2)/100) : 0}</Td>
                                    <Td>{uppgDatabase&&uppgDatabase[0] ? (Math.round(uppgDatabase[0].temperatura*100)/100) : 0}</Td>
                                </Tr>
                                </tbody>
                            </Table>
                            <H2Div style={{marginTop:'15px'}}>
                                <H2>УППГ-2</H2>
                            </H2Div>
                            <Table>
                                <thead>
                                <Tr>
                                    <Th>Накопленный объем с начала года т.м<sup>3</sup></Th>
                                    <Th>Накопленный объем за предыдущий месяц т.м<sup>3</sup></Th>
                                    <Th>Накопленный объем с начала месяца т.м<sup>3</sup></Th>
                                    <Th>Накопленный объем за прошлые сутки т.м<sup>3</sup></Th>
                                    <Th>Накопленный объем с начала суток т.м<sup>3</sup></Th>
                                    <Th>Расход т.м<sup>3</sup>/ч</Th>
                                    <Th>Перепад давления кПа</Th>
                                    <Th>Давление кгс/см<sup>3</sup></Th>
                                    <Th>Температура <sup>o</sup>C</Th>
                                </Tr>
                                </thead>
                                <tbody>
                                <Tr>
                                    <Td>{uppgDatabase&&uppgDatabase[1] ? (Math.round(uppgDatabase[1].nakoplenniy_obyom*100)/100) : 0}</Td>
                                    <Td>{uppgDatabase&&uppgDatabase[1] ? (Math.round(uppgDatabase[1].nakoplenniy_obyom_za_pered_mesyach*100)/100) : 0}</Td>
                                    <Td>{uppgDatabase&&uppgDatabase[1] ? (Math.round(uppgDatabase[1].nakoplenniy_obyom_s_nachalo_mesyach*100)/100) : 0}</Td>
                                    <Td>{uppgDatabase&&uppgDatabase[1] ? (Math.round(uppgDatabase[1].nakoplenniy_obyom_za_vchera*100)/100):0}</Td>
                                    <Td>{uppgDatabase&&uppgDatabase[1] ? (Math.round(uppgDatabase[1].nakoplenniy_obyom_s_nachalo_sutok*100)/100) : 0}</Td>
                                    <Td>{uppgDatabase&&uppgDatabase[1] ? (Math.round(uppgDatabase[1].rasxod*100)/100) :  0 }</Td>
                                    <Td>{uppgDatabase&&uppgDatabase[1] ? (Math.round(uppgDatabase[1].perepad_davleniya*100)/100) : 0}</Td>
                                    <Td>{uppgDatabase&&uppgDatabase[1] ? (Math.round(uppgDatabase[1].davleniya*100*10.2)/100) : 0}</Td>
                                    <Td>{uppgDatabase&&uppgDatabase[1] ? (Math.round(uppgDatabase[1].temperatura*100)/100) : 0}</Td>
                                </Tr>
                                </tbody>
                            </Table>
                            <SaveDiv>
                                <div>
                                    <PModal>Дата изменения: <SpanModal> {dateTime} </SpanModal> </PModal>
                                </div>
                                <div>
                                    {/*<SaveBtnModal>Сохранит.</SaveBtnModal>*/}
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
