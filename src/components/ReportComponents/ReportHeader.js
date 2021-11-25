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

const ReportHeader = ({handlerPrint, handlerShowTexReport, handlerSelectReport}) => {
    const {dateTime} = useContext(AppContext);
    return(
        <ContainerReportHeader>
            <FormReportHeader onSubmit={handlerShowTexReport}>
                <SelectDiv>
                    <LabelReportHeader htmlFor="reportShurtan">Вид счета</LabelReportHeader>
                    <SelectReportHeader name="reportShurtan" onChange={handlerSelectReport}>
                        <option value="select" selected>--Выберите--</option>
                        <option value="addAnalysis" >Анализ добычи</option>
                        <option value="consumedElectricity" >Потребление электроэнергии</option>
                        <option value="numberOfStaff" >Управление персоналом</option>
                        <option value="technologicalModes" >Технологический режим эксплуатации месторождений</option>
                    </SelectReportHeader>
                </SelectDiv>
                <InputDateDiv>
                    <LabelReportHeaderDate htmlFor="fromData">Дата отсчета <span> От </span> </LabelReportHeaderDate>
                    <InputReportDate type="date"/>
                </InputDateDiv>
                <InputDateDiv>
                    <LabelReportHeaderDate htmlFor="toData">Анализ добычи <span> До </span> </LabelReportHeaderDate>
                    <InputReportDate type="date"/>
                </InputDateDiv>
                <ButtonReportApply>Применить</ButtonReportApply>
            </FormReportHeader>
            <PrintDiv>
                <ButtonReportDownload href={"http://185.170.214.207:8080/api/report/test/" + "Tex - " + dateTime}>Экспорт Excel</ButtonReportDownload>
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