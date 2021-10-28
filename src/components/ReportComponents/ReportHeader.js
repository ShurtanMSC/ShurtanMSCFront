import React from 'react';
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

const ReportHeader = ({handlerPrint, handlerShowTexReport}) => {
    return(
        <ContainerReportHeader>
            <FormReportHeader onSubmit={handlerShowTexReport}>
                <SelectDiv>
                    <LabelReportHeader htmlFor="reportAnalysis">Вид счета</LabelReportHeader>
                    <SelectReportHeader name="reportAnalysis" >
                        <option>--Выберите--</option>
                        <option>Анализ добычи</option>
                        <option>Потребление электроэнергии</option>
                        <option>Управление персоналом</option>
                        <option>Технологический режим эксплуатации месторождений</option>
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
                <ButtonReportDownload>Экспорт Excel</ButtonReportDownload>
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