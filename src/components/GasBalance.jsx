import React from 'react'
import styled from 'styled-components'

const GasBalance = () => {
    return (
        <ContainerFluidGasBAlanced>
            <ContainerGasBalanced>
                <BoxGasBalanced>
                    <PGasBalanced>В ремонте</PGasBalanced>
                    <Percent>
                        <Svg>
                            <CircleOne cx="30" cy="30" r="30"></CircleOne>
                            <CircleOne cx="30" cy="30" r="30"></CircleOne>
                        </Svg>
                        <Number>
                            <h4>82<span>%</span></h4>
                        </Number>
                    </Percent>
                </BoxGasBalanced>
                <BoxGasBalanced>
                    <PGasBalanced>В консервации</PGasBalanced>
                    <Percent>
                        <Svg>
                            <CircleTwo cx="30" cy="30" r="30"></CircleTwo>
                            <CircleTwo cx="30" cy="30" r="30"></CircleTwo>
                        </Svg>
                        <Number>
                            <h4>59<span>%</span></h4>
                        </Number>
                    </Percent>
                </BoxGasBalanced>
                <BoxGasBalanced>
                    <PGasBalanced>В работе</PGasBalanced>
                    <Percent>
                        <Svg>
                            <CircleThree cx="30" cy="30" r="30"></CircleThree>
                            <CircleThree cx="30" cy="30" r="30"></CircleThree>
                        </Svg>
                        <Number>
                            <h4>68<span>%</span></h4>
                        </Number>
                    </Percent>
                </BoxGasBalanced>
                <Card>
                    <CardGasBalanced>
                        <P>Часовая <br/> Добыча:</P>
                        <PNumber>500 <Span>тыс.м³</Span></PNumber>
                    </CardGasBalanced>
                    <CardGasBalanced>
                        <P>Средний <br/> Дебит:</P>
                        <PNumber>5000<Span>тыс.м³</Span></PNumber>
                    </CardGasBalanced>
                </Card>
            </ContainerGasBalanced>
            <BtnDiv>
                <Button>Текущие эксплуатационные затраты</Button>
                <Button>Баланс газа</Button>
            </BtnDiv>
        </ContainerFluidGasBAlanced>
    )
}
const ContainerFluidGasBAlanced = styled.div`
    width:380px;
    height:160px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
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
    font-weight: 1000;
    font-size: 10px;
    color: #363636;
`
const PNumber = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
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
    font-weight: 1000;
    font-size: 8px;
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
        stroke-dashoffset:calc( 189 - ( 189 * 82 ) / 100);
        stroke:#FF914B;
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
        stroke-dashoffset:calc( 189 - ( 189 * 59 ) / 100);
        stroke:#FF914B;
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
        stroke-dashoffset:calc( 189 - ( 189 * 68 ) / 100);
        stroke:#FF914B;
    }
`
const Number = styled.div`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #363636;
    position: absolute;
    top:25px;
    left:18px;
`
const BtnDiv = styled.div`
    height:45px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2px;
`
const Button = styled.button`
    background: #FFE5D3;
    border: 1px solid #FF914B;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 1000;
    font-size: 10px;
    text-align: center;
    color: #363636;
    width:48%;
    height:30px;
    padding: 2px;
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
`

export default GasBalance
