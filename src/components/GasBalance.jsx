import React, {useState, useContext} from 'react';
import {AppContext} from '../context'
import styled from 'styled-components'
import CountUp from 'react-countup'
import CurrentOperatingCostsModal from './CurrentOperatingCostsModal'
import GasBalanceModal from './GasBalanceModal';
import BalanceModal from './BalanceModal';
import {getRoleNameFromJWT} from "../utills/UsefullFunctions";

const GasBalance = () => {
    const {totalInWork, totalInIdle, totalInRepair, AllTotal, date} = useContext(AppContext);
    const [showCurrentOperatingCosts, setShowCurrentOperatingCosts] = useState(false);
    const [showGasBalanceModal, setShowGasBalanceModal] = useState(false);
    const [showBalance, setShowBalance] = useState(false);

    const openModal = () => {
        setShowCurrentOperatingCosts(prev => !prev);
    }

    const showModal = () => {
        setShowGasBalanceModal(prev => !prev);
    }

    const showBalanceModal = () => {
        setShowBalance(prev => !prev);
    }
    let totalInWorkPercent = (totalInWork*100)/AllTotal;
    let totalInIdlePercent = (totalInIdle*100)/AllTotal;
    let totalInRepairPercent = (totalInRepair*100)/AllTotal;
    return (
        <>
        <ContainerFluidGasBAlanced>
            <ContainerGasBalanced>
                <BoxGasBalanced>
                    <PGasBalanced>В работе</PGasBalanced>
                    <Percent>
                        <Svg>
                            <CircleOne cx="30" cy="30" r="30" ></CircleOne>
                            <CircleOne cx="30" cy="30" r="30" totalInWorkPercent={totalInWorkPercent} ></CircleOne>
                        </Svg>
                        <Number>
                            <h4> <CountUp end={totalInWorkPercent} duration={5}/><span>%</span></h4>
                        </Number>
                    </Percent>
                </BoxGasBalanced>
                <BoxGasBalanced>
                    <PGasBalanced>В простое</PGasBalanced>
                    <Percent>
                        <Svg>
                            <CircleTwo cx="30" cy="30" r="30"></CircleTwo>
                            <CircleTwo cx="30" cy="30" r="30" totalInIdlePercent={totalInIdlePercent}></CircleTwo>
                        </Svg>
                        <Number>
                            <h4> <CountUp end={totalInIdlePercent} duration={5}/><span>%</span></h4>
                        </Number>
                    </Percent>
                </BoxGasBalanced>
                <BoxGasBalanced>
                    <PGasBalanced>В ремонте</PGasBalanced>
                    <Percent>
                        <Svg>
                            <CircleThree cx="30" cy="30" r="30"></CircleThree>
                            <CircleThree cx="30" cy="30" r="30" totalInRepairPercent={totalInRepairPercent}></CircleThree>
                        </Svg>
                        <Number>
                            <h4> <CountUp end={totalInRepairPercent} duration={5}/><span>%</span></h4>
                        </Number>
                    </Percent>
                </BoxGasBalanced>
                <Card>
                    <CardGasBalanced>
                        <P>Часовая <br/> Добыча:</P>
                        <PNumber> <CountUp end={500} duration={5}/> <Span>тыс.м³</Span></PNumber>
                    </CardGasBalanced>
                    <CardGasBalanced>
                        <P>Средний <br/> Дебит:</P>
                        <PNumber> <CountUp end={50} duration={5}/> <Span>тыс.м³</Span></PNumber>
                    </CardGasBalanced>
                </Card>
            </ContainerGasBalanced>
            <BtnDiv>
                <Button onClick={openModal} disabled={getRoleNameFromJWT() === 'EMPLOYEE' || getRoleNameFromJWT() === 'OPERATOR' || getRoleNameFromJWT() === 'ENERGETIC' || getRoleNameFromJWT() === 'METROLOGIST' || getRoleNameFromJWT() === 'GEOLOGIST' ? true : false}>Текущие эксплуатационные <br/>затраты</Button>
                <Button onClick={showModal} disabled={getRoleNameFromJWT() === "EMPLOYEE" || getRoleNameFromJWT() === 'OPERATOR' || getRoleNameFromJWT() === 'ENERGETIC' || getRoleNameFromJWT() === 'METROLOGIST' || getRoleNameFromJWT() === 'GEOLOGIST' ? true : false}>Состав газа</Button>
                <Button onClick={showBalanceModal}>Баланс газа</Button>
            </BtnDiv>
        </ContainerFluidGasBAlanced>
        <CurrentOperatingCostsModal showCurrentOperatingCosts={showCurrentOperatingCosts} setShowCurrentOperatingCosts={setShowCurrentOperatingCosts} date={date}/>
        <GasBalanceModal showGasBalanceModal={showGasBalanceModal} setShowGasBalanceModal={setShowGasBalanceModal} date={date}/>
        <BalanceModal showBalance={showBalance} setShowBalance={setShowBalance}/>
        </>
    )
}
const ContainerFluidGasBAlanced = styled.div`
    width:380px;
    height:160px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 5px;
`
const ContainerGasBalanced = styled.div`
    background: #C3E7FA;
    height:110px;
    display:flex;
    justify-content: space-between;
    align-items: center;
`
const Card = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
`
const CardGasBalanced = styled.div`
    display: flex;
    justify-content: space-between;
    background: rgba(250, 250, 250, 0.5);
    border-radius: 5px;
    padding:5px;
`
const P = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    color: #363636;
`
const PNumber = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #363636;
`
const Span = styled.span`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 1000;
    font-size: 8px;
    color: #363636;
    margin-bottom: 5px;
    text-align: center;
`
const BoxGasBalanced = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0 5px 5px;
`
const PGasBalanced = styled.div`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    color: #363636;
    margin-bottom: 5px;
    text-align: center;
`
const Svg = styled.svg`
    width: 70px;
    height: 70px;
    
`
const Percent = styled.div`
    position: relative;
    height:70px;
`
const CircleOne =styled.circle`
    fill: none;
    stroke-width: 8;
    stroke: #FAFAFA;
    transform: translate(5px, 5px);
    stroke-dasharray: 189;
    stroke-dashoffset: 189;
    stroke-linecap:round;
    &:nth-child(1){
        stroke-dashoffset:0;
        stroke:#FAFAFA;
    }
    &:nth-child(2){
        stroke-dashoffset: calc( 189 - ( 189 * ${(props) => props.totalInWorkPercent}) / 100);
        stroke:#FF914B;
        animation: html 5s;
        @keyframes html{
            0%{
                stroke-dashoffset: 270%;
            }
            100%{
                stroke-dashoffset: calc( 189 - ( 189 * ${(props) => props.totalInWorkPercent}) / 100)"%";
            }
        }
    }
`
const CircleTwo =styled.circle`
    fill: none;
    stroke-width: 8;
    stroke: #FAFAFA;
    transform: translate(5px, 5px);
    stroke-dasharray: 189;
    stroke-dashoffset: 189;
    stroke-linecap:round;
    &:nth-child(1){
        stroke-dashoffset:0;
        stroke:#FAFAFA;
    }
    &:nth-child(2){
        stroke-dashoffset:calc( 189 - ( 189 * ${(props) => props.totalInIdlePercent} ) / 100);
        stroke:#FF914B;
        animation: css 5s;
        @keyframes css{
            0%{
                stroke-dashoffset: 270%;
            }
            100%{
                stroke-dashoffset: calc( 189 - ( 189 * ${(props) => props.totalInIdlePercent} ) / 100)"%";
            }
        }
    }
`
const CircleThree =styled.circle`
    fill: none;
    stroke-width: 8;
    stroke: #FAFAFA;
    transform: translate(5px, 5px);
    stroke-dasharray: 189;
    stroke-dashoffset: 189;
    stroke-linecap:round;
    &:nth-child(1){
        stroke-dashoffset:0;
        stroke:#FAFAFA;
    }
    &:nth-child(2){
        stroke-dashoffset:calc( 189 - ( 189 * ${(props) => props.totalInRepairPercent} ) / 100);
        stroke:#FF914B;
        animation: js 5s;
        @keyframes js{
            0%{
                stroke-dashoffset: 270%;
            }
            100%{
                stroke-dashoffset: calc( 189 - ( 189 * ${(props) => props.totalInRepairPercent} ) / 100)"%";
            }
        }
    }
`
const Number = styled.div`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #363636;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
`
const BtnDiv = styled.div`
    height:45px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: stretch;
    padding: 2px;
`
const Button = styled.button`
    background: #FFE5D3;
    border: 1px solid #FF914B;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    text-align: center;
    color: #363636;
    // width:100%;
    height:35px;
    padding: 3px 6px;
    cursor: pointer;
    outline: none;
    transition: 0.5s ease-in;
    &:hover{
        background: #FF914B;
        color: #fafafa;
    }
    &:focus{
        box-shadow: 0 0 2px 2px rgba(255, 144, 75, 0.5);
        background: #FF914B;
        color: #fafafa;
    }
    &:not(:first-child){
        width: 26%;
        margin-left: 2px;
    }
`

export default GasBalance
