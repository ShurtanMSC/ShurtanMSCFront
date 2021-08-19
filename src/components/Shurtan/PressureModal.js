import React, { useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    ModalDivShurtan,
    H2, H2Div, Table, Tr, Th, TdFirst, Td, InputModal, SaveDiv, PModal, SpanModal, SaveBtnModal, CloseBtnModal, SelectModal
} from '../../styled'
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

const PressureModal = ({showPressureModal, setShowPressureModal}) => {
    const modalRef = useRef();

    const closeModal = e => {
        if( modalRef.current === e.target ) {
            setShowPressureModal(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showPressureModal){
            setShowPressureModal(false)
        }
    }, [setShowPressureModal, showPressureModal]);

    useEffect(()=>{
        document.addEventListener('keydown', keyPress);
        return() => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <AnimatePresence>
            { showPressureModal && (
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
                                <H2>Показатели скважин СП-1</H2>
                            </H2Div>
                            <TableUp>
                                <thead>
                                    <Tr>
                                        <Th style={{padding:'1rem'}}>Наименование</Th>
                                        <ThUp>Рсп</ThUp>
                                        <ThUp>Расход, м³/ч</ThUp>
                                        <ThUp>Темрература</ThUp>
                                    </Tr>
                                </thead>
                                <tbody>
                                    <Tr>
                                        <TdFirst>СП-1</TdFirst>
                                        <TdUp> <InputModal type="text"  name="name" /> </TdUp>
                                        <TdUp> <InputModal type="text"  name="name" disabled/> </TdUp>
                                        <TdUp> <InputModal type="text"  name="name" /> </TdUp>
                                    </Tr>
                                </tbody>
                            </TableUp>
                            <Table>
                                <thead>
                                <Tr>
                                    <Th style={{padding:'1rem'}}>Наименование</Th>
                                    <Th>Ру</Th>
                                    <Th>Рпл</Th>
                                    <Th>Расход, м³/ч</Th>
                                    <Th>Темрература</Th>
                                    <Th>Состояние</Th>
                                    <Th>Изменение статуса</Th>
                                </Tr>
                                </thead>
                                <tbody>
                                <Tr>
                                    <TdFirst>154</TdFirst>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" value="9000" disabled/> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td>
                                        <SelectModal>
                                            <option>в работе</option>
                                            <option>в простое</option>
                                            <option>в ремонте</option>
                                            <option>в консервации</option>
                                            <option>в ликвидации</option>
                                        </SelectModal>
                                    </Td>
                                    <Td> <InputModal type="text"  name="name" disabled/> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>155</TdFirst>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" value="9000" disabled/> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td>
                                        <SelectModal>
                                            <option>в работе</option>
                                            <option>в простое</option>
                                            <option>в ремонте</option>
                                            <option>в консервации</option>
                                            <option>в ликвидации</option>
                                        </SelectModal>
                                    </Td>
                                    <Td> <InputModal type="text"  name="name" disabled/> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>157</TdFirst>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" value="9000" disabled/> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td>
                                        <SelectModal>
                                            <option>в работе</option>
                                            <option>в простое</option>
                                            <option>в ремонте</option>
                                            <option>в консервации</option>
                                            <option>в ликвидации</option>
                                        </SelectModal>
                                    </Td>
                                    <Td> <InputModal type="text"  name="name" disabled/> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>158</TdFirst>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" value="9000" disabled/> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td>
                                        <SelectModal>
                                            <option>в работе</option>
                                            <option>в простое</option>
                                            <option>в ремонте</option>
                                            <option>в консервации</option>
                                            <option>в ликвидации</option>
                                        </SelectModal>
                                    </Td>
                                    <Td> <InputModal type="text"  name="name" disabled/> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>169</TdFirst>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" value="9000" disabled/> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td>
                                        <SelectModal>
                                            <option>в работе</option>
                                            <option>в простое</option>
                                            <option>в ремонте</option>
                                            <option>в консервации</option>
                                            <option>в ликвидации</option>
                                        </SelectModal>
                                    </Td>
                                    <Td> <InputModal type="text"  name="name" disabled/> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>309</TdFirst>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" value="9000" disabled/> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td>
                                        <SelectModal>
                                            <option>в работе</option>
                                            <option>в простое</option>
                                            <option>в ремонте</option>
                                            <option>в консервации</option>
                                            <option>в ликвидации</option>
                                        </SelectModal>
                                    </Td>
                                    <Td> <InputModal type="text"  name="name" disabled/> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>312</TdFirst>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td> <InputModal type="text"  name="name" value="9000" disabled/> </Td>
                                    <Td> <InputModal type="text"  name="name" /> </Td>
                                    <Td>
                                        <SelectModal>
                                            <option>в работе</option>
                                            <option>в простое</option>
                                            <option>в ремонте</option>
                                            <option>в консервации</option>
                                            <option>в ликвидации</option>
                                        </SelectModal>
                                    </Td>
                                    <Td> <InputModal type="text"  name="name" disabled/> </Td>
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
                                        onClick={()=> setShowPressureModal(prev => !prev)}>Закрыт
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
const TableUp = styled(Table)`
  margin-bottom: 2%;
`
const ThUp = styled(Th)`
  width: 30%;
`
const TdUp = styled(Td)`
  width: 30%;
`
export default PressureModal
