import React, {useEffect, useState, useContext} from 'react';
import {AppContext} from "../context";
import styled from 'styled-components'
import { ContainerFluid, H1, P, NavbarCard, HumanImg, DateP, OclockP, DateAndOclock, Burger, BtnBurger, H2Navigation } from '../styled'
import LogoOne from '../image/Navbar/logo-uzliti.png'
import LogoTwo from '../image/Navbar/logo-uzbekneftigaz.png'
import Human from '../image/Navbar/Vector.png'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import AddGasNavbarModal from "./Shurtan/NavbarModal/AddGasNavbarModal";
import ElectricityConsumptionNavbarModal from './Shurtan/NavbarModal/ElectricityConsumptionNavbarModal'
import PersonnelManagementNavbarModal from './Shurtan/NavbarModal/PersonnelManagementNavbarModal'
import ReservoirParameters from './Shurtan/NavbarModal/ReservoirParameters'
import TechnologicalRegime from './Shurtan/NavbarModal/TechnologicalRegime'
import ProductionIndicators from './Shurtan/NavbarModal/ProductionIndicators'
import WellOperation from './Shurtan/NavbarModal/WellOperation'
import RegistrationWell from './Shurtan/NavbarModal/RegistrationWell'
import axios from "axios";
import {TOKEN} from "../utills/constant";
import { useHistory } from 'react-router-dom'

const Navbar = () => {
    const {openRegistrationWell, openWellOperation} = useContext(AppContext);

    const [hours, setHours] = useState('0');
    const [name, setName] = useState('');
    const [minutes, setMinutes] = useState('0');
    const [seconds, setSeconds] = useState('0');

    const [open, setOpen] = useState(false);
    const [openShurtan, setOpenShurtan ] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [showElectricity, setShowElectricity] = useState(false);
    const [showPersonnel, setShowPersonnel] = useState(false);
    const [showParameters, setShowParameters] = useState(false);
    const [showTechnological, setShowTechnological] = useState(false);
    const [showProduction, setShowProduction] = useState(false);



    const history = useHistory();
    
    setInterval(() => {
        setHours(new Date().getHours())
        setMinutes(new Date().getMinutes())
        setSeconds(new Date().getSeconds())
    }, 1000);

    const openModal = () => {
        setShowModal(prev => !prev);
    }
    const openElectricity = () => {
        setShowElectricity(prev => !prev);
    }
    const openPersonnel = () => {
        setShowPersonnel(prev => !prev);
    }
    const openParameters = () => {
        setShowParameters(prev => !prev);
    }
    const openTechnological = () => {
        setShowTechnological(prev => !prev);
    }
    const openProduction = () => {
        setShowProduction(prev => !prev);
    }


    useEffect(()=>{
        axios.get('https://shurtan.herokuapp.com/api/auth/me', {
                headers:{
                    authorization: 'Bearer ' +localStorage.getItem(TOKEN)
                }
        })
            .then(res=>{
            console.log(res)
            setName(res.data.object.fio)
        })
            .catch(error=>{
            console.log(error)
            })
    }, [])
    const logOut = () => {
        localStorage.clear();
        history.push("/");
    }
    return (
        <ConatainerFluidNavbarOut>
            <ContainerFluidNavbar>
                <LeftCorner></LeftCorner>
                <OzlitiImg src={LogoOne} alt="logo" />
                <Link to="/mainPage" style={{boxShadow:'none'}}>
                    <H1>Информационно-аналитическая система оперативного анализа эксплуатации Шуртанской группы месторождений</H1>
                </Link>
                <img style={{marginRight:'1%'}} src={LogoTwo} alt="logo" />
                <NavbarCard>
                    <HumanImg src={Human} alt="human" />
                    <P>{name}</P>
                </NavbarCard>
                <RightCenterLittle></RightCenterLittle>
                <RightCenterBig></RightCenterBig>
                <DateAndOclock>
                    <DateP>18 август 2021</DateP>
                    <OclockP> {hours} : {minutes} : {seconds} </OclockP>
                </DateAndOclock>
                <RightCorner>
                    <Burger  onClick={()=>setOpen(!open)}>
                        <BtnBurger></BtnBurger> 
                        <BtnBurger></BtnBurger>
                        <BtnBurger></BtnBurger>
                    </Burger>
                </RightCorner>
            </ContainerFluidNavbar>
            <CloseDiv open={open}>
                <Menu>
                    <h1>Выберите месторождение</h1>
                    <LinkShurtan to="/shurtan"> <H2Navigation onClick={() => setOpenShurtan(!openShurtan)}>Шуртан</H2Navigation> </LinkShurtan>
                    <ShurtanNavigation openShurtan={openShurtan}>
                        <H2Navigation onClick={openModal}>Анализ добычи</H2Navigation>
                            <AddGasNavbarModal showModal={showModal}
                                           setShowModal={setShowModal}/>
                        <H2Navigation onClick={openElectricity}>Потребление электроэнергии</H2Navigation>
                            <ElectricityConsumptionNavbarModal showElectricity={showElectricity}
                                                               setShowElectricity={setShowElectricity}/>
                        <H2Navigation onClick={openPersonnel}>Управление персоналом</H2Navigation>
                            <PersonnelManagementNavbarModal showPersonnel={showPersonnel}
                                                            setShowPersonnel={setShowPersonnel}/>
                        <H2Navigation onClick={openParameters}>Параметры пласта</H2Navigation>
                            <ReservoirParameters showParameters={showParameters}
                                                 setShowParameters={setShowParameters}/>
                        <H2Navigation onClick={openProduction}>Показатели добычи</H2Navigation>
                            <ProductionIndicators showProduction={showProduction}
                                                  setShowProduction={setShowProduction}/>
                        <H2Navigation onClick={openTechnological}>Технологический режим эксплуатации месторождений</H2Navigation>
                            <TechnologicalRegime showTechnological={showTechnological}
                                                 setShowTechnological={setShowTechnological}/>
                        <H2Navigation onClick={openWellOperation}>Показатели эксплуатации скважин</H2Navigation>
                            <WellOperation />
                        <H2Navigation onClick={openRegistrationWell}>Регистрация новой скважины</H2Navigation>
                            <RegistrationWell />
                    </ShurtanNavigation>
                    <H2Navigation>Южная Тандырча</H2Navigation>
                    <H2Navigation>Бузахур</H2Navigation>
                    <H2Navigation>Восточный Бузахур</H2Navigation>
                    <H2Navigation>Тарнасой</H2Navigation>
                    <H2Navigation>Ойдин</H2Navigation>
                    <H2Navigation>Номозбой</H2Navigation>
                    <H2Navigation>Ермок</H2Navigation>
                    <H2Navigation>Тутсари</H2Navigation>
                    <H2Navigation>Чунагар</H2Navigation>
                    <H2Navigation>Зафар</H2Navigation>
                </Menu>
                <LinkNav onClick={logOut} style={{boxShadow:'none'}}>
                    <p>Выйти из системы <FontAwesomeIcon style={{marginLeft:'5px'}} icon={faSignOutAlt}/> </p>
                </LinkNav>
            </CloseDiv>
        </ConatainerFluidNavbarOut>
        
    )
}
const ConatainerFluidNavbarOut = styled.div`
    width:100%; 
    z-index: 5;
    position: sticky;
    position: -webkit-sticky;
    top: 0px;
`
const ContainerFluidNavbar = styled(ContainerFluid)`
    height: 2%;
    justify-content: space-between;
    background-color: #C3E7FA;
    position: relative;
    position: sticky;
    position: -webkit-sticky;
    top: 0px;
`
const LeftCorner = styled.div`
    background: rgba(0, 161, 220, 0.3);
    clip-path: polygon(0 0, 80% 0%, 100% 100%, 0% 100%);
    width: 115.5px;
    height: 72px;
    @media(max-width:1090px){
        display:none;
    }
`
const RightCorner = styled.div`
    background: rgba(0, 161, 220, 0.3);
    clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
    width: 115.5px;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const RightCenterBig = styled.div`
    width: 576.5px;
    height: 72px;
    background: #89D2F1;
    clip-path: polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%);
    opacity: 0.3;
    position: absolute;
    right: 120px;
    z-index: 0.1;
    @media(max-width:1640px){
        display:none;
    }
`
const RightCenterLittle = styled.div`
    width: 49.18px;
    height: 72px;
    background: #89D2F1;
    opacity: 0.3;
    clip-path: polygon(50% 0, 100% 0%, 50% 100%, 0% 100%);
    position: absolute;
    right: 700px;
    z-index: 0.1;
    @media(max-width:1640px){
        display:none;
    }
`
const OzlitiImg = styled.img`
    @media(max-width:1090px){
        margin-left:2%;
    }
`
const CloseDiv = styled.div`
    position: absolute;
    position:fixed;
    width:470px;
    height:${({open}) => ( open ? "100%" : "0" )};
    top:72px;
    right: 0;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: height 0.5s ease-in;
    overflow: hidden;
    padding: 0 3rem;
`
const Menu = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    h1{
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      padding:1rem 0;
      margin-top: 1rem;
      color: #363636;
    }
`
const LinkShurtan = styled(Link)`
    border:none;
    width:100%;
    &:focus{
      box-shadow: none;
    }
`
const ShurtanNavigation = styled.div`
    width: 78%;
    height: 700px;
    position: absolute;
    top: 140px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    max-height: ${({openShurtan}) => (openShurtan ? "800px" : "0")};
    transition: max-height 0.5s ease-in;
    overflow: hidden;
    background: #fff;
    padding: 0 1rem;
`
const LinkNav = styled.h2`
    width:100%;
    height:250px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #363636;
    transition: 0.5s ease-in;
    cursor:pointer;
    &:hover p{
        color:rgba(0,161,220, 0.8);
        transition: 0.5s ease;
    }
    p{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 1000;
        font-size: 16px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #363636;
        transition: 0.5s ease-in;
        padding: 1rem;
    }
`
export default Navbar
