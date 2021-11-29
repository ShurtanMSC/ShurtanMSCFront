import React, {useContext} from "react";
import {AppContext} from "../../../context";
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
    const {analysisReport} = useContext(AppContext);
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
                        <TdReportBody>{analysisReport[0].name}</TdReportBody>
                        <TdReportBody>{analysisReport[0].plan_m}</TdReportBody>
                        <TdReportBody>{analysisReport[0].fakt_m}</TdReportBody>
                        <TdReportBody>{Math.ceil( (analysisReport[0].fakt_m*100)/(analysisReport[0].plan_m) )}</TdReportBody>
                        <TdReportBody>{(analysisReport[0].fakt_m)-(analysisReport[0].plan_m)}</TdReportBody>
                        <TdReportBody>{analysisReport[0].plan_g}</TdReportBody>
                        <TdReportBody>{analysisReport[0].fakt_g}</TdReportBody>
                        <TdReportBody>{analysisReport[0].proshlom_god}</TdReportBody>
                        <TdReportBody>{Math.ceil( (analysisReport[0].fakt_g*100)/(analysisReport[0].plan_g) )}</TdReportBody>
                        <TdReportBody>{(analysisReport[0].fakt_g)-(analysisReport[0].plan_g)}</TdReportBody>
                    </Tr>
                </tbody>
                <tfoot>
                    <Tr>
                        <TdTotalReport>Итого</TdTotalReport>
                        <TdTotalCountReport>{analysisReport[0].plan_m}</TdTotalCountReport>
                        <TdTotalCountReport>{analysisReport[0].fakt_m}</TdTotalCountReport>
                        <TdTotalCountReport>{Math.ceil( (analysisReport[0].fakt_m*100)/(analysisReport[0].plan_m) )}</TdTotalCountReport>
                        <TdTotalCountReport>{(analysisReport[0].fakt_m)-(analysisReport[0].plan_m)}</TdTotalCountReport>
                        <TdTotalCountReport>{analysisReport[0].plan_g}</TdTotalCountReport>
                        <TdTotalCountReport>{analysisReport[0].fakt_g}</TdTotalCountReport>
                        <TdTotalCountReport>{analysisReport[0].proshlom_god}</TdTotalCountReport>
                        <TdTotalCountReport>{Math.ceil( (analysisReport[0].fakt_g*100)/analysisReport[0].plan_g )}</TdTotalCountReport>
                        <TdTotalCountReport>{(analysisReport[0].fakt_g)-(analysisReport[0].plan_g)}</TdTotalCountReport>
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