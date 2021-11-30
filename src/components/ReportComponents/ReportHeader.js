import React, {useContext} from 'react';
import {AppContext} from "../../context";
import {
    ContainerReportHeader,
    FormReportHeader,
    LabelReportHeader,
    SelectReportHeader,
    LabelReportHeaderDate,
    ButtonReportApply,
    InputReportDate,
    ButtonReportDownload,
    SelectDiv,
    InputDateDiv,
    PrintDiv,
} from '../../styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import {BASE_URL} from "../../utills/constant";
import {getRoleNameFromJWT} from "../../utills/UsefullFunctions";

const ReportHeader = ({handlerPrint, handlerShowTexReport,
                          handlerSelectReport, showTexReport,
                          showAnalysis, showElectricity,
                          showStaff, handlerStartDate,
                          handlerEndDate, startDate, endDate}) => {
    const {dateTime} = useContext(AppContext);
    return(
        <ContainerReportHeader>
            <FormReportHeader onSubmit={handlerShowTexReport}>
                <SelectDiv>
                    <LabelReportHeader htmlFor="reportShurtan">Вид счета</LabelReportHeader>
                    <SelectReportHeader name="reportShurtan" onChange={handlerSelectReport} required>
                        <option value="select" selected>--Выберите--</option>
                        {getRoleNameFromJWT() !== 'EMPLOYEE' &&
                         getRoleNameFromJWT() !== 'ENERGETIC' &&
                         getRoleNameFromJWT() !== 'METROLOGIST' ? <option value="addAnalysis" >Анализ добычи</option> : ""}
                        {getRoleNameFromJWT() !== 'EMPLOYEE' &&
                         getRoleNameFromJWT() !== 'METROLOGIST' &&
                         getRoleNameFromJWT() !== 'GEOLOGIST' ? <option value="consumedElectricity" >Потребление электроэнергии</option> : ""}
                        {getRoleNameFromJWT() !== 'METROLOGIST' &&
                         getRoleNameFromJWT() !== 'ENERGETIC' &&
                         getRoleNameFromJWT() !== 'GEOLOGIST' ? <option value="numberOfStaff" >Управление персоналом</option> : ""}
                        {getRoleNameFromJWT() !== 'EMPLOYEE' &&
                         getRoleNameFromJWT() !== 'ENERGETIC' &&
                         getRoleNameFromJWT() !== 'METROLOGIST' ? <option value="technologicalModes" >Технологический режим эксплуатации месторождений</option> : ""}
                    </SelectReportHeader>
                </SelectDiv>
                <InputDateDiv>
                    <LabelReportHeaderDate htmlFor="fromData">Дата отсчета <span> От </span> </LabelReportHeaderDate>
                    <InputReportDate type="date" onChange={handlerStartDate} required/>
                </InputDateDiv>
                <InputDateDiv>
                    <LabelReportHeaderDate htmlFor="toData">Анализ добычи <span> До </span> </LabelReportHeaderDate>
                    <InputReportDate type="date" onChange={handlerEndDate} required/>
                </InputDateDiv>
                <ButtonReportApply>Применить</ButtonReportApply>
                <ButtonReportDownload href={showTexReport ? (BASE_URL + "/api/report/test/" + "Tex - " + startDate +' '+ endDate) :
                                            showElectricity ? (BASE_URL + "/api/report/electricity/excel/" + "Electricity - " + startDate +' '+endDate) :
                                            showStaff ? (BASE_URL + "/api/report/staff/excel/" + "Staff - " + startDate+' '+endDate) :
                                            showAnalysis ? (BASE_URL + "/api/report/production/excel/" + "Analysis - " + startDate+' ' +endDate) : "#"}
                                      >Экспорт Excel</ButtonReportDownload>
            </FormReportHeader>
            <PrintDiv>

                <FontAwesomeIconPrint icon={faPrint} onClick={handlerPrint} size='2x'/>
            </PrintDiv>
        </ContainerReportHeader>
    )
}
const FontAwesomeIconPrint = styled(FontAwesomeIcon)`
  cursor: pointer;
  transition: 0.5s ease-in;
  &:hover{
    color: #6FE66C;
  }
`
export default ReportHeader;