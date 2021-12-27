import React, { useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    ModalDivShurtan,
    H2, H2Div, Table, Tr, Th, TdFirst, Td, InputModal, SaveDiv, PModal, SpanModal,
    // SaveBtnModal,
    CloseBtnModal } from '../../styled'
import styled from 'styled-components'

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

const BtnSearchModal = ({showBtnSearch, setShowBtnSearch, uppgId, selectedUppg}) => {
    const modalRef = useRef();

    const closeModal = e => {
        if( modalRef.current === e.target ) {
            setShowBtnSearch(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showBtnSearch){
            setShowBtnSearch(false)
        }
    }, [setShowBtnSearch, showBtnSearch]);

    useEffect(()=>{
        document.addEventListener('keydown', keyPress);
        return() => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <AnimatePresence>
            { showBtnSearch && (
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
                                <H2>Управление УППГ-{uppgId}</H2>
                            </H2Div>
                            <Table>
                                <thead>
                                <Tr>
                                    <Th style={{padding:'1rem'}}>Добыча</Th>
                                    <Th>Часовая</Th>
                                    <Th>За тек. сутки</Th>
                                    <Th>За тек. месяц</Th>
                                    <Th>С нач. года</Th>
                                </Tr>
                                </thead>
                                <tbody>
                                <Tr>
                                    <TdFirstChange>Проектная производительность, м³/год</TdFirstChange>
                                    <Td> <InputModal
                                        type="text"
                                        name="name"
                                        defaultValue={(selectedUppg ? Math.round(selectedUppg.objectActionDto.designedPerformance*10)/10 : "")}
                                        disabled />
                                    </Td>
                                    <Td> <InputModal
                                        type="text"
                                        name="name"
                                        defaultValue={(selectedUppg ? Math.round(selectedUppg.objectActionDto.designedPerformance*10)/10*24 : "")}
                                        disabled />
                                    </Td>
                                    <Td> <InputModal
                                        type="text"
                                        name="name"
                                        defaultValue={(selectedUppg ? Math.round(selectedUppg.objectActionDto.designedPerformance*10)/10*24*30 : "")}
                                        disabled />
                                    </Td>
                                    <Td> <InputModal
                                        type="text"
                                        name="name"
                                        defaultValue={(selectedUppg ? Math.round(selectedUppg.objectActionDto.designedPerformance*10)/10*24*365 : "")}
                                        disabled />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <TdFirstChange>Фактическая производителность, м³/год</TdFirstChange>
                                    <Td> <InputModal
                                        type="text"
                                        name="name"
                                        defaultValue={(selectedUppg ? Math.round(selectedUppg.objectActionDto.actualPerformance*10)/10 : "")}
                                        disabled />
                                    </Td>
                                    <Td> <InputModal
                                        type="text"
                                        name="name"
                                        defaultValue={(selectedUppg ? Math.round(selectedUppg.objectActionDto.actualPerformance*10)/10*24 : "")}
                                        disabled />
                                    </Td>
                                    <Td> <InputModal
                                        type="text"
                                        name="name"
                                        defaultValue={(selectedUppg ? Math.round(selectedUppg.objectActionDto.actualPerformance*10)/10*24*30 : "")}
                                        disabled />
                                    </Td>
                                    <Td> <InputModal
                                        type="text"
                                        name="name"
                                        defaultValue={(selectedUppg ? Math.round(selectedUppg.objectActionDto.actualPerformance*10)/10*24*365 : "")}
                                        disabled />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <TdFirstChange>По газу, тыс.м³</TdFirstChange>
                                    <Td> <InputModal
                                        type="text"
                                        name="name"
                                        defaultValue={(selectedUppg ? Math.round(selectedUppg.objectActionDto.expend*10)/10/1000 : "")}
                                        disabled/>
                                    </Td>
                                    <Td> <InputModal
                                        type="text"
                                        name="name"
                                        defaultValue={(selectedUppg ? Math.round(selectedUppg.objectActionDto.expend*10)/10*24/1000 : "")}
                                        disabled/>
                                    </Td>
                                    <Td> <InputModal
                                        type="text"
                                        name="name"
                                        defaultValue={(selectedUppg ? Math.round(selectedUppg.objectActionDto.expend*10)/10*24*30/1000 : "")}
                                        disabled/>
                                    </Td>
                                    <Td> <InputModal
                                        type="text"
                                        name="name"
                                        defaultValue={(selectedUppg ? Math.round(selectedUppg.objectActionDto.expend*10)/10*24*365/1000 : "")}
                                        disabled/>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <TdFirstChange>По конденсату, тыс.т</TdFirstChange>
                                    <Td> <InputModal
                                        type="text"
                                        name="name"
                                        defaultValue={(selectedUppg ? Math.round(selectedUppg.objectActionDto.condensate*10)/10/1000 : "")}
                                        disabled/>
                                    </Td>
                                    <Td> <InputModal
                                        type="text"
                                        name="name"
                                        defaultValue={(selectedUppg ? Math.round(selectedUppg.objectActionDto.condensate*10)/10*24/1000 : "")}
                                        isabled/>
                                    </Td>
                                    <Td> <InputModal
                                        type="text"
                                        name="name"
                                        defaultValue={(selectedUppg ? Math.round(selectedUppg.objectActionDto.condensate*10)/10*24*30/1000 : "")}
                                        disabled/>
                                    </Td>
                                    <Td> <InputModal
                                        type="text"
                                        name="name"
                                        defaultValue={(selectedUppg ? Math.round(selectedUppg.objectActionDto.condensate*10)/10*24*365/1000 : "")}
                                        disabled/>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <TdFirstChange>По воде, тыс.т</TdFirstChange>
                                    <Td colSpan="4">
                                        <InputModal
                                        type="text"
                                        name="name"
                                        defaultValue={selectedUppg ? Math.round(selectedUppg.objectActionDto.onWater*10)/10/1000 : ""}
                                        disabled/>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <TdFirstChange>Входное давление, кгс/см²</TdFirstChange>
                                    <Td colSpan="4">
                                        <InputModal
                                        type="text"
                                        name="name"
                                        defaultValue={selectedUppg ? Math.round(selectedUppg.objectActionDto.incomePressure*10)/10 : ""}
                                        disabled/>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <TdFirstChange>Выходное давление, кгс/см²</TdFirstChange>
                                    <Td colSpan="4">
                                        <InputModal
                                        type="text"
                                        name="name"
                                        defaultValue={selectedUppg ? Math.round(selectedUppg.objectActionDto.exitPressure*10)/10 : ""}
                                        disabled/>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <TdFirstChange>Входная температура, °C</TdFirstChange>
                                    <Td colSpan="4">
                                        <InputModal
                                        type="text"
                                        name="name"
                                        defaultValue={selectedUppg ? Math.round(selectedUppg.objectActionDto.incomeTemperature*10)/10 : ""}
                                        disabled/>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <TdFirstChange>Выходная температура, °C</TdFirstChange>
                                    <Td colSpan="4">
                                        <InputModal
                                        type="text"
                                        name="name"
                                        defaultValue={selectedUppg ? Math.round(selectedUppg.objectActionDto.exitTemperature*10)/10 : ""}
                                        disabled/>
                                    </Td>
                                </Tr>
                                </tbody>
                            </Table>
                            <SaveDiv>
                                <div>
                                    <PModal>Дата изменения:
                                        <SpanModal> {(selectedUppg ? selectedUppg.objectActionDto.createdAt.slice(0, 10) : "")} </SpanModal>
                                        <SpanModal> {(selectedUppg ? selectedUppg.objectActionDto.createdAt.slice(11, 19) : "")} </SpanModal>
                                    </PModal>
                                </div>
                                <div>
                                    {/*<SaveBtnModal>Сохранит</SaveBtnModal>*/}
                                    <CloseBtnModal
                                        onClick={()=> setShowBtnSearch(prev => !prev)}>Закрыт
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
const TdFirstChange = styled(TdFirst)`
  text-align:start;
  padding-left: 5px;
  width: 270px;
`
export default BtnSearchModal
