import React from 'react';
import {ContainerReportBody, TitleH1} from '../../styled';
import ReportTex from "./ReportBodyCom/ReportTex";
import ReportAnalysis from "./ReportBodyCom/ReportAnalysis";
import ReportElectricity from "./ReportBodyCom/ReportElectricity";
import ReportStaff from "./ReportBodyCom/ReportStaff";

const ReportBody = ({componentRef, showTexReport, showAnalysis, showElectricity, showStaff, startDate, endDate}) => {

    return(
        <ContainerReportBody>

                <div style={{width:"100%"}} ref={componentRef}>
                    {showTexReport ?
                        <ReportTex
                            startDate={startDate}
                            endDate={endDate}
                        /> :
                        showAnalysis ?
                            <ReportAnalysis
                                startDate={startDate}
                                endDate={endDate}
                            /> :
                            showElectricity ?
                                <ReportElectricity
                                    startDate={startDate}
                                    endDate={endDate}
                                /> :
                                showStaff ?
                                    <ReportStaff
                                        startDate={startDate}
                                        endDate={endDate}
                                    /> :
                                    <TitleH1>ВЫБЕРИТЕ ОТЧЕТ</TitleH1>}
                </div>


        </ContainerReportBody>
    )
}

export default ReportBody