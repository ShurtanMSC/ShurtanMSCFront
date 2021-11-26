import React, {useRef, useState} from 'react';
import { Window, ContainerFluid } from '../styled';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import ReportHeader from "../components/ReportComponents/ReportHeader";
import ReportBody from "../components/ReportComponents/ReportBody";
import {useReactToPrint} from 'react-to-print';
import Footer from '../components/Footer';
import {BASE_URL} from "../utills/constant";

const Report = () => {
    const [selectReport, setSelectReport] = useState('');
    const componentRef = useRef();
    const [showTexReport, setShowTexReport] = useState(false);
    const [showAnalysis, setShowAnalysis] = useState(false);
    const [showElectricity , setShowElectricity] = useState(false);
    const [showStaff, setShowStaff] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handlerPrint = useReactToPrint({
        content: () => componentRef.current,
    })
    const handlerShowTexReport = e => {
        e.preventDefault();
        if( selectReport === "technologicalModes"){
            setShowTexReport(true);
            setShowAnalysis(false);
            setShowElectricity(false);
            setShowStaff(false);
        }else if(selectReport === "addAnalysis"){
            setShowAnalysis(true);
            setShowTexReport(false);
            setShowElectricity(false);
            setShowStaff(false);
        }else if(selectReport === "consumedElectricity"){
            setShowElectricity(true);
            setShowTexReport(false);
            setShowAnalysis(false);
            setShowStaff(false);
        }else if(selectReport === "numberOfStaff"){
            setShowStaff(true);
            setShowTexReport(false);
            setShowAnalysis(false);
            setShowElectricity(false);
        }else if(selectReport === "select"){
            setShowTexReport(false);
            setShowAnalysis(false);
            setShowElectricity(false);
            setShowStaff(false);
        }
        setSelectReport('');
    }
    const handlerSelectReport = e => {
        setSelectReport(e.target.value)
    }
    const handlerStartDate = e => {
        setStartDate(e.target.value);
    }
    const handlerEndDate = e => {
        setEndDate(e.target.value);
    }

    return (
        <Window>
            <Navbar/>
            <ContainerFluidReport>
                <ReportHeader
                    handlerPrint={handlerPrint}
                    handlerShowTexReport={handlerShowTexReport}
                    handlerSelectReport={handlerSelectReport}
                    showTexReport={showTexReport}
                    showAnalysis={showAnalysis}
                    showElectricity={showElectricity}
                    showStaff={showStaff}
                    handlerStartDate={handlerStartDate}
                    handlerEndDate={handlerEndDate}
                    startDate={startDate}
                    endDate={endDate}/>
                <ReportBody
                    componentRef={componentRef}
                    showTexReport={showTexReport}
                    showAnalysis={showAnalysis}
                    showElectricity={showElectricity}
                    showStaff={showStaff}/>
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