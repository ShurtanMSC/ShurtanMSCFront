import React from 'react'
import Navbar from '../components/Navbar'
import AddGas from '../components/AddGas'
import styled from 'styled-components'
import { ContainerFluid, ThirdBox, FirstBox, SecondBox, Window, ThirdBoxLittleSize, FirstBoxOut } from '../styled'
import AddAnalize from '../components/AddAnalize'
import TechnologicalModes from '../components/TechnologicalModes'
import ConsumedElectricity from '../components/ConsumedElectricity'
import NumberOfStaff from '../components/NumberOfStaff'
import GasBalance from '../components/GasBalance'
import WellStock from '../components/WellStock'
import ModesOfOperation from '../components/ModesOfOperation'
import Map from '../components/Map';
import Footer from '../components/Footer';

const MainPage = () => {
    return (
        <Window>
            <Navbar/>
            <ContainerFluidMainPage>
                <FirstBoxOut>
                    <FirstBox>
                        <AddGas/>
                        <GasBalance/>
                        <WellStock/>
                    </FirstBox>
                    <ThirdBoxLittleSize>
                        <TechnologicalModes/>
                        <ConsumedElectricity/>
                        <NumberOfStaff/>
                    </ThirdBoxLittleSize>
                </FirstBoxOut>
                <SecondBox>
                    <AddAnalize/>
                    <Map/>
                    <ModesOfOperation/>
                </SecondBox>                
                <ThirdBox>  
                    <TechnologicalModes/>
                    <ConsumedElectricity/>
                    <NumberOfStaff/>
                </ThirdBox>
            </ContainerFluidMainPage>
            <Footer/>
        </Window>
    )
}

const ContainerFluidMainPage = styled(ContainerFluid)`
    width:100%;
    //height:95%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding:5px;
    @media(max-width:1900px){
        flex-direction: column;
        align-items: center;
    }
`
export default MainPage
