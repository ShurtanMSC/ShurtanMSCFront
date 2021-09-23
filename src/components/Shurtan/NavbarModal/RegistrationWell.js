import React, {useRef, useEffect, useCallback, useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    AddGasNavbarModalDiv,
    NavbarModalP,
    ButtonNavbarCancel,
    ButtonNavbarSave,
    ButtonDiv,
    ParametersP,
    ParametersDiv,
    ParametersCard,
    ParametersInput,
    LabelNav,
    SelectNav,
    NavbarModalInput,
    AddFactDiv, CurrentMonthDiv
} from '../../../styled'
import styled from 'styled-components'
import axios from 'axios';

// Modal animation
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

const RegistrationWell = ({showRegistrationWell, setShowRegistrationWell}) => {
    // Edit
    const [numberWell, setNumberWell] = useState('');
    const [uppg, setUppg] = useState('');
    const [point, setPoint] = useState('');
    const [horizon, setHorizon] = useState('');
    const [comDate, setComDate] = useState('');
    const [drillDate, setDrillDate] = useState('');
    const [category, setCategory] = useState('');
    const [state, setState] = useState('');
    const [interval, setInterval] = useState('');
    const [altitude, setAltitude] = useState('');
    const [depth, setDepth] = useState('');
    const [coordX, setCoordX] = useState('');
    const [coordY, setCoordY] = useState('');
    // Get apiUppg
    const [getUppg, setGetUppg] = useState([]);
    // Get apiPoint
    const [getPoint, setGetPoint] = useState([]);

    const handlerNumberWell = e => {
        setNumberWell(e.target.value);
    }
    const handlerUppg = e => {
        setUppg(e.target.value);
        if(e.target.value.length > 0)
        axios.get('https://shurtan.herokuapp.com/api/collection_point/all/uppg/' + e.target.value)
            .then(res=>{setGetPoint(res.data.object); console.log(res.data.object)});
    }
    const handlerPoint = e => {
        setPoint(e.target.value);
    }
    const handlerHorizon = e => {
        setHorizon(e.target.value);
    }
    const handlerComDate = e => {
        setComDate(e.target.value);
    }
    const handlerDrillDate = e => {
        setDrillDate(e.target.value);
    }
    const handlerCategory = e => {
        setCategory(e.target.value);
    }
    const handlerState = e => {
        setState(e.target.value);
    }
    const handlerInterval = e => {
        setInterval(e.target.value);
    }
    const handlerAltitude = e => {
        setAltitude(e.target.value);
    }
    const handlerDepth = e => {
        setDepth(e.target.value);
    }
    const hadlerCoordX = e => {
        setCoordX(e.target.value);
    }
    const hadlerCoordY = e => {
        setCoordY(e.target.value);
    }

    const handlerSubmit = e => {
        e.preventDefault();
        let data={
            altitude: altitude,
            category: category,
            collectionPointId: point,
            commissioningDate: comDate,
            depth: depth,
            drillingStartDate: drillDate,
            horizon: horizon,
            number: numberWell,
            x: coordX,
            y: coordY
        }
        console.log(data)
        axios.post('https://shurtan.herokuapp.com/api/well/add', data)
            .then(res => {console.log(res)})
    }

    useEffect(()=>{
        // Get apiUppg
        axios.get('https://shurtan.herokuapp.com/api/uppg/all/mining_system/' + 1)
            .then(res=>{setGetUppg(res.data.object); console.log(res.data.object)});
    }, []);

    // Modal animation
    const modalRef = useRef();

    const closeModal = e => {
        if( modalRef.current === e.target ) {
            setShowRegistrationWell(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showRegistrationWell){
            setShowRegistrationWell(false)
        }
    }, [setShowRegistrationWell, showRegistrationWell]);

    useEffect(()=>{
        document.addEventListener('keydown', keyPress);
        return() => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <AnimatePresence>
            { showRegistrationWell && (
                <motion.div className="backdrop"
                            variants={backdrop}
                            initial="hidden"
                            animate="visible"
                            ref={modalRef}
                            onClick={closeModal}
                >
                    <motion.div className="modalWellOparation"
                                variants={modal}
                    >
                        <AddGasNavbarModalDiv>
                            <form onSubmit={handlerSubmit}>
                                <ParametersDiv>
                                    <ParametersCard>
                                        <LabelNav htmlFor="well">Номер скважину</LabelNav>
                                        <ParametersInput type="number" name="well" id="well" value={numberWell} onChange={handlerNumberWell}/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <LabelNav htmlFor="uppg">УППГ</LabelNav>
                                        <SelectNav name="uppg" id="uppg" value={uppg} onChange={handlerUppg}>
                                            <option value="">--Выберите--</option>
                                            {getUppg.map((el, u) =>
                                                <option key={u} value={el.id}>{el.name}</option>
                                            )}
                                        </SelectNav>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <LabelNav htmlFor="sp">СП</LabelNav>
                                        <SelectNav name="sp" id="sp" value={point} onChange={handlerPoint}>
                                            <option value="">--Выберите--</option>
                                            {getPoint.map((el, p) =>
                                                <option key={p} value={el.id}>{el.name}</option>
                                            )}
                                        </SelectNav>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Горизонт</ParametersPChange>
                                        <ParametersInputChange type="text" name="text" value={horizon} onChange={handlerHorizon}/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Дата ввода в эксплуатацию</ParametersPChange>
                                        <ParametersInputChange type="date" name="date" value={comDate} onChange={handlerComDate}/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Дата начала бурения</ParametersPChange>
                                        <ParametersInputChange type="date" name="date" value={drillDate} onChange={handlerDrillDate}/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <LabelNav htmlFor="category">Категория</LabelNav>
                                        <SelectNav name="category" id="category" value={category} onChange={handlerCategory}>
                                            <option value="">--Выберите--</option>
                                            <option value="MINING">Добывающая</option>
                                            <option value="DISCHARGE">Нагнетательная</option>
                                            <option value="EXPLORATION">Разведочная</option>
                                            <option value="PIEZOMETRIC">Пьезометрическая</option>
                                        </SelectNav>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <LabelNav htmlFor="state">Состояние</LabelNav>
                                        <SelectNav name="state" id="state" value={state} onChange={handlerState}>
                                            <option value="">--Выберите--</option>
                                            <option value="IN_WORK">в работе</option>
                                            <option value="IN_IDLE">в простое</option>
                                            <option value="IN_REPAIR">в ремонте</option>
                                            <option value="IN_CONSERVATION">в консервации</option>
                                            <option value="IN_LIQUIDATION">в ликвидации</option>
                                        </SelectNav>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Интервал перфарации</ParametersPChange>
                                        <ParametersInputChange type="number" name="number" value={interval} onChange={handlerInterval}/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Альтитуда, м</ParametersPChange>
                                        <ParametersInputChange type="number" name="number" value={altitude} onChange={handlerAltitude}/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Глубина, м</ParametersPChange>
                                        <ParametersInputChange type="number" name="number" value={depth} onChange={handlerDepth}/>
                                    </ParametersCard>
                                </ParametersDiv>
                                <CurrentMonthDivChange>
                                    <div>
                                        <NavbarModalP>Координаты</NavbarModalP>
                                        <NavbarModalInputChange type="number" name="number" placeholder="X=" value={coordX} onChange={hadlerCoordX}/>
                                    </div>
                                    <AddFactDiv>
                                        <NavbarModalP>Координаты</NavbarModalP>
                                        <NavbarModalInputChange type="number" name="number" placeholder="Y=" value={coordY} onChange={hadlerCoordY}/>
                                    </AddFactDiv>
                                </CurrentMonthDivChange>
                                <ButtonDivChange>
                                    <ButtonNavbarSave>Сохранить</ButtonNavbarSave>
                                    <ButtonNavbarCancel onClick={() => setShowRegistrationWell(prev => !prev)}>Назад</ButtonNavbarCancel>
                                </ButtonDivChange>
                            </form>
                        </AddGasNavbarModalDiv>
                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
    )
}
const ParametersPChange = styled(ParametersP)`
  text-align: center;
  width: 220px;
`
const ParametersInputChange = styled(ParametersInput)`
  width:170px;
`
const NavbarModalInputChange = styled(NavbarModalInput)`
  text-align: start;
  padding-left: 25px;
`
const CurrentMonthDivChange = styled(CurrentMonthDiv)`
  margin: 5px;
`
const ButtonDivChange = styled(ButtonDiv)`
  margin: 10px 0 0 0;
`

export default RegistrationWell
