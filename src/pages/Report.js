import React, {useRef, useState} from 'react';
import { Window, ContainerFluid } from '../styled';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import ReportHeader from "../components/ReportComponents/ReportHeader";
import ReportBody from "../components/ReportComponents/ReportBody";
import {useReactToPrint} from 'react-to-print';
import Footer from '../components/Footer'

const Report = () => {
    const componentRef = useRef();
    const [ showTexReport, setShowTexReport ] = useState(false);

    const handlerPrint = useReactToPrint({
        content: () => componentRef.current,
    })
    const handlerShowTexReport = e => {
        e.preventDefault();
        setShowTexReport(prev => !prev);
    }

    return (
        <Window>
            <Navbar/>
            <ContainerFluidReport>
                <ReportHeader handlerPrint={handlerPrint} handlerShowTexReport={handlerShowTexReport}/>
                <ReportBody componentRef={componentRef} showTexReport={showTexReport}/>
            </ContainerFluidReport>
            <Footer/>
        </Window>
    )
}
const ContainerFluidReport = styled(ContainerFluid)`
  background: #F2FAFF;
  padding-top: 2%;
  width: 100%;
  min-height:89.6vh;
  flex-direction:column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 72px;
`
export default Report