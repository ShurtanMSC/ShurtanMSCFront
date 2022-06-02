import React, {useContext} from "react";
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

const ReportStaff = ({startDate, endDate}) => {
    const {personalReport} = useContext(AppContext);
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
                                "______" _____________ 20__ г.
                            </TitleP>
                            <TitleP>"Утверждаю" <br/>
                                Главный геолог <br/>
                                "Шуртанского" НГДУ <br/>
                                ___________ З.Б.Нематов <br/>
                                "_______" _____________ 20__ г.
                            </TitleP>
                        </TitleReport>
                        <div style={{margin:'2%'}}>
                            <TitleP>Количество персонала по месторождению Шуртан по {startDate} с {endDate}
                            </TitleP>
                        </div>
                    </TitleReportDiv>
                    <TableReportBody>
                        <thead>
                        <Tr>
                            <ThReport rowSpan="2">Наименование месторождений</ThReport>
                            <ThReport colSpan="4">Количество персонала</ThReport>
                        </Tr>
                        <Tr>
                            <ThReport>В работе</ThReport>
                            <ThReport>В отпуске</ThReport>
                            <ThReport>На больничном</ThReport>
                            <ThReport>Б/С</ThReport>
                        </Tr>
                        </thead>
                        <tbody>
                        <Tr>
                            <TdReportBody>{personalReport[0].objectDto.name}</TdReportBody>
                            <TdReportBody>{personalReport[0].objectActionDto ? personalReport[0].objectActionDto.atWork : ""}</TdReportBody>
                            <TdReportBody>{personalReport[0].objectActionDto ? personalReport[0].objectActionDto.onVacation : ""}</TdReportBody>
                            <TdReportBody>{personalReport[0].objectActionDto ? personalReport[0].objectActionDto.onSickLeave : ""}</TdReportBody>
                            <TdReportBody>{personalReport[0].objectActionDto ? personalReport[0].objectActionDto.withoutContent : ""}</TdReportBody>
                        </Tr>
                        </tbody>
                        <tfoot>
                        <Tr>
                            <TdTotalReport>Итого</TdTotalReport>
                            <TdTotalCountReport>{personalReport[0].objectActionDto ? personalReport[0].objectActionDto.atWork : ""}</TdTotalCountReport>
                            <TdTotalCountReport>{personalReport[0].objectActionDto ? personalReport[0].objectActionDto.onVacation : ""}</TdTotalCountReport>
                            <TdTotalCountReport>{personalReport[0].objectActionDto ? personalReport[0].objectActionDto.onSickLeave : ""}</TdTotalCountReport>
                            <TdTotalCountReport>{personalReport[0].objectActionDto ? personalReport[0].objectActionDto.withoutContent : ""}</TdTotalCountReport>
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
export default ReportStaff