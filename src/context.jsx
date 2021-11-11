import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";
import {BASE_URL, TOKEN} from "./utills/constant";
import {configHeader} from './utills/congifHeader'
import {useHistory} from "react-router-dom";
import {getRoleNameFromJWT} from "./utills/UsefullFunctions";

const AppContext = createContext();

const AppProvider = ({children}) => {
    //LOGIN PAGE
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const history = useHistory();

    const handlerChange = e => {
        e.preventDefault();
        axios.post(BASE_URL+'/api/auth/login',
            {
                username: userName,
                password: userPassword,
            }, configHeader
        ).then(res => {
                localStorage.setItem(TOKEN,res.data.token);
                console.log(localStorage.getItem(TOKEN));
                console.log(getRoleNameFromJWT());
                history.push("/mainPage");
                takeFio();
        }
        ).catch(error=>{
            console.log(error)
            alert('Неверный логин или пароль')
        })
        setUserName('')
        setUserPassword('')

    }
    const handlerName = (e) => {
        setUserName(e.target.value)
    }
    const handlerPassword = (e) => {
        setUserPassword(e.target.value)
    }
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
    const [intervalWell, setIntervalWell] = useState('');
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
    const [uppgDatabase, setUppgDatabase] = useState([]);
    const [refresh, setRefresh] = useState([]);
    const [openWell, setOpenWell] = useState([]);
    /** Call Stat-Status Api **/
    const [statStatus, setStatStatus] = useState([]);
    /** Call Uppg all collection **/
    const [allUppg, setAllUppg] = useState([]);
    /** Name All Mining **/
    const [ nameAllMining, setNameAllMining] = useState([]);
    /** Get Electric All Last **/
    const [ getElectric, setGetElectric ] = useState([]);
    /** Show Electric Modal **/
    const [showConsumedElectricity, setShowConsumedElectricity] = useState(false);
    /** Search Wells **/
    const [ selectedWell, setSelectedWell ] = useState();
    /** Dobicha Gaza **/
    const [ addGas, setAddGas ] = useState([]);
    /** Call Pdf Report Api **/
    const [ pdfReport, setPdfReport ] = useState([]);
    /** Call Gas Balans Api **/
    const [ gasBalans, setGasBalans ] = useState([]);
    /** Post Shurtan Electric Api **/
    const [ shurtanElectric, setShurtanElectric ] = useState('');
    const [showElectricity, setShowElectricity] = useState(false);
    /** Call Me Api (user) **/
    const [name, setName] = useState([]);

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
        setIntervalWell(e.target.value);
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
        setIntervalWell('');
        setAltitude('');
        setDepth('');
        setCoordX('');
        setCoordY('');
    }
    // PRESSURE_GET_API
    const takeSpPressure = () => {
        axios.get(BASE_URL + '/api/collection_point/all/action/mining_system/' + 1, configHeader)
            .then(res => {
                setPressureApi(res.data.object);
                console.log(res.data.object)
            })
            .catch(err => {
                console.log(err)
            })
    }

    // Uppg Database
    const getUppgDatabase = () => {
        axios.get(BASE_URL + '/api/fake/all', configHeader)
            .then(res => {
                // console.log(res)
                console.log(res.data)
                setUppgDatabase(res.data);
            })
            .catch(err => {
                // console.log(err)
            })
    }


    // Get allWells
    const takeAllWells = () => {
        axios.get(BASE_URL + '/api/well/all/action/mining_system/'+1, configHeader)
            .then(res => {setOpenWell(res.data.object); console.log(res.data.object); })
            .catch(err => {console.log(err)})
    }
    /** Call Stat-Status Api **/
    const takeStatus = () => {
        axios.get(BASE_URL + '/api/well/stat/status', configHeader)
            .then(res => {setStatStatus(res.data.object); console.log(res.data.object)})
            .catch(err => {console.log(err)})
    }
    /** Get Electric All Last **/
    const takeElectric = () => {
        axios.get(BASE_URL + '/api/electricity/all/last', configHeader)
            .then(res => {
                setGetElectric(res.data.object);
                console.log(res.data.object)
            })
            .catch(err => {
                console.log(err)
            })
    }
    /** Call Me Api (user) **/
    const takeFio = () => {
        axios.get(BASE_URL + '/api/auth/me', configHeader)
            .then(res=>{ setName(res.data.object.fio); console.log(res); })
            .catch(error=>{ console.log(error)})
    }
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;
    useEffect(()=>{
        // Get apiUppg
        axios.get(BASE_URL + '/api/uppg/all/mining_system/' + 1, configHeader)
            .then(res => {setGetUppg(res.data.object); console.log(res.data.object)})
            .catch(err => {console.log(err)});
        // Get allWells
        takeAllWells();
        // PRESSURE_GET_API

        takeSpPressure();
        setRefresh(dateTime);
        setInterval(() => {
            takeSpPressure();
            setRefresh(dateTime);
            // takeAllWells();
        }, 15000);
        setInterval(() => {
            getUppgDatabase();
            // setRefresh(dateTime);
            // takeAllWells();
        }, 15000);
        /** Call Stat-Status Api **/
        takeStatus();
        /** Call Uppg all collection **/
        axios.get(BASE_URL + '/api/uppg/all/actions/mining_system/' + 1, configHeader)
            .then(res => {setAllUppg(res.data.object); console.log(res.data.object)})
            .catch(err => {console.log(err)})
        /** Call Name All Mining **/
        axios.get(BASE_URL + '/api/mining_system/all', configHeader)
            .then(res => {setNameAllMining(res.data.object); console.log(res.data.object)})
            .catch(err => {console.log(err)})
        /** Get Electric All Last **/
        takeElectric();
        /** Dobicha Gaza **/
        setInterval(() => {
            axios.get(BASE_URL + '/api/mining_system/all/actions', configHeader)
                .then(res => {setAddGas(res.data.object); console.log(res.data.object)})
                .catch(err => {console.log(err)});
            // setRefresh(dateTime);
            // takeAllWells();
        }, 2000);

        /** Call Pdf Report Api **/
        axios.get(BASE_URL + '/api/report/interval?mining_system_id='+ 1 +'&start=' + '2222-12-22' + '&end=' + '2222-12-22' , configHeader)
            .then(res => {setPdfReport(res.data.object); console.log(res.data.object)})
            .catch(err => {console.log(err)})
        /** Call Gas Balans Api **/
        axios.get(BASE_URL + '/api/gas_composition/molar/all', configHeader)
            .then(res => {setGasBalans(res.data.object); console.log(res.data.object)})
            .catch(err => {console.log(err)})
        /** Call Me Api (user) **/
        takeFio();
    }, []);

    // WELL_OPERATION
    const handlerUppgOperation = e => {
        setUppgOper(e.target.value);
        takeSp(e);
    }
    const handlerPointOperation = e => {
        setPointOper(e.target.value);
        if(e.target.value.length > 0)
            axios.get(BASE_URL + '/api/well/all/collection_point/' + e.target.value, configHeader)
                .then(res =>{setWell(res.data.object); console.log(res.data.object)})
                .catch(err => {console.log(err)})
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

    /** Call Stat-Status Api with total **/
    let totalInWork = 0;
    let totalInIdle = 0;
    let totalInRepair = 0;
    let totalInConservation = 0;
    let totalInLiquidation = 0;
    let AllTotal = 0;
    for (let i = 0; i < statStatus.length; i++) {
        totalInWork = totalInWork + statStatus[i].IN_WORK;
        totalInIdle = totalInIdle + statStatus[i].IN_IDLE;
        totalInRepair = totalInRepair + statStatus[i].IN_REPAIR;
        totalInConservation = totalInConservation + statStatus[i].IN_CONSERVATION;
        totalInLiquidation = totalInConservation + statStatus[i].IN_LIQUIDATION;
        AllTotal = totalInWork + totalInIdle + totalInRepair + totalInConservation + totalInLiquidation;
    }
    /** Dobicha Gas Total **/
    let totalAddGas = 0;
    for (let add = 0; add < addGas.length; add++) {
        totalAddGas = totalAddGas + (addGas[add].objectActionDto !==null ? addGas[add].objectActionDto.expend : 0);
    }
    /** Post Shurtan Electric Api Total **/
    let totalElectric = 0;
    for (let e = 0; e < getElectric.length; e++) {
        totalElectric = totalElectric + (getElectric[e] !==null ? getElectric[e].hourly : "")
    }
    /** AllUppg Total **/
    let totalAllUppg = 0;
    let totalAllUppgCon = 0;
    let totalAllUppgWater = 0;
    for (let u = 0; u < allUppg.length; u++) {
        totalAllUppg = totalAllUppg + (allUppg[u] !== null ? allUppg[u].objectActionDto.expend : "")
        totalAllUppgCon = totalAllUppgCon + (allUppg[u] !== null ? allUppg[u].objectActionDto.condensate : "")
        totalAllUppgWater = totalAllUppgWater + (allUppg[u] !== null ? allUppg[u].objectActionDto.onWater : "")
    }
    /** Change Status Name **/
    const findStatus = (status) => {
        if(!status){
            throw new Error("State is not defined")
        }
        switch (status) {
            case "IN_WORK": return "в работе"
            case "IN_IDLE": return "в простое"
            case "IN_REPAIR": return "в ремонте"
            case "IN_CONSERVATION": return "в консервации"
            case "IN_LIQUIDATION": return "в ликвидации"
            default: return ""
        }
    }
    /** Change Status Color **/
    const findColor = (status) => {
        if(!status){
            throw new Error("Color is not defined")
        }
        switch (status) {
            case "IN_WORK": return "#0FA30E"
            case "IN_IDLE": return "#FFC91B"
            case "IN_REPAIR": return "#FF0000"
            case "IN_CONSERVATION": return "#800080"
            case "IN_LIQUIDATION": return "#000000"
            default: return ""
        }
    }

    /** Post Shurtan Electric Api **/
    const handlerShurtanElectric = e => {
        setShurtanElectric(e.target.value);
    }
    const onSubmitElectricShurtan = e => {
        e.preventDefault();
        const dataShurtanElectric = {
            daily: 0,
            hourly: shurtanElectric,
            miningSystemId: 1,
            miningSystemName: "string",
            monthly: 0,
            yearly: 0
        }
        console.log(dataShurtanElectric)
        axios.post(BASE_URL + '/api/electricity/add', dataShurtanElectric, configHeader)
            .then(res => {
                console.log(res); takeElectric();
            })
            .catch(err => {
                console.log(err)
            })
        setShowElectricity(prev => !prev);
        setShurtanElectric('');
    }
    /** Tanlangan skvajinani selectWellga o'zlashtirish **/
    const handlerWellSearch = (e) => {

        /** for each bilan **/
        openWell.forEach(well=>{
            if (well.objectDto.id==e.target.value){
                setSelectedWell(well)
            }
        })

        /** for bilan **/
        // for (let i = 0; i < sorted.length; i++) {
        //     if (sorted[i].objectDto.id==e.target.value){
        //         setSelectedWell(sorted[i])
        //     }
        // }
        //

        /** map bilan **/
        // sorted.map(well=>{
        //     if (well.objectDto.id==e.target.value){
        //         setSelectedWell(well)
        //     }
        // })

    }


    const value={
        handlerChange, handlerName, handlerPassword, userName, userPassword, name,
        numberWell, handlerNumberWell,
        uppg, handlerUppg,
        point, handlerPoint, getPoint,
        horizon, handlerHorizon,
        comDate, handlerComDate,
        drillDate, handlerDrillDate,
        category, handlerCategory,
        state, handlerState,
        intervalWell, handlerInterval,
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
        uppgDatabase, setUppgDatabase,
        uppgOper, handlerUppgOperation,
        pointOper, handlerPointOperation,
        numberWellOper, handlerWellNumberOperation,
        horizonOper, handlerHorizonOperation,
        changeDate, handlerChangeDate,
        handlerTemp, handlerPerMax, handlerPerMin, handlerPressure, perMin, perMax, pressure, temp, findStatus, findColor,
        refresh, openWell, takeSpPressure, takeAllWells, statStatus,takeStatus,allUppg, totalInWork, totalInIdle, totalInRepair,
        totalInConservation, totalInLiquidation, AllTotal, nameAllMining,
        showConsumedElectricity, setShowConsumedElectricity, getElectric,
        handlerWellSearch, selectedWell, addGas, totalAddGas, pdfReport, dateTime, gasBalans, shurtanElectric, onSubmitElectricShurtan,
        handlerShurtanElectric, showElectricity, setShowElectricity, totalElectric, totalAllUppg, totalAllUppgCon, totalAllUppgWater,
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext }