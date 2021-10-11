import React, {useRef, useEffect, useCallback, useState, useContext} from 'react';
import {AppContext} from '../../context'
import { motion, AnimatePresence } from 'framer-motion'
import {
    ModalDivShurtan,
    H2, H2Div, Table, Tr, Th, TdFirst, Td, InputModal, SaveDiv, PModal, SpanModal, SaveBtnModal, CloseBtnModal, SelectModal
} from '../../styled'
import styled from 'styled-components';
import axios from "axios";
import {configHeader} from "../../utills/congifHeader";
import {BASE_URL} from "../../utills/constant"


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

const PressureModal = ({showPressureModal, setShowPressureModal, id, sp, wellPressureModal}) => {
    const {setPressureApi} = useContext(AppContext);

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

    // API
    const handlerSubmit = e => {
        e.preventDefault();
        axios.post(BASE_URL + '/api/collection_point/manually/add/action',
            {
                collectionPointId: sp.objectDto.id,
                pressure: rsp,
                temperature: temp,
            }, configHeader)
            .then(res => {
                if (res.status===201)
                    axios.get(BASE_URL + '/api/collection_point/all/action/mining_system/' + 1, configHeader)
                        .then(res1 => {setPressureApi(res1.data.object) })
                        .catch(err => {console.log(err) })
                })
            .catch(err => {console.log(err)
            })
        setShowPressureModal(prev => !prev)
    }
    const [ rsp, setRsp ] = useState('');
    const [ temp, setTemp ] = useState('');
    const handlerRsp = e => {
        setRsp(e.target.value);
    }
    const handlerTemp = e => {
        setTemp(e.target.value);
    }

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
                            <form onSubmit={handlerSubmit}>
                            <H2Div>
                                <H2>Показатели скважин {id}</H2>
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
                                        <TdFirst>{id}</TdFirst>
                                        <TdUp> <InputModal type="text" name="name" defaultValue={sp.objectActionDto !== null ? Math.round((sp.objectActionDto.pressure)*10)/10 : ""} onChange={handlerRsp} required/> </TdUp>
                                        <TdUp> <InputModal type="text" name="name" value={sp.objectActionDto !== null ? Math.round((sp.objectActionDto.expand)*10)/10  : ""} disabled/></TdUp>
                                        <TdUp> <InputModal type="text" name="name" defaultValue={sp.objectActionDto !== null ? Math.round((sp.objectActionDto.temperature)*10)/10 : ""} onChange={handlerTemp} required/> </TdUp>
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
                                {wellPressureModal.map(el =>
                                    <Tr key={el.objectDto.number}>
                                        <TdFirst>{el.objectDto.number}</TdFirst>
                                        <Td> <InputModal type="text"  name="name" defaultValue={el.objectActionDto.pressure}/> </Td>
                                        <Td> <InputModal type="text"  name="name" defaultValue={el.objectActionDto.rpl}/> </Td>
                                        <Td> <InputModal type="text"  name="name" value={Math.round(el.objectActionDto.expend*10)/10} disabled/> </Td>
                                        <Td> <InputModal type="text"  name="name" defaultValue={el.objectActionDto.temperature}/> </Td>
                                        <Td>
                                            <SelectModal defaultValue={el.objectActionDto.status}>
                                                <option value="IN_WORK">в работе</option>
                                                <option value="IN_IDLE">в простое</option>
                                                <option value="IN_REPAIR">в ремонте</option>
                                                <option value="IN_CONSERVATION">в консервации</option>
                                                <option value="IN_LIQUIDATION">в ликвидации</option>
                                            </SelectModal>
                                        </Td>
                                        <Td> <InputModal type="text"  name="name" value={el.objectActionDto.date.slice(0, 10)} disabled/> </Td>
                                    </Tr>
                                )}
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
                            </form>
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
