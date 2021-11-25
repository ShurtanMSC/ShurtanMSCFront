import React from "react";
import {Table, Tr, Td, Th,
    TitleReportDiv,
    TitleReport,
    TitleP,
    TitleFooterDiv,
    TitleFooter,
    TdTotal,
    TdTotalCount} from '../../../styled';
import styled from 'styled-components';

const ReportAnalysis = () => {
    return(
        <ReportAnalysisContainer>
            <div>
            <TitleReportDiv>
                <TitleReport>
                    <TitleP>"Согласовано" <br/>
                        Заместитель главного <br/>
                        геолога  по технологии <br/>
                        "Шуртанского" НГДУ <br/>
                        ___________ Б.Х.Очилов <br/>
                        "______" _____________ 2021 г.
                    </TitleP>
                    <TitleP>"Утверждаю" <br/>
                        Главный геолог <br/>
                        "Шуртанского" НГДУ <br/>
                        ___________ З.Б.Нематов <br/>
                        "_______" _____________ 2021 г.
                    </TitleP>
                </TitleReport>
                <div style={{margin:'2%'}}>
                    <TitleP>Анализ добычи по месторождению Шуртан на март месяц 2021 года
                    </TitleP>
                </div>
            </TitleReportDiv>
            <TableReportBody>
                <thead>
                    <Tr>
                      <ThReport rowSpan="4">Наименование месторождений</ThReport>
                      <ThReport colSpan="10">Анализ добычи</ThReport>
                    </Tr>
                    <Tr>
                        <ThReport colSpan="4">За текущий месяц</ThReport>
                        <ThReport colSpan="5">С начала года</ThReport>
                    </Tr>
                    <Tr>
                        <ThReport rowSpan="2">План добычи тыс.м3</ThReport>
                        <ThReport rowSpan="2">Факт. добыча тыс.м3</ThReport>
                        <ThReport rowSpan="2">% выполнения</ThReport>
                        <ThReport>Отставание</ThReport>
                        <ThReport rowSpan="2">План добычи тыс.м3</ThReport>
                        <ThReport rowSpan="2">Факт. добыча тыс.м3</ThReport>
                        <ThReport rowSpan="2">За аналог. период прошлого года</ThReport>
                        <ThReport rowSpan="2">% выполнение</ThReport>
                        <ThReport>Отставание</ThReport>
                    </Tr>
                    <Tr>
                        <ThReport>Перевыполнение</ThReport>
                        <ThReport>Перевыполнение</ThReport>
                    </Tr>
                </thead>
                <tbody>
                    <Tr>
                        <TdReportBody>Шуртан</TdReportBody>
                        <TdReportBody>5000</TdReportBody>
                        <TdReportBody>4500</TdReportBody>
                        <TdReportBody>-90</TdReportBody>
                        <TdReportBody>-500</TdReportBody>
                        <TdReportBody>60000</TdReportBody>
                        <TdReportBody>59000</TdReportBody>
                        <TdReportBody>70000</TdReportBody>
                        <TdReportBody>98</TdReportBody>
                        <TdReportBody>-1000</TdReportBody>
                    </Tr>
                </tbody>
                <tfoot>
                    <Tr>
                        <TdTotalReport>Итого</TdTotalReport>
                        <TdTotalCountReport>5000</TdTotalCountReport>
                        <TdTotalCountReport>4500</TdTotalCountReport>
                        <TdTotalCountReport>-90</TdTotalCountReport>
                        <TdTotalCountReport>-500</TdTotalCountReport>
                        <TdTotalCountReport>60000</TdTotalCountReport>
                        <TdTotalCountReport>59000</TdTotalCountReport>
                        <TdTotalCountReport>70000</TdTotalCountReport>
                        <TdTotalCountReport>98</TdTotalCountReport>
                        <TdTotalCountReport>-1000</TdTotalCountReport>
                    </Tr>
                </tfoot>
            </TableReportBody>
            </div>
            <TitleFooterDiv>
                <TitleFooter>
                    <p>Начальник отдела РНиГМ:</p>
                    <p>А.У.Шоймардонов</p>
                </TitleFooter>
                <TitleFooter>
                    <p>Ведущий инженер отдела РНиГМ:</p>
                    <p>И.В.Жумаев</p>
                </TitleFooter>
            </TitleFooterDiv>
        </ReportAnalysisContainer>
    )
}
const ReportAnalysisContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const ThReport = styled(Th)`
  font-family: "Times New Roman";
  font-weight: 600;
  font-size: 16px;
`
const TableReportBody = styled(Table)`
  width:100%;
`
const TdReportBody = styled(Td)`
  border: 1px solid #F4B790;
  width: 2%;
  font-size: 16px;
  font-family: "Times New Roman";
`
const TdTotalReport = styled(TdTotal)`
  text-align: start;
  padding: 0 0 0 5px;
  font-family: "Times New Roman";
  font-size: 16px;
`
const TdTotalCountReport = styled(TdTotalCount)`
  border: 1px solid #F4B790;
  font-weight: 600;
  font-size: 16px;
  font-family: "Times New Roman";
`
export default ReportAnalysis