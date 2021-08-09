import React from 'react'
import Navbar from '../components/Navbar'
import { ContainerFluid, ShurtanBoxOne, ShurtanBoxTwo, ShurtanBoxThree, Window } from '../styled'
import styled from 'styled-components'
import ShurtanMap from '../components/Shurtan/ShurtanMap'
import Pressure from '../components/Shurtan/Pressure'
import BtnSearch from '../components/Shurtan/BtnSearch'
import Grafic from '../components/Shurtan/Grafic'

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
                </ShurtanBoxThree>
            </ContainerFluidShurtan>
        </Window>
    )
}

const ContainerFluidShurtan = styled(ContainerFluid)`
    width:100%;
    min-height:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:5px;
    @media(max-width:1900px){
        flex-direction: column;
    }
` 
export default Shurtan
