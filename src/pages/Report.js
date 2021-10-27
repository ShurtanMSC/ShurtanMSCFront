import React, {useRef} from 'react';
import { Window, ContainerFluid } from '../styled';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import ReportHeader from "../components/ReportComponents/ReportHeader";
import ReportBody from "../components/ReportComponents/ReportBody";
import {useReactToPrint} from 'react-to-print';

const Report = () => {
    const componentRef = useRef();
    const handlerPrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <Window>
            <Navbar/>
            <ContainerFluidReport>
                <ReportHeader handlerPrint={handlerPrint}/>
                <ReportBody componentRef={componentRef}/>
            </ContainerFluidReport>
        </Window>
    )
}
const ContainerFluidReport = styled(ContainerFluid)`
  background: #F2FAFF;
  padding-top: 2%;
  width: 100%;
  min-height:92vh;
  flex-direction:column;
  justify-content: flex-start;
  align-items: center;
`
export default Report