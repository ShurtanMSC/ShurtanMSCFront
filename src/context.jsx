import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";

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
    const [selectWell, setSelectWell] = useState([]);
    // NAVBAR_SHOW_MODAL_REGISTRATION_WELL
    const [showRegistrationWell, setShowRegistrationWell] = useState(false);
    // NAVBAR_SHOW_MODAL_WELL_OPERATION
    const [showWellOperation, setShowWellOperation] = useState(false);

    // REGISTRATION_WELL
    const handlerNumberWell = e => {
        setNumberWell(e.target.value);
        if(e.target.value.length > 0)
            axios.get('https://shurtan.herokuapp.com/api/well/one/action/' + e.target.value)
                .then(res => {setSelectWell(res.data.object); console.log(res.data.object);})
    }
    const handlerUppg = e => {
        setUppg(e.target.value);
        if(e.target.value.length > 0)
            axios.get('https://shurtan.herokuapp.com/api/collection_point/all/uppg/' + e.target.value)
                .then(res=>{setGetPoint(res.data.object); console.log(res.data.object)});
    }
    const handlerPoint = e => {
        setPoint(e.target.value);
        if(e.target.value.length > 0)
            axios.get('https://shurtan.herokuapp.com/api/well/all/collection_point/' + e.target.value)
                .then(res =>{setWell(res.data.object); console.log(res.data.object)});
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
            .then(res => {console.log(res)});
        setShowRegistrationWell(prev => !prev);
        setNumberWell('');
        setUppg('');
        setPoint('');
        setHorizon('');
        setComDate('');
        setDrillDate('');
        setCategory('');
        setState('');
        // setInterval('');
        setAltitude('');
        setDepth('');
        setCoordX('');
        setCoordY('');
    }
    useEffect(()=>{
        // Get apiUppg
        axios.get('https://shurtan.herokuapp.com/api/uppg/all/mining_system/' + 1)
            .then(res=>{setGetUppg(res.data.object); console.log(res.data.object)});
    }, []);

    // WELL_OPERATION
    const handlerWellOperation = e => {
        e.preventDefault();
        // let dataWell = {
        //     date: "string",
        //     expend: 0,
        //     perforation_max: 0,
        //     perforation_min: 0,
        //     pressure: 0,
        //     rpl: 0,
        //     status: "IN_WORK",
        //     temperature: 0,
        //     wellId: 0
        // }
        setNumberWell('');
        setUppg('');
        setPoint('');
    }

    // NAVBAR_SHOW_MODAL_REGISTRATION_WELL
    const openRegistrationWell = () => {
        setShowRegistrationWell(prev => !prev);
    }
    // NAVBAR_SHOW_MODAL_WELL_OPERATION
    const openWellOperation = () => {
        setShowWellOperation(prev => !prev);
    }

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
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext }