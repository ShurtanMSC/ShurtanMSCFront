import React, {useRef, useEffect, useCallback, useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    ModalDivShurtan,
    H2, H2Div, Table, Tr, Th, TdFirst, Td, InputModal, SaveDiv, SaveBtnModal, CloseBtnModal,
} from '../../../styled';
import axios from 'axios';
import {configHeader} from "../../../utills/congifHeader";

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
    // Edit
    const [ lastYear01, setLastYear01 ] = useState('');
    const [ thisYear01, setThisYear01 ] = useState('');
    const [ lastYear02, setLastYear02 ] = useState('');
    const [ thisYear02, setThisYear02 ] = useState('');
    const [ lastYear03, setLastYear03 ] = useState('');
    const [ thisYear03, setThisYear03 ] = useState('');
    const [ lastYear04, setLastYear04 ] = useState('');
    const [ thisYear04, setThisYear04 ] = useState('');
    const [ lastYear05, setLastYear05 ] = useState('');
    const [ thisYear05, setThisYear05 ] = useState('');
    const [ lastYear06, setLastYear06 ] = useState('');
    const [ thisYear06, setThisYear06 ] = useState('');
    const [ lastYear07, setLastYear07 ] = useState('');
    const [ thisYear07, setThisYear07 ] = useState('');
    const [ lastYear08, setLastYear08 ] = useState('');
    const [ thisYear08, setThisYear08 ] = useState('');
    const [ lastYear09, setLastYear09 ] = useState('');
    const [ thisYear09, setThisYear09 ] = useState('');
    const [ lastYear10, setLastYear10 ] = useState('');
    const [ thisYear10, setThisYear10 ] = useState('');
    const [ lastYear11, setLastYear11 ] = useState('');
    const [ thisYear11, setThisYear11 ] = useState('');
    const [ lastYear12, setLastYear12 ] = useState('');
    const [ thisYear12, setThisYear12 ] = useState('');

    const handlerLastYear01 = e => {
        setLastYear01(e.target.value);
    }
    const handlerThisYear01 = e => {
        setThisYear01(e.target.value);
    }
    const handlerLastYear02 = e => {
        setLastYear02(e.target.value);
    }
    const handlerThisYear02 = e => {
        setThisYear02(e.target.value);
    }
    const handlerLastYear03 = e => {
        setLastYear03(e.target.value);
    }
    const handlerThisYear03 = e => {
        setThisYear03(e.target.value);
    }
    const handlerLastYear04 = e => {
        setLastYear04(e.target.value);
    }
    const handlerThisYear04 = e => {
        setThisYear04(e.target.value);
    }
    const handlerLastYear05 = e => {
        setLastYear05(e.target.value);
    }
    const handlerThisYear05 = e => {
        setThisYear05(e.target.value);
    }
    const handlerLastYear06 = e => {
        setLastYear06(e.target.value);
    }
    const handlerThisYear06 = e => {
        setThisYear06(e.target.value);
    }
    const handlerLastYear07 = e => {
        setLastYear07(e.target.value);
    }
    const handlerThisYear07 = e => {
        setThisYear07(e.target.value);
    }
    const handlerLastYear08 = e => {
        setLastYear08(e.target.value);
    }
    const handlerThisYear08 = e => {
        setThisYear08(e.target.value);
    }
    const handlerLastYear09 = e => {
        setLastYear09(e.target.value);
    }
    const handlerThisYear09 = e => {
        setThisYear09(e.target.value);
    }
    const handlerLastYear10 = e => {
        setLastYear10(e.target.value);
    }
    const handlerThisYear10 = e => {
        setThisYear10(e.target.value);
    }
    const handlerLastYear11 = e => {
        setLastYear11(e.target.value);
    }
    const handlerThisYear11 = e => {
        setThisYear11(e.target.value);
    }
    const handlerLastYear12 = e => {
        setLastYear12(e.target.value);
    }
    const handlerThisYear12 = e => {
        setThisYear12(e.target.value);
    }
    const handlerSubmit = e => {
        e.preventDefault();
        let data=[
            {
                "amount": lastYear01,
                "mining_system_id": 1,
                "month": 'JANUARY',
                "year": 2020,
            },
            {
                "amount": thisYear01,
                "mining_system_id": 1,
                "month": 'JANUARY',
                "year": 2021,
            },
            {
                "amount": lastYear02,
                "mining_system_id": 1,
                "month": 'FEBRUARY',
                "year": 2020,
            },
            {
                "amount": thisYear02,
                "mining_system_id": 1,
                "month": 'FEBRUARY',
                "year": 2021,
            },
            {
                "amount": lastYear03,
                "mining_system_id": 1,
                "month": 'MARCH',
                "year": 2020,
            },
            {
                "amount": thisYear03,
                "mining_system_id": 1,
                "month": 'MARCH',
                "year": 2021,
            },
            {
                "amount": lastYear04,
                "mining_system_id": 1,
                "month": 'APRIL',
                "year": 2020,
            },
            {
                "amount": thisYear04,
                "mining_system_id": 1,
                "month": 'APRIL',
                "year": 2021,
            },
            {
                "amount": lastYear05,
                "mining_system_id": 1,
                "month": 'MAY',
                "year": 2020,
            },
            {
                "amount": thisYear05,
                "mining_system_id": 1,
                "month": 'MAY',
                "year": 2021,
            },
            {
                "amount": lastYear06,
                "mining_system_id": 1,
                "month": 'JUNE',
                "year": 2020,
            },
            {
                "amount": thisYear06,
                "mining_system_id": 1,
                "month": 'JUNE',
                "year": 2021,
            },
            {
                "amount": lastYear07,
                "mining_system_id": 1,
                "month": 'JULY',
                "year": 2020,
            },
            {
                "amount": lastYear07,
                "mining_system_id": 1,
                "month": 'JULY',
                "year": 2021,
            },
            {
                "amount": lastYear08,
                "mining_system_id": 1,
                "month": 'AUGUST',
                "year": 2020,
            },
            {
                "amount": thisYear08,
                "mining_system_id": 1,
                "month": 'AUGUST',
                "year": 2021,
            },
            {
                "amount": lastYear09,
                "mining_system_id": 1,
                "month": 'SEPTEMBER',
                "year": 2020,
            },
            {
                "amount": thisYear09,
                "mining_system_id": 1,
                "month": 'SEPTEMBER',
                "year": 2021,
            },
            {
                "amount": lastYear10,
                "mining_system_id": 1,
                "month": 'OCTOBER',
                "year": 2020,
            },
            {
                "amount": thisYear10,
                "mining_system_id": 1,
                "month": 'OCTOBER',
                "year": 2021,
            },
            {
                "amount": lastYear11,
                "mining_system_id": 1,
                "month": 'NOVEMBER',
                "year": 2020,
            },
            {
                "amount": thisYear11,
                "mining_system_id": 1,
                "month": 'NOVEMBER',
                "year": 2021,
            },
            {
                "amount": lastYear12,
                "mining_system_id": 1,
                "month": 'DECEMBER',
                "year": 2020,
            },
            {
                "amount": thisYear12,
                "mining_system_id": 1,
                "month": 'DECEMBER',
                "year": 2021,
            },
        ];
        axios.post('https://shurtan.herokuapp.com/api/forecast/gas/add/all',
            data,configHeader
            ).then(res => {
                console.log(res.data);
        }).catch(err => {console.log(err);});
        setShowTableGraficModal(prev => !prev);
    }
    //Modal
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
                            <form onSubmit={handlerSubmit} method="post">
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
                                    <TdFirst> <label htmlFor="Year01">Январь</label> </TdFirst>
                                    <Td> <InputModal type="number"  name="Year01" onChange={handlerLastYear01} value={lastYear01} required /> </Td>
                                    <Td> <InputModal type="number"  name="Year01" onChange={handlerThisYear01} value={thisYear01} required /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst> <label htmlFor="Year02">Февраль</label> </TdFirst>
                                    <Td> <InputModal type="number"  name="Year02" onChange={handlerLastYear02} value={lastYear02} required /> </Td>
                                    <Td> <InputModal type="number"  name="Year02" onChange={handlerThisYear02} value={thisYear02} required /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst> <label htmlFor="Year03">Март</label> </TdFirst>
                                    <Td> <InputModal type="number"  name="Year03" onChange={handlerLastYear03} value={lastYear03} required /> </Td>
                                    <Td> <InputModal type="number"  name="Year03" onChange={handlerThisYear03} value={thisYear03} required /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst> <label htmlFor="Year04">Апрель</label> </TdFirst>
                                    <Td> <InputModal type="number"  name="Year04" onChange={handlerLastYear04} value={lastYear04} required /> </Td>
                                    <Td> <InputModal type="number"  name="Year04" onChange={handlerThisYear04} value={thisYear04} required /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst> <label htmlFor="Year05">Май</label> </TdFirst>
                                    <Td> <InputModal type="number"  name="Year05" onChange={handlerLastYear05} value={lastYear05} required /> </Td>
                                    <Td> <InputModal type="number"  name="Year05" onChange={handlerThisYear05} value={thisYear05} required /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst> <label htmlFor="Year06"></label> Июнь</TdFirst>
                                    <Td> <InputModal type="number"  name="Year06" onChange={handlerLastYear06} value={lastYear06} required /> </Td>
                                    <Td> <InputModal type="number"  name="Year06" onChange={handlerThisYear06} value={thisYear06} required /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst> <label htmlFor="Year07">Июль</label> </TdFirst>
                                    <Td> <InputModal type="number"  name="Year07" onChange={handlerLastYear07} value={lastYear07} required /> </Td>
                                    <Td> <InputModal type="number"  name="Year07" onChange={handlerThisYear07} value={thisYear07} required /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst> <label htmlFor="Year08">Август</label> </TdFirst>
                                    <Td> <InputModal type="number"  name="Year08" onChange={handlerLastYear08} value={lastYear08} required /> </Td>
                                    <Td> <InputModal type="number"  name="Year08" onChange={handlerThisYear08} value={thisYear08} required /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst> <label htmlFor="Year09">Сентябрь</label> </TdFirst>
                                    <Td> <InputModal type="number"  name="Year09" onChange={handlerLastYear09} value={lastYear09} required /> </Td>
                                    <Td> <InputModal type="number"  name="Year09" onChange={handlerThisYear09} value={thisYear09} required /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst> <label htmlFor="Year10">Октябрь</label> </TdFirst>
                                    <Td> <InputModal type="number"  name="Year10" onChange={handlerLastYear10} value={lastYear10} required /> </Td>
                                    <Td> <InputModal type="number"  name="Year10" onChange={handlerThisYear10} value={thisYear10} required /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst> <label htmlFor="Year11">Ноябрь</label> </TdFirst>
                                    <Td> <InputModal type="number"  name="Year11" onChange={handlerLastYear11} value={lastYear11} required /> </Td>
                                    <Td> <InputModal type="number"  name="Year11" onChange={handlerThisYear11} value={thisYear11} required /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst> <label htmlFor="Year12">Декабрь</label> </TdFirst>
                                    <Td> <InputModal type="number"  name="Year12" onChange={handlerLastYear12} value={lastYear12} required /> </Td>
                                    <Td> <InputModal type="number"  name="Year12" onChange={handlerThisYear12} value={thisYear12} required /> </Td>
                                </Tr>
                                </tbody>
                            </Table>
                            <SaveDiv>
                                <div style={{marginLeft:'auto'}}>
                                    <SaveBtnModal>Сохранит
                                    </SaveBtnModal>
                                    <CloseBtnModal
                                        onClick={()=> setShowTableGraficModal(prev => !prev)}>Закрыт
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

export default TableGraficModal
