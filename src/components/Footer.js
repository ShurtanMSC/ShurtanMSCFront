import React from 'react';
import {ContainerFluid} from "../styled";
import styled from "styled-components";

const Footer = () => {
    return(
        <ContainerFluidFooter>
            <PFooter> © Все права защищены <AFooter href="https://liting.uz/" target="_blank">АО "O'ZLITINEFTGAZ"</AFooter> {new Date().getFullYear()}г. </PFooter>
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
const AFooter = styled.a`
  font-size: inherit;
  font-weight: inherit;
  transition: .3s ease-in-out;
  &:hover{
    color: #00A0DC;
  }
  &:focus{
    box-shadow: none;
  }
`
export default Footer