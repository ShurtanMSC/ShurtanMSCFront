import React from 'react'
import Navbar from '../components/Navbar'
import AddGas from '../components/AddGas'
import styled from 'styled-components'
import { ContainerFluid, ThirdBox, FirstBox, SecondBox } from '../styled'
import AddAnalize from '../components/AddAnalize'
import TechnologicalModes from '../components/TechnologicalModes'
import ConsumedElectricity from '../components/ConsumedElectricity'
import NumberOfStaff from '../components/NumberOfStaff'
import GasBalance from '../components/GasBalance'
import WellStock from '../components/WellStock'
import ModesOfOperation from '../components/ModesOfOperation'
import Map from '../components/Map'

const MainPage = () => {
    return (
        <div>
            <Navbar/>
            <ContainerFluidMainPage>
                <FirstBox>
                    <AddGas/>
                    <GasBalance/>
                    <WellStock/>
                </FirstBox>
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
        </div>
    )
}

const ContainerFluidMainPage = styled(ContainerFluid)`
    display: grid;
    grid-template-columns: 1fr 2.5fr 1fr;
    grid-gap: 5px;
    padding: 5px;
    align-items:flex-start;
`
export default MainPage
