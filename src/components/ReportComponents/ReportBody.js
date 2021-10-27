import React from 'react';
import {ContainerReportBody, Table, Tr, Td, Th} from '../../styled';
import styled from 'styled-components';

const ReportBody = ({componentRef}) => {
    return(
        <ContainerReportBody>
            <TableReportBody ref={componentRef}>
                <thead>
                    <Tr>
                        <Th rowSpan="3">№</Th>
                        <Th rowSpan="3">№ скв</Th>
                        <Th rowSpan="3">Горизонт</Th>
                        <Th rowSpan="3">D<sub>экс.кол</sub><br/>Mм</Th>
                        <Th colSpan="6">Глубина</Th>
                        <Th colSpan="11">Режим Эксплуатации скважин за последние 10 дней</Th>
                        <Th colSpan="11">Намечаемый режим эксплуатации скважин</Th>
                    </Tr>
                    <Tr>
                        <Th rowSpan="2">Искус, <br/> забоя</Th>
                        <Th colSpan="2">Интервала <br/> перфорации</Th>
                        <Th rowSpan="2"></Th>
                        <Th colSpan="2">Подвески <br/> НКТ</Th>
                        <Th rowSpan="2">Dшт, <br/> мм</Th>
                        <Th colSpan="6">Давление, кгс/см2</Th>
                        <Th colSpan="2">Дебит</Th>
                        <Th rowSpan="2">Устьевая <br/> скорость, <br/> мс</Th>
                        <Th rowSpan="2">Забойная <br/> скорость <br/> м/с </Th>
                        <Th rowSpan="2">Dшт, <br/> мм</Th>
                        <Th colSpan="6">Давление, кгс/см2</Th>
                        <Th colSpan="2">Дебит</Th>
                        <Th rowSpan="2">Устьевая <br/> скорость, <br/> мс</Th>
                        <Th rowSpan="2">Забойная <br/> скорость <br/> м/с </Th>
                    </Tr>
                    <Tr>
                        <Th>верх.</Th>
                        <Th>нижн.</Th>
                        <Th>d, мм</Th>
                        <Th>L, м</Th>
                        <Th>Ртр</Th>
                        <Th>Рзтр</Th>
                        <Th>Рстат</Th>
                        <Th>Рзаб</Th>
                        <Th>Рил</Th>
                        <Th>^Р</Th>
                        <Th>газа <br/>тыс.м3/сут</Th>
                        <Th>конден, <br/>т/сут.</Th>
                        <Th>Ртр</Th>
                        <Th>Рзтр</Th>
                        <Th>Рстат</Th>
                        <Th>Рзаб</Th>
                        <Th>Рил</Th>
                        <Th>^Р</Th>
                        <Th>газа <br/>тыс.м3/сут</Th>
                        <Th>конден, <br/>т/сут.</Th>
                    </Tr>
                    <Tr>
                        <Th>1</Th>
                        <Th>2</Th>
                        <Th>3</Th>
                        <Th>4</Th>
                        <Th>5</Th>
                        <Th>6</Th>
                        <Th>7</Th>
                        <Th>8</Th>
                        <Th>9</Th>
                        <Th>10</Th>
                        <Th>11</Th>
                        <Th>12</Th>
                        <Th>13</Th>
                        <Th>14</Th>
                        <Th>15</Th>
                        <Th>16</Th>
                        <Th>17</Th>
                        <Th>18</Th>
                        <Th>19</Th>
                        <Th>20</Th>
                        <Th>21</Th>
                        <Th>22</Th>
                        <Th>23</Th>
                        <Th>24</Th>
                        <Th>25</Th>
                        <Th>26</Th>
                        <Th>27</Th>
                        <Th>28</Th>
                        <Th>29</Th>
                        <Th>30</Th>
                        <Th>31</Th>
                        <Th>21</Th>
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
                </tbody>
            </TableReportBody>
        </ContainerReportBody>
    )
}
const TableReportBody = styled(Table)`
  width:auto;
`
const TdReportBody = styled(Td)`
  border: 1px solid #F4B790;
  width: 2%;
`
export default ReportBody