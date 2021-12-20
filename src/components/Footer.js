import React from 'react';
import {ContainerFluid} from "../styled";
import styled from "styled-components";

const Footer = () => {
    return(
        <ContainerFluidFooter>
            <PFooter> © Все права защищены АО "O'ZLITINEFTGAZ" & Napa Automotive {new Date().getFullYear()} </PFooter>
        </ContainerFluidFooter>
    )
}
const ContainerFluidFooter = styled(ContainerFluid)`
  background: #222D44;
  min-height: 3.7vh;
`
const PFooter = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #fff;
`
export default Footer