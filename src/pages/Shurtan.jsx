import React from 'react'
import Navbar from '../components/Navbar'
import { ContainerFluid, ShurtanSecondBox } from '../styled'
import styled from 'styled-components'
import ShurtanMap from '../components/Shurtan/ShurtanMap'

const Shurtan = () => {
    return (
        <div>
            <Navbar/>
            <ContainerFluidShurtan>
                <div></div>
                <ShurtanSecondBox>
                    <ShurtanMap/>
                </ShurtanSecondBox>
                <div></div>
            </ContainerFluidShurtan>
        </div>
    )
}

const ContainerFluidShurtan = styled(ContainerFluid)`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-gap: 5px;
    padding: 5px;
    align-items: flex-start;
` 
export default Shurtan
