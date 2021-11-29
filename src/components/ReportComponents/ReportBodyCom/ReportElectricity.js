import React, {useContext} from 'react';
import {AppContext} from "../../../context";
import {
    Table,
    Td,
    TdTotal, TdTotalCount,
    Th,
    TitleFooter,
    TitleFooterDiv,
    TitleP,
    TitleReport,
    TitleReportDiv,
    Tr
} from "../../../styled";
import styled from "styled-components";

const ReportElectricity = () => {
    const {electracityReport} = useContext(AppContext);
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
                            <TitleP>Потребляемая электроэнергия по месторождению Шуртан на март месяц 2021 года
                            </TitleP>
                        </div>
                    </TitleReportDiv>
                    <TableReportBody>
                        <thead>
                        <Tr>
                            <ThReport rowSpan="2">Наименование месторождений</ThReport>
                            <ThReport colSpan="4">Потребляемая электроэнергия, кв/ч</ThReport>
                        </Tr>
                        <Tr>
                            <ThReport>Часовая</ThReport>
                            <ThReport>С начала суток</ThReport>
                            <ThReport>С начала месяца</ThReport>
                            <ThReport>С начала года</ThReport>
                        </Tr>
                        </thead>
                        <tbody>
                        <Tr>
                            <TdReportBody>{electracityReport[0].miningSystemName}</TdReportBody>
                            <TdReportBody>{electracityReport[0].hourly ? electracityReport[0].hourly : ""}</TdReportBody>
                            <TdReportBody>{electracityReport[0].hourly ? electracityReport[0].hourly*24 : ""}</TdReportBody>
                            <TdReportBody>{electracityReport[0].hourly ? electracityReport[0].hourly*24*30 : ""}</TdReportBody>
                            <TdReportBody>{electracityReport[0].hourly ? electracityReport[0].hourly*24*365 : ""}</TdReportBody>
                        </Tr>
                        </tbody>
                        <tfoot>
                        <Tr>
                            <TdTotalReport>Итого</TdTotalReport>
                            <TdTotalCountReport>{electracityReport[0].hourly ? electracityReport[0].hourly : ""}</TdTotalCountReport>
                            <TdTotalCountReport>{electracityReport[0].hourly ? electracityReport[0].hourly*24 : ""}</TdTotalCountReport>
                            <TdTotalCountReport>{electracityReport[0].hourly ? electracityReport[0].hourly*24*30 : ""}</TdTotalCountReport>
                            <TdTotalCountReport>{electracityReport[0].hourly ? electracityReport[0].hourly*24*365 : ""}</TdTotalCountReport>
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
export default ReportElectricity