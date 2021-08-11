import React from 'react'
import Navbar from '../components/Navbar'
import { ContainerFluid, ShurtanBoxOne, ShurtanBoxTwo, ShurtanBoxThree, Window } from '../styled'
import styled from 'styled-components'
import ShurtanMap from '../components/Shurtan/ShurtanMap'
import Pressure from '../components/Shurtan/Pressure'
import BtnSearch from '../components/Shurtan/BtnSearch'
import Grafic from '../components/Shurtan/Grafic'
import Mining from '../components/Shurtan/Mining'
import Forecast from '../components/Shurtan/Forecast'

const Shurtan = () => {
    return (
        <Window>
            <Navbar/>
            <ContainerFluidShurtan>
                <ShurtanBoxOne>
                    <Pressure/>
                    <BtnSearch/>
                </ShurtanBoxOne>
                <ShurtanBoxTwo>
                    <ShurtanMap/>
                </ShurtanBoxTwo>
                <ShurtanBoxThree>
                    <Grafic/>
                    <Forecast/>                 
                    <Mining/>
                </ShurtanBoxThree>
            </ContainerFluidShurtan>
        </Window>
    )
}

const ContainerFluidShurtan = styled(ContainerFluid)`
    width:100%;
    min-height:95%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding:5px;
    @media(max-width:1900px){
        flex-direction: column;
    }
` 
export default Shurtan
