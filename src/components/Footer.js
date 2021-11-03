import React from 'react';
import {ContainerFluid} from "../styled";
import styled from "styled-components";

const Footer = () => {
    return(
        <ContainerFluidFooter>
            <P_Footer> © Все права защищены АО "O'ZLITINEFTGAZ" {new Date().getFullYear()} </P_Footer>
        </ContainerFluidFooter>
    )
}
const ContainerFluidFooter = styled(ContainerFluid)`
  background: #222D44;
  min-height: 3.7vh;
`
const P_Footer = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #fff;
`
export default Footer