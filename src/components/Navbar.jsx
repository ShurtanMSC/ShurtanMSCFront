import React, { useState } from 'react'
import styled from 'styled-components'
import { ContainerFluid, H1, P, NavbarCard, HumanImg, DateP, OclockP, DateAndOclock, Burger, BtnBurger } from '../styled'
import LogoOne from '../image/Navbar/logo-uzliti.png'
import LogoTwo from '../image/Navbar/logo-uzbekneftigaz.png'
import Human from '../image/Navbar/Vector.png'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    
    const [hours, setHours] = useState('0');
    const [minutes, setMinutes] = useState('0');
    const [seconds, setSeconds] = useState('0');

    const [open, setOpen] = useState(false);
    
    setInterval(() => {
        setHours(new Date().getHours())
        setMinutes(new Date().getMinutes())
        setSeconds(new Date().getSeconds())
    }, 1000);

    return (
        <ConatainerFluidNavbarOut>
            <ContainerFluidNavbar>
                <LeftCorner></LeftCorner>
                <OzlitiImg src={LogoOne} alt="logo" />
                <Link to="/mainPage" style={{boxShadow:'none'}}> <H1>Информационно-аналитическая система оперативного анализа эксплуатации Шуртанской группы месторождений</H1> </Link>
                <img style={{zIndex:'2', marginRight:'1%'}} src={LogoTwo} alt="logo" />
                <NavbarCard>
                    <HumanImg src={Human} alt="human" />
                    <P>Сиситемный <br/> администратор</P>
                </NavbarCard>
                <RightCenterLittle></RightCenterLittle>
                <RightCenterBig></RightCenterBig>
                <DateAndOclock>
                    <DateP>09 август 2021</DateP>
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
                <LinkNav to='/' style={{boxShadow:'none'}}>      <p>Выйти из системы <FontAwesomeIcon style={{marginLeft:'5px'}} icon={faSignOutAlt}/> </p>
                </LinkNav>
            </CloseDiv>
        </ConatainerFluidNavbarOut>
        
    )
}
const ConatainerFluidNavbarOut = styled.div`
    width:100%;
    overflow:hidden;
`
const ContainerFluidNavbar = styled(ContainerFluid)`
    height: 2%;
    justify-content: space-between;
    background-color: #C3E7FA;
    position: relative;
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
    z-index:2;
    @media(max-width:1090px){
        margin-left:2%;
    }
`
const CloseDiv = styled.div`
    position: absolute;
    width:250px;
    height:70px;
    top:72px;
    right: 0;
    z-index:11;
    background-color: #fff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    display: ${({open}) => (open ? "block" : "none")};
`
const LinkNav = styled(Link)`
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #363636;
    transition: 0.8s ease;
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
        transition: 0.8s ease;
    }
`
export default Navbar
