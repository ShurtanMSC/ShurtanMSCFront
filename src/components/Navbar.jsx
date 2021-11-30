import React, {useState, useContext} from 'react';
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
import {BASE_URL} from "../utills/constant";
import { useHistory } from 'react-router-dom';
import {getRoleNameFromJWT} from "../utills/UsefullFunctions";

const Navbar = () => {
    const {openRegistrationWell, openWellOperation,
        showElectricity, setShowElectricity,
        name, showPersonnel, setShowPersonnel,
        showModal, setShowModal,} = useContext(AppContext);

    const [currentDay, setCurrentDay] = useState('');
    const [hours, setHours] = useState('0');
    const [minutes, setMinutes] = useState('0');
    const [seconds, setSeconds] = useState('0');

    const [open, setOpen] = useState(false);
    const [openShurtan, setOpenShurtan ] = useState(false);



    const [showParameters, setShowParameters] = useState(false);
    const [showTechnological, setShowTechnological] = useState(false);
    const [showProduction, setShowProduction] = useState(false);

    const history = useHistory();

    const findDay = (month) => {
        if(!month){
            throw new Error("Month id not defined")
        }
        switch(month){
            case 0: return "Январь"
            case 1: return "Февраль"
            case 2: return "Март"
            case 3: return "Апрель"
            case 4: return "Май"
            case 5: return "Июнь"
            case 6: return "Июль"
            case 7: return "Август"
            case 8: return "Сентябрь"
            case 9: return "Октябрь"
            case 10: return "Ноябрь"
            case 11: return "Декабр"
            default:return ""
        }
    }
    let today = new Date();
    let date = today.getDate() +' '+ findDay(today.getMonth())+' '+today.getFullYear();
    setInterval(() => {
        setCurrentDay(date);
        setHours(((new Date().getHours() < 10 ? '0' : '') + new Date().getHours()));
        setMinutes(((new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes()));
        setSeconds(((new Date().getSeconds() < 10 ? '0' : '') + new Date().getSeconds()));
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

    const logOut = () => {
        localStorage.clear();
        history.push("/");
    }

    return (
        <ConatainerFluidNavbarOut>
            <ContainerFluidNavbar>
                <LeftCorner></LeftCorner>
                <OzlitiImg src={LogoTwo} alt="logo" />
                <Link to="/mainPage" style={{boxShadow:'none'}}>
                    <H1>Информационно-аналитическая система оперативного анализа эксплуатации Шуртанской группы месторождений</H1>
                </Link>
                <img style={{marginRight:'1%'}} src={LogoOne} alt="logo" />
                <NavbarCard>
                    <HumanImg src={Human} alt="human" />
                    <P> <A href={BASE_URL}>{name}</A> </P>
                </NavbarCard>
                <RightCenterLittle></RightCenterLittle>
                <RightCenterBig></RightCenterBig>
                <DateAndOclock>
                    <DateP>{currentDay}</DateP>
                    <OclockP>{hours}:{minutes}:{seconds}</OclockP>
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
                        <LinkShurtan to="/reports">
                            <H2Navigation>Отчеты</H2Navigation>
                        </LinkShurtan>
                        <H2Navigation
                            onClick={openModal}
                            disabled={getRoleNameFromJWT() === 'EMPLOYEE' || getRoleNameFromJWT() === 'OPERATOR' || getRoleNameFromJWT() === 'ENERGETIC' || getRoleNameFromJWT() === 'METROLOGIST' ? true : false}>
                            Анализ добычи
                        </H2Navigation>
                            <AddGasNavbarModal showModal={showModal}
                                           setShowModal={setShowModal}/>
                        <H2Navigation
                            onClick={openElectricity}
                            disabled={getRoleNameFromJWT() === 'EMPLOYEE' || getRoleNameFromJWT() === 'OPERATOR' || getRoleNameFromJWT() === 'METROLOGIST' || getRoleNameFromJWT() === 'GEOLOGIST' ? true : false}>
                            Потребление электроэнергии
                        </H2Navigation>
                            <ElectricityConsumptionNavbarModal showElectricity={showElectricity}
                                                               setShowElectricity={setShowElectricity}/>
                        <H2Navigation
                            onClick={openPersonnel}
                            disabled={getRoleNameFromJWT() === 'OPERATOR' || getRoleNameFromJWT() === 'METROLOGIST' || getRoleNameFromJWT() === 'GEOLOGIST' ? true : false}>
                            Управление персоналом</H2Navigation>
                            <PersonnelManagementNavbarModal showPersonnel={showPersonnel}
                                                            setShowPersonnel={setShowPersonnel}/>
                        <H2Navigation
                            onClick={openParameters}
                            disabled={getRoleNameFromJWT() === 'EMPLOYEE' || getRoleNameFromJWT() === 'OPERATOR' || getRoleNameFromJWT() === 'ENERGETIC' || getRoleNameFromJWT() === 'METROLOGIST' ? true : false}>
                            Параметры пласта
                        </H2Navigation>
                            <ReservoirParameters showParameters={showParameters}
                                                 setShowParameters={setShowParameters}/>
                        <H2Navigation
                            onClick={openProduction}
                            disabled={getRoleNameFromJWT() === 'EMPLOYEE' || getRoleNameFromJWT() === 'OPERATOR' || getRoleNameFromJWT() === 'ENERGETIC' || getRoleNameFromJWT() === 'METROLOGIST' ? true : false}>
                            Показатели добычи
                        </H2Navigation>
                            <ProductionIndicators showProduction={showProduction}
                                                  setShowProduction={setShowProduction}/>
                        <H2Navigation
                            onClick={openTechnological}
                            disabled={getRoleNameFromJWT() === 'EMPLOYEE' || getRoleNameFromJWT() === 'OPERATOR' || getRoleNameFromJWT() === 'ENERGETIC' || getRoleNameFromJWT() === 'METROLOGIST' ? true : false}>
                            Технологический режим эксплуатации месторождений
                        </H2Navigation>
                            <TechnologicalRegime showTechnological={showTechnological}
                                                 setShowTechnological={setShowTechnological}/>
                        <H2Navigation
                            onClick={openWellOperation}
                            disabled={getRoleNameFromJWT() === 'EMPLOYEE' || getRoleNameFromJWT() === 'OPERATOR' || getRoleNameFromJWT() === 'ENERGETIC' || getRoleNameFromJWT() === 'METROLOGIST' ? true : false}>
                            Показатели эксплуатации скважин
                        </H2Navigation>
                            <WellOperation />
                        <H2Navigation
                            onClick={openRegistrationWell}
                            disabled={getRoleNameFromJWT() === 'EMPLOYEE' || getRoleNameFromJWT() === 'OPERATOR' || getRoleNameFromJWT() === 'ENERGETIC' || getRoleNameFromJWT() === 'METROLOGIST' ? true : false}>
                            Регистрация новой скважины
                        </H2Navigation>
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
    position: fixed;
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
    height: 680px;
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
const A = styled.a`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  display: flex;
  align-items: center;
  color: #363636;
  cursor: pointer;
  z-index:2;
  text-transform: capitalize;
`
export default Navbar
