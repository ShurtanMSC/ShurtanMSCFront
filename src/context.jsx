import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";
import {BASE_URL} from "./utills/constant";
import {configHeader} from './utills/congifHeader'

const AppContext = createContext();

const AppProvider = ({children}) => {
    // REGISTRATION_WELL
    const [numberWell, setNumberWell] = useState('');
    const [uppg, setUppg] = useState('');
    const [point, setPoint] = useState('');
    const [getPoint, setGetPoint] = useState([]);
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
    const [getUppg, setGetUppg] = useState([]);
    // WELL_OPERATION
    const [well, setWell] = useState([]);
    const [selectWell, setSelectWell] = useState(null);
    const [uppgOper, setUppgOper] = useState('');
    const [pointOper, setPointOper] = useState('');
    const [numberWellOper, setNumberWellOper] = useState('');
    const [horizonOper, setHorizonOper] = useState('');
    const [changeDate, setChangeDate] = useState('');
    const [temp, setTemp] = useState('');
    const [perMax, setPerMax] = useState('');
    const [perMin, setPerMin] = useState('');
    const [pressure, setPressure] = useState('');
    // NAVBAR_SHOW_MODAL_REGISTRATION_WELL
    const [showRegistrationWell, setShowRegistrationWell] = useState(false);
    // NAVBAR_SHOW_MODAL_WELL_OPERATION
    const [showWellOperation, setShowWellOperation] = useState(false);
    // PRESSURE_GET_API
    const [pressureApi, setPressureApi] = useState([]);

    // REGISTRATION_WELL
    const handlerNumberWell = e => {
        setNumberWell(e.target.value);

    }
    const takeSp = (e) => {
        if(e.target.value.length > 0)
            axios.get(BASE_URL + '/api/collection_point/all/uppg/' + e.target.value, configHeader)
                .then(res=>{setGetPoint(res.data.object); console.log(res.data.object)})
                .catch(err => {console.log(err)})
    }
    const handlerUppg = e => {
        setUppg(e.target.value);
        takeSp(e);
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
        axios.post(BASE_URL + '/api/well/add', data, configHeader)
            .then(res => {console.log(res)})
            .catch(err => {console.log(err)});
        setShowRegistrationWell(prev => !prev);
        setNumberWell('');
        setUppg('');
        setPoint('');
        setHorizon('');
        setComDate('');
        setDrillDate('');
        setCategory('');
        setState('');
        setInterval('');
        setAltitude('');
        setDepth('');
        setCoordX('');
        setCoordY('');
    }
    const takeWell = (e) => {
        if(e.target.value.length > 0)
            axios.get(BASE_URL + '/api/well/all/collection_point/' + e.target.value, configHeader)
                .then(res =>{setWell(res.data.object); console.log(res.data.object)})
                .catch(err => {console.log(err)})
    }
    useEffect(()=>{
        // Get apiUppg
        axios.get(BASE_URL + '/api/uppg/all/mining_system/' + 1, configHeader)
            .then(res => {setGetUppg(res.data.object); console.log(res.data.object)})
            .catch(err => {console.log(err)});
    }, []);

    // WELL_OPERATION
    const handlerUppgOperation = e => {
        setUppgOper(e.target.value);
        takeSp(e);
    }
    const handlerPointOperation = e => {
        setPointOper(e.target.value);
        takeWell(e);
        // if(e.target.value.length > 0)
        //     axios.get(BASE_URL + '/api/well/all/collection_point/' + e.target.value, configHeader)
        //         .then(res =>{setWell(res.data.object); console.log(res.data.object)})
        //         .catch(err => {console.log(err)})
    }
    const handlerWellNumberOperation = e => {
        setNumberWellOper(e.target.value);
        if(e.target.value.length > 0)
            axios.get(BASE_URL + '/api/well/one/action/' + e.target.value, configHeader)
                .then(res => {
                    setSelectWell(res.data.object);
                    setPerMax(res.data.object.objectActionDto.perforation_max);
                    setPerMin(res.data.object.objectActionDto.perforation_min);
                    setTemp(res.data.object.objectActionDto.temperature);
                    setPressure(res.data.object.objectActionDto.pressure);
                    // setHorizonOper(res.data.object.objectDto.horizon)
                    console.log(res.data.object);})
                .catch(err => {console.log(err)})
    }
    const handlerHorizonOperation = e => {
        setHorizonOper(e.target.value);
    }
    const handlerChangeDate = e => {
        setChangeDate(e.target.value);
    }
    const handlerTemp = e => {
        setTemp(e.target.value);
    }
    const handlerPerMin = e => {
        setPerMin(e.target.value);
    }
    const handlerPerMax = e => {
        setPerMax(e.target.value);
    }
    const handlerPressure = e => {
        setPressure(e.target.value);
    }
    const handlerWellOperation = e => {
        e.preventDefault();
        let dataWell = {
            date: changeDate,
            expend: 0,
            perforation_min: perMin,
            perforation_max: perMax,
            pressure: pressure,
            rpl: 0,
            status: state,
            temperature: temp,
            wellId: numberWellOper,
            // horizon: horizon,
        }
        axios.post(BASE_URL + '/api/well/manually/add/action', dataWell, configHeader)
            .then(res => {console.log(res)})
            .catch(err => {console.log(err)})
        console.log(dataWell)
        setShowWellOperation(prev => !prev);
        setNumberWellOper('');
        setUppgOper('');
        setPointOper('');
        setHorizonOper('');
        setComDate('');
        setDrillDate('');
        setCategory('');
        setState('');
        setChangeDate('');
        setPerMax('');
        setPerMin('');
        setPressure('');
        setTemp('');
    }

    // NAVBAR_SHOW_MODAL_REGISTRATION_WELL
    const openRegistrationWell = () => {
        setShowRegistrationWell(prev => !prev);
    }
    // NAVBAR_SHOW_MODAL_WELL_OPERATION
    const openWellOperation = () => {
        setShowWellOperation(prev => !prev);
    }

    // PRESSURE_GET_API
    setTimeout(() => {
        axios.get(BASE_URL + '/api/collection_point/all/action/mining_system/' + 1, configHeader)
            .then(res => {setPressureApi(res.data.object) })
            .catch(err => {console.log(err) })
    }, 11000);

    const value={
        numberWell, handlerNumberWell,
        uppg, handlerUppg,
        point, handlerPoint, getPoint,
        horizon, handlerHorizon,
        comDate, handlerComDate,
        drillDate, handlerDrillDate,
        category, handlerCategory,
        state, handlerState,
        interval, handlerInterval,
        altitude, handlerAltitude,
        depth, handlerDepth,
        coordX, hadlerCoordX,
        coordY, hadlerCoordY,
        getUppg, handlerSubmit,
        well, handlerWellOperation,
        selectWell,
        showRegistrationWell, setShowRegistrationWell, openRegistrationWell,
        showWellOperation, setShowWellOperation, openWellOperation,
        pressureApi, setPressureApi,
        uppgOper, handlerUppgOperation,
        pointOper, handlerPointOperation,
        numberWellOper, handlerWellNumberOperation,
        horizonOper, handlerHorizonOperation,
        changeDate, handlerChangeDate,
        handlerTemp, handlerPerMax, handlerPerMin, handlerPressure, perMin, perMax, pressure, temp,
        takeWell,
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext }