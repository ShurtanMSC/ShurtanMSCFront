import React from 'react';
import {ContainerReportBody, TitleH1} from '../../styled';
import ReportTex from "./ReportBodyCom/ReportTex";
import ReportAnalysis from "./ReportBodyCom/ReportAnalysis";
import ReportElectricity from "./ReportBodyCom/ReportElectricity";
import ReportStaff from "./ReportBodyCom/ReportStaff";

const ReportBody = ({componentRef, showTexReport, showAnalysis, showElectricity, showStaff}) => {

    return(
        <ContainerReportBody>

                <div style={{width:"100%"}} ref={componentRef}>
                    {showTexReport ? <ReportTex/> :
                        showAnalysis ? <ReportAnalysis/> :
                            showElectricity ? <ReportElectricity/> :
                                showStaff ? <ReportStaff/> :
                                    <TitleH1>ВЫБЕРИТЕ ОТЧЕТ</TitleH1>}
                </div>


        </ContainerReportBody>
    )
}

export default ReportBody