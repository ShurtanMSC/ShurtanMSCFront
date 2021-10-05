import React, {useRef, useEffect, useCallback} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    ModalDivShurtan,
    H2, H2Div, Table, Tr, Th, TdFirst, Td, InputModal, SaveDiv, SaveBtnModal, CloseBtnModal,
} from '../../../styled';
import axios from 'axios';
import {configHeader} from "../../../utills/congifHeader";
import {BASE_URL} from "../../../utills/constant"

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

const TableGraficModalTwo = ({showTableGraficModalTwo, setShowTableGraficModalTwo,setDataCond, dataCond}) => {

    const findMonthName = (month) => {
        if(!month) {
            throw new Error("Season is not defined")
        }
        switch(month){
            case "JANUARY": return "Январь"
            case "FEBRUARY": return "Февраль"
            case "MARCH": return "Март"
            case "APRIL": return "Апрель"
            case "MAY": return "Май"
            case "JUNE": return "Июнь"
            case "JULY": return "Июль"
            case "AUGUST": return "Август"
            case "SEPTEMBER": return "Сентябрь"
            case "OCTOBER": return "Октябрь"
            case "NOVEMBER": return "Ноябрь"
            case "DECEMBER": return "Декабр"
            default: return""
        }
    }
    const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    // Edit
    const findMonth = (month) => {
        if(!month){
            throw new Error("Season is not defined")
        }
        switch(month) {
            case 1: return "JANUARY"
            case 2: return "FEBRUARY"
            case 3: return "MARCH"
            case 4: return "APRIL"
            case 5: return "MAY"
            case 6: return "JUNE"
            case 7: return "JULY"
            case 8: return "AUGUST"
            case 9: return "SEPTEMBER"
            case 10: return "OCTOBER"
            case 11: return "NOVEMBER"
            case 12: return "DECEMBER"
            default:return ""
        }
    }
    const handlerSubmit = useCallback((e) => {
        e.preventDefault();
        let postData=[];
            for(let i = 1; i <= 12; i++) {
                postData.push({
                    amount: document.getElementById("l"+i).value,
                    mining_system_id: 1,
                    month: findMonth(i),
                    year: 2020,
                })
                postData.push({
                    amount: document.getElementById("t"+i).value,
                    mining_system_id:1,
                    month: findMonth(i),
                    year: 2021,
                })
            }
            if(postData.length === 24){
                document.getElementById('save').disabled = true;
                axios.post(BASE_URL + '/api/forecast/condensate/add/all',
                    postData,configHeader
                ).then(res => {
                    setDataCond(res.data.object);
                }).catch(err => {console.log(err);
                });
            }
        setShowTableGraficModalTwo(prev => !prev);
    }, [setDataCond, setShowTableGraficModalTwo]);

    //Modal
    const modalRef = useRef();

    const closeModal = e => {
        if( modalRef.current === e.target ) {
            setShowTableGraficModalTwo(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showTableGraficModalTwo){
            setShowTableGraficModalTwo(false)
        }
    }, [setShowTableGraficModalTwo, showTableGraficModalTwo]);

    useEffect(()=>{
        document.addEventListener('keydown', keyPress);
        return() => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <AnimatePresence>
            { showTableGraficModalTwo && (
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
                                    {dataCond.length === 24?
                                        count.map(number =>
                                            <Tr key={number}>
                                                <TdFirst> <label htmlFor={"Year"+number}>{findMonthName(dataCond[number*2-2].month)}</label> </TdFirst>
                                                <Td> <InputModal min="1" id={"l"+number} type="number" name={"Year"+number} defaultValue={dataCond[number*2-2].amount} required /> </Td>
                                                <Td> <InputModal min="1" id={"t"+number} type="number"  name={"Year" + number} defaultValue={dataCond[number*2-1].amount} required /> </Td>
                                            </Tr>
                                        )
                                        :
                                        count.map(number =>
                                            <Tr key={number}>
                                                <TdFirst> <label htmlFor={"Year"+number}>{findMonthName(findMonth(number))}</label> </TdFirst>
                                                <Td> <InputModal min="1" id={"l"+number} type="number" name={"Year" + number} required /> </Td>
                                                <Td> <InputModal min="1" id={"t"+number} type="number" name={"Year" + number} required /> </Td>
                                            </Tr>
                                        )
                                    }

                                    </tbody>
                                </Table>
                                <SaveDiv>
                                    <div style={{marginLeft:'auto'}}>
                                        <SaveBtnModal id={"save"}>Сохранит
                                        </SaveBtnModal>
                                        <CloseBtnModal
                                            onClick={()=> setShowTableGraficModalTwo(prev => !prev)}>Закрыт
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

export default TableGraficModalTwo
