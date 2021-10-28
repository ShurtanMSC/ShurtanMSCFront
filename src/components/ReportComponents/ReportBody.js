import React from 'react';
import {ContainerReportBody, Table, Tr, Td, Th, TitleReportDiv, TitleReport, TitleP, TitleFooterDiv, TitleFooter, TdTotal, TdTotalCount} from '../../styled';
import styled from 'styled-components';

const ReportBody = ({componentRef}) => {
    return(
        <ContainerReportBody>
            <div ref={componentRef}>
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
                    <div>
                        <TitleP>Технологический режим работы <br/>
                           эксплуатации газовых скважин по месторождению Шуртан на март месяц 2021 года
                        </TitleP>
                    </div>
                </TitleReportDiv>
                <TableReportBody >

                    <thead>
                        <Tr>
                            <ThReport rowSpan="3">№</ThReport>
                            <ThReport rowSpan="3">№ скв</ThReport>
                            <ThReport rowSpan="3">Горизонт</ThReport>
                            <ThReport rowSpan="3">D<sub>экс.кол</sub><br/>Mм</ThReport>
                            <ThReport colSpan="6">Глубина</ThReport>
                            <ThReport colSpan="11">Режим Эксплуатации скважин за последние 10 дней</ThReport>
                            <ThReport colSpan="11">Намечаемый режим эксплуатации скважин</ThReport>
                        </Tr>
                        <Tr>
                            <ThReport rowSpan="2">Искус, <br/> забоя</ThReport>
                            <ThReport colSpan="2">Интервала <br/> перфорации</ThReport>
                            <ThReport rowSpan="2"></ThReport>
                            <ThReport colSpan="2">Подвески <br/> НКТ</ThReport>
                            <ThReport rowSpan="2">Dшт, <br/> мм</ThReport>
                            <ThReport colSpan="6">Давление, кгс/см2</ThReport>
                            <ThReport colSpan="2">Дебит</ThReport>
                            <ThReport rowSpan="2">Устьевая <br/> скорость, <br/> мс</ThReport>
                            <ThReport rowSpan="2">Забойная <br/> скорость <br/> м/с </ThReport>
                            <ThReport rowSpan="2">Dшт, <br/> мм</ThReport>
                            <ThReport colSpan="6">Давление, кгс/см2</ThReport>
                            <ThReport colSpan="2">Дебит</ThReport>
                            <ThReport rowSpan="2">Устьевая <br/> скорость, <br/> мс</ThReport>
                            <ThReport rowSpan="2">Забойная <br/> скорость <br/> м/с </ThReport>
                        </Tr>
                        <Tr>
                            <ThReport>верх.</ThReport>
                            <ThReport>нижн.</ThReport>
                            <ThReport>d, мм</ThReport>
                            <ThReport>L, м</ThReport>
                            <ThReport>Ртр</ThReport>
                            <ThReport>Рзтр</ThReport>
                            <ThReport>Рстат</ThReport>
                            <ThReport>Рзаб</ThReport>
                            <ThReport>Рил</ThReport>
                            <ThReport>^Р</ThReport>
                            <ThReport>газа <br/>тыс.м3/сут</ThReport>
                            <ThReport>конден, <br/>т/сут.</ThReport>
                            <ThReport>Ртр</ThReport>
                            <ThReport>Рзтр</ThReport>
                            <ThReport>Рстат</ThReport>
                            <ThReport>Рзаб</ThReport>
                            <ThReport>Рил</ThReport>
                            <ThReport>^Р</ThReport>
                            <ThReport>газа <br/>тыс.м3/сут</ThReport>
                            <ThReport>конден, <br/>т/сут.</ThReport>
                        </Tr>
                        <Tr>
                            <ThReport>1</ThReport>
                            <ThReport>2</ThReport>
                            <ThReport>3</ThReport>
                            <ThReport>4</ThReport>
                            <ThReport>5</ThReport>
                            <ThReport>6</ThReport>
                            <ThReport>7</ThReport>
                            <ThReport>8</ThReport>
                            <ThReport>9</ThReport>
                            <ThReport>10</ThReport>
                            <ThReport>11</ThReport>
                            <ThReport>12</ThReport>
                            <ThReport>13</ThReport>
                            <ThReport>14</ThReport>
                            <ThReport>15</ThReport>
                            <ThReport>16</ThReport>
                            <ThReport>17</ThReport>
                            <ThReport>18</ThReport>
                            <ThReport>19</ThReport>
                            <ThReport>20</ThReport>
                            <ThReport>21</ThReport>
                            <ThReport>22</ThReport>
                            <ThReport>23</ThReport>
                            <ThReport>24</ThReport>
                            <ThReport>25</ThReport>
                            <ThReport>26</ThReport>
                            <ThReport>27</ThReport>
                            <ThReport>28</ThReport>
                            <ThReport>29</ThReport>
                            <ThReport>30</ThReport>
                            <ThReport>31</ThReport>
                            <ThReport>21</ThReport>
                        </Tr>
                    </thead>
                    <tbody>
                        <Tr>
                            <TdReportBody>1</TdReportBody>
                            <TdReportBody>1</TdReportBody>
                            <TdReportBody>XV-HP</TdReportBody>
                            <TdReportBody>140</TdReportBody>
                            <TdReportBody>3270</TdReportBody>
                            <TdReportBody>2797</TdReportBody>
                            <TdReportBody>2806</TdReportBody>
                            <TdReportBody>89</TdReportBody>
                            <TdReportBody>73/89</TdReportBody>
                            <TdReportBody>2887</TdReportBody>
                            <TdReportBody> </TdReportBody>
                            <TdReportBody>16.3</TdReportBody>
                            <TdReportBody>14</TdReportBody>
                            <TdReportBody>31.2</TdReportBody>
                            <TdReportBody>35.3</TdReportBody>
                            <TdReportBody>37.2</TdReportBody>
                            <TdReportBody>1.9</TdReportBody>
                            <TdReportBody>139</TdReportBody>
                            <TdReportBody>3.7</TdReportBody>
                            <TdReportBody>17.4</TdReportBody>
                            <TdReportBody>9.6</TdReportBody>
                            <TdReportBody> </TdReportBody>
                            <TdReportBody>15</TdReportBody>
                            <TdReportBody>14</TdReportBody>
                            <TdReportBody>30.3</TdReportBody>
                            <TdReportBody>34.6</TdReportBody>
                            <TdReportBody>36.0</TdReportBody>
                            <TdReportBody>1.4</TdReportBody>
                            <TdReportBody>138</TdReportBody>
                            <TdReportBody>3.8</TdReportBody>
                            <TdReportBody>21.7</TdReportBody>
                            <TdReportBody>9.7</TdReportBody>
                        </Tr>
                        <Tr>
                            <TdReportBody>1</TdReportBody>
                            <TdReportBody>1</TdReportBody>
                            <TdReportBody>XV-HP</TdReportBody>
                            <TdReportBody>140</TdReportBody>
                            <TdReportBody>3270</TdReportBody>
                            <TdReportBody>2797</TdReportBody>
                            <TdReportBody>2806</TdReportBody>
                            <TdReportBody>89</TdReportBody>
                            <TdReportBody>73/89</TdReportBody>
                            <TdReportBody>2887</TdReportBody>
                            <TdReportBody> </TdReportBody>
                            <TdReportBody>16.3</TdReportBody>
                            <TdReportBody>14</TdReportBody>
                            <TdReportBody>31.2</TdReportBody>
                            <TdReportBody>35.3</TdReportBody>
                            <TdReportBody>37.2</TdReportBody>
                            <TdReportBody>1.9</TdReportBody>
                            <TdReportBody>139</TdReportBody>
                            <TdReportBody>3.7</TdReportBody>
                            <TdReportBody>17.4</TdReportBody>
                            <TdReportBody>9.6</TdReportBody>
                            <TdReportBody> </TdReportBody>
                            <TdReportBody>15</TdReportBody>
                            <TdReportBody>14</TdReportBody>
                            <TdReportBody>30.3</TdReportBody>
                            <TdReportBody>34.6</TdReportBody>
                            <TdReportBody>36.0</TdReportBody>
                            <TdReportBody>1.4</TdReportBody>
                            <TdReportBody>138</TdReportBody>
                            <TdReportBody>3.8</TdReportBody>
                            <TdReportBody>21.7</TdReportBody>
                            <TdReportBody>9.7</TdReportBody>
                        </Tr>
                        <Tr>
                            <TdReportBody>1</TdReportBody>
                            <TdReportBody>1</TdReportBody>
                            <TdReportBody>XV-HP</TdReportBody>
                            <TdReportBody>140</TdReportBody>
                            <TdReportBody>3270</TdReportBody>
                            <TdReportBody>2797</TdReportBody>
                            <TdReportBody>2806</TdReportBody>
                            <TdReportBody>89</TdReportBody>
                            <TdReportBody>73/89</TdReportBody>
                            <TdReportBody>2887</TdReportBody>
                            <TdReportBody> </TdReportBody>
                            <TdReportBody>16.3</TdReportBody>
                            <TdReportBody>14</TdReportBody>
                            <TdReportBody>31.2</TdReportBody>
                            <TdReportBody>35.3</TdReportBody>
                            <TdReportBody>37.2</TdReportBody>
                            <TdReportBody>1.9</TdReportBody>
                            <TdReportBody>139</TdReportBody>
                            <TdReportBody>3.7</TdReportBody>
                            <TdReportBody>17.4</TdReportBody>
                            <TdReportBody>9.6</TdReportBody>
                            <TdReportBody> </TdReportBody>
                            <TdReportBody>15</TdReportBody>
                            <TdReportBody>14</TdReportBody>
                            <TdReportBody>30.3</TdReportBody>
                            <TdReportBody>34.6</TdReportBody>
                            <TdReportBody>36.0</TdReportBody>
                            <TdReportBody>1.4</TdReportBody>
                            <TdReportBody>138</TdReportBody>
                            <TdReportBody>3.8</TdReportBody>
                            <TdReportBody>21.7</TdReportBody>
                            <TdReportBody>9.7</TdReportBody>
                        </Tr>
                        <Tr>
                            <TdReportBody>1</TdReportBody>
                            <TdReportBody>1</TdReportBody>
                            <TdReportBody>XV-HP</TdReportBody>
                            <TdReportBody>140</TdReportBody>
                            <TdReportBody>3270</TdReportBody>
                            <TdReportBody>2797</TdReportBody>
                            <TdReportBody>2806</TdReportBody>
                            <TdReportBody>89</TdReportBody>
                            <TdReportBody>73/89</TdReportBody>
                            <TdReportBody>2887</TdReportBody>
                            <TdReportBody> </TdReportBody>
                            <TdReportBody>16.3</TdReportBody>
                            <TdReportBody>14</TdReportBody>
                            <TdReportBody>31.2</TdReportBody>
                            <TdReportBody>35.3</TdReportBody>
                            <TdReportBody>37.2</TdReportBody>
                            <TdReportBody>1.9</TdReportBody>
                            <TdReportBody>139</TdReportBody>
                            <TdReportBody>3.7</TdReportBody>
                            <TdReportBody>17.4</TdReportBody>
                            <TdReportBody>9.6</TdReportBody>
                            <TdReportBody> </TdReportBody>
                            <TdReportBody>15</TdReportBody>
                            <TdReportBody>14</TdReportBody>
                            <TdReportBody>30.3</TdReportBody>
                            <TdReportBody>34.6</TdReportBody>
                            <TdReportBody>36.0</TdReportBody>
                            <TdReportBody>1.4</TdReportBody>
                            <TdReportBody>138</TdReportBody>
                            <TdReportBody>3.8</TdReportBody>
                            <TdReportBody>21.7</TdReportBody>
                            <TdReportBody>9.7</TdReportBody>
                        </Tr>
                        <Tr>
                            <TdReportBody>1</TdReportBody>
                            <TdReportBody>1</TdReportBody>
                            <TdReportBody>XV-HP</TdReportBody>
                            <TdReportBody>140</TdReportBody>
                            <TdReportBody>3270</TdReportBody>
                            <TdReportBody>2797</TdReportBody>
                            <TdReportBody>2806</TdReportBody>
                            <TdReportBody>89</TdReportBody>
                            <TdReportBody>73/89</TdReportBody>
                            <TdReportBody>2887</TdReportBody>
                            <TdReportBody> </TdReportBody>
                            <TdReportBody>16.3</TdReportBody>
                            <TdReportBody>14</TdReportBody>
                            <TdReportBody>31.2</TdReportBody>
                            <TdReportBody>35.3</TdReportBody>
                            <TdReportBody>37.2</TdReportBody>
                            <TdReportBody>1.9</TdReportBody>
                            <TdReportBody>139</TdReportBody>
                            <TdReportBody>3.7</TdReportBody>
                            <TdReportBody>17.4</TdReportBody>
                            <TdReportBody>9.6</TdReportBody>
                            <TdReportBody> </TdReportBody>
                            <TdReportBody>15</TdReportBody>
                            <TdReportBody>14</TdReportBody>
                            <TdReportBody>30.3</TdReportBody>
                            <TdReportBody>34.6</TdReportBody>
                            <TdReportBody>36.0</TdReportBody>
                            <TdReportBody>1.4</TdReportBody>
                            <TdReportBody>138</TdReportBody>
                            <TdReportBody>3.8</TdReportBody>
                            <TdReportBody>21.7</TdReportBody>
                            <TdReportBody>9.7</TdReportBody>
                        </Tr>
                        <Tr>
                            <TdReportBody>1</TdReportBody>
                            <TdReportBody>1</TdReportBody>
                            <TdReportBody>XV-HP</TdReportBody>
                            <TdReportBody>140</TdReportBody>
                            <TdReportBody>3270</TdReportBody>
                            <TdReportBody>2797</TdReportBody>
                            <TdReportBody>2806</TdReportBody>
                            <TdReportBody>89</TdReportBody>
                            <TdReportBody>73/89</TdReportBody>
                            <TdReportBody>2887</TdReportBody>
                            <TdReportBody> </TdReportBody>
                            <TdReportBody>16.3</TdReportBody>
                            <TdReportBody>14</TdReportBody>
                            <TdReportBody>31.2</TdReportBody>
                            <TdReportBody>35.3</TdReportBody>
                            <TdReportBody>37.2</TdReportBody>
                            <TdReportBody>1.9</TdReportBody>
                            <TdReportBody>139</TdReportBody>
                            <TdReportBody>3.7</TdReportBody>
                            <TdReportBody>17.4</TdReportBody>
                            <TdReportBody>9.6</TdReportBody>
                            <TdReportBody> </TdReportBody>
                            <TdReportBody>15</TdReportBody>
                            <TdReportBody>14</TdReportBody>
                            <TdReportBody>30.3</TdReportBody>
                            <TdReportBody>34.6</TdReportBody>
                            <TdReportBody>36.0</TdReportBody>
                            <TdReportBody>1.4</TdReportBody>
                            <TdReportBody>138</TdReportBody>
                            <TdReportBody>3.8</TdReportBody>
                            <TdReportBody>21.7</TdReportBody>
                            <TdReportBody>9.7</TdReportBody>
                        </Tr>
                    </tbody>
                    <tfoot>
                        <Tr>
                            <TdTotalReport colSpan="10">Среднее по месторождению</TdTotalReport>
                            <TdTotalCountReport> </TdTotalCountReport>
                            <TdTotalCountReport>16.3</TdTotalCountReport>
                            <TdTotalCountReport>9.5</TdTotalCountReport>
                            <TdTotalCountReport>30.5</TdTotalCountReport>
                            <TdTotalCountReport>32.6</TdTotalCountReport>
                            <TdTotalCountReport>36.6</TdTotalCountReport>
                            <TdTotalCountReport>3.8</TdTotalCountReport>
                            <TdTotalCountReport>121.4</TdTotalCountReport>
                            <TdTotalCountReport>3.2</TdTotalCountReport>
                            <TdTotalCountReport>16.8</TdTotalCountReport>
                            <TdTotalCountReport>9.8</TdTotalCountReport>
                            <TdTotalCountReport>2.0</TdTotalCountReport>
                            <TdTotalCountReport>15.5</TdTotalCountReport>
                            <TdTotalCountReport>9.6</TdTotalCountReport>
                            <TdTotalCountReport>29.7</TdTotalCountReport>
                            <TdTotalCountReport>32.2</TdTotalCountReport>
                            <TdTotalCountReport>35.7</TdTotalCountReport>
                            <TdTotalCountReport>3.6</TdTotalCountReport>
                            <TdTotalCountReport>120.5</TdTotalCountReport>
                            <TdTotalCountReport>3.3</TdTotalCountReport>
                            <TdTotalCountReport>20.9</TdTotalCountReport>
                            <TdTotalCountReport>9.9</TdTotalCountReport>
                        </Tr>
                        <Tr>
                            <TdTotalReport colSpan="10">Суммарный отбор</TdTotalReport>
                            <TdTotalCountReport> </TdTotalCountReport>
                            <TdTotalCountReport> </TdTotalCountReport>
                            <TdTotalCountReport> </TdTotalCountReport>
                            <TdTotalCountReport> </TdTotalCountReport>
                            <TdTotalCountReport> </TdTotalCountReport>
                            <TdTotalCountReport> </TdTotalCountReport>
                            <TdTotalCountReport> </TdTotalCountReport>
                            <TdTotalCountReport>19794</TdTotalCountReport>
                            <TdTotalCountReport>522</TdTotalCountReport>
                            <TdTotalCountReport> </TdTotalCountReport>
                            <TdTotalCountReport> </TdTotalCountReport>
                            <TdTotalCountReport> </TdTotalCountReport>
                            <TdTotalCountReport> </TdTotalCountReport>
                            <TdTotalCountReport> </TdTotalCountReport>
                            <TdTotalCountReport> </TdTotalCountReport>
                            <TdTotalCountReport> </TdTotalCountReport>
                            <TdTotalCountReport> </TdTotalCountReport>
                            <TdTotalCountReport> </TdTotalCountReport>
                            <TdTotalCountReport>19323</TdTotalCountReport>
                            <TdTotalCountReport>533</TdTotalCountReport>
                            <TdTotalCountReport> </TdTotalCountReport>
                            <TdTotalCountReport> </TdTotalCountReport>
                        </Tr>
                    </tfoot>
                </TableReportBody>
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
            </div>
        </ContainerReportBody>
    )
}
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
export default ReportBody