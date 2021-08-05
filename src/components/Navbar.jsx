import React, { useState } from 'react'
import styled from 'styled-components'
import { ContainerFluid, H1, P, NavbarCard, HumanImg, DateP, OclockP, DateAndOclock, Burger, BtnBurger } from '../styled'
import LogoOne from '../image/Navbar/logo-uzliti.png'
import LogoTwo from '../image/Navbar/logo-uzbekneftigaz.png'
import Human from '../image/Navbar/Vector.png'

const Navbar = () => {
    
    const [hours, setHours] = useState('0');
    const [minutes, setMinutes] = useState('0');
    const [seconds, setSeconds] = useState('0');
    
    setInterval(() => {
        setHours(new Date().getHours())
        setMinutes(new Date().getMinutes())
        setSeconds(new Date().getSeconds())
    }, 1000);

    return (
        <ContainerFluidNavbar>
                <LeftCorner></LeftCorner>
                <img src={LogoOne} alt="logo" />
                <H1>Информационно-аналитическая система оперативного анализа эксплуатации Шуртанской группы месторождений</H1>
                <img style={{zIndex:'2'}} src={LogoTwo} alt="logo" />
                <NavbarCard>
                    <HumanImg src={Human} alt="human" />
                    <P>Сиситемный <br/> администратор</P>
                </NavbarCard>
                <RightCenterLittle></RightCenterLittle>
                <RightCenterBig></RightCenterBig>
                <DateAndOclock>
                    <DateP>{ new Date().getDate() } { new Date().getMonth('avgust') } { new Date().getFullYear() }</DateP>
                    <OclockP> {hours} : {minutes} : {seconds} </OclockP>
                </DateAndOclock>
                
                <RightCorner>
                    <Burger>
                        <BtnBurger></BtnBurger>
                        <BtnBurger></BtnBurger>
                        <BtnBurger></BtnBurger>
                    </Burger>
                </RightCorner>
        </ContainerFluidNavbar>
    )
}

const ContainerFluidNavbar = styled(ContainerFluid)`
    min-height: 5vh;
    justify-content: space-between;
    background-color: #C3E7FA;
    position: relative;
`
const LeftCorner = styled.div`
    background: rgba(0, 161, 220, 0.3);
    clip-path: polygon(0 0, 80% 0%, 100% 100%, 0% 100%);
    width: 115.5px;
    height: 72px;
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
`
export default Navbar
