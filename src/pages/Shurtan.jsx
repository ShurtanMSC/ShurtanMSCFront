import React from 'react'
import Navbar from '../components/Navbar'
import { ContainerFluid, ShurtanBoxOne, ShurtanBoxTwo, ShurtanBoxThree, Window } from '../styled'
import styled from 'styled-components'
import ShurtanMap from '../components/Shurtan/ShurtanMap'
import Pressure from '../components/Shurtan/Pressure'
import BtnSearch from '../components/Shurtan/BtnSearch'
import Grafic from '../components/Shurtan/Grafic'
import Mining from '../components/Shurtan/Mining'
import TableGrafic from '../components/Shurtan/TableGrafic/TableGrafic';
import Footer from '../components/Footer'

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
                    <TableGrafic/>                 
                    <Mining/>
                </ShurtanBoxThree>
            </ContainerFluidShurtan>
            <Footer/>
        </Window>
    )
}

const ContainerFluidShurtan = styled(ContainerFluid)`
    width:100%;
    //min-height:95%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding:5px;
    margin-top: 72px;
    @media(max-width:1900px){
        flex-direction: column;
        align-items: center;
    }
` 
export default Shurtan
