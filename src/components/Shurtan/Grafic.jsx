import React, { useState } from 'react'
import { Table, Tr, Th, TdFirst, Td, H2 } from '../../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Grafic = () => {

    const [openShurtan, setOpenShurtan] = useState(false);

    return (
        <div>
            <H2>Месторожедние Шуртан</H2>
            <TableGrafic openShurtan={openShurtan}>
                <Tr>
                    <Th style={{position:'relative'}}>Параметры пласта 
                    <FontAwesomeIconRotate openShurtan={openShurtan} onClick={() => setOpenShurtan(!openShurtan)} style={{position:'absolute', right:'10px', top:'4px', cursor:'pointer'}} icon={faChevronDown}/> </Th>
                    <Th>Значение</Th>
                </Tr>
                <Tr>
                    <TdFirst>Коэффицент фильтрационного сопротивления - a</TdFirst>
                    <Td>19200</Td>
                </Tr>
                <Tr>
                    <TdFirst>Коэффицент фильтрационного сопротивления - b</TdFirst>
                    <Td>19200</Td>
                </Tr>
                <Tr>
                    <TdFirst>Начальное пластовое давление Р.н.пл [кгс/см²]</TdFirst>
                    <Td>19200</Td>
                </Tr>
                <Tr>
                    <TdFirst>Начальная пластовая температура Т.пл. [°C]</TdFirst>
                    <Td>19200</Td>
                </Tr>
                <Tr>
                    <TdFirst>Критическое давление газа Р.кр [кгс/см²]</TdFirst>
                    <Td>19200</Td>
                </Tr>
                <Tr>
                    <TdFirst>Критическая температура газа Т.кр [°C]</TdFirst>
                    <Td>19200</Td>
                </Tr>
                <Tr>
                    <TdFirst>Начальные запасы газа Vo [млн.м³]</TdFirst>
                    <Td>19200</Td>
                </Tr>
                <Tr>
                    <TdFirst>Сопротивление жидких компонентов - S</TdFirst>
                    <Td>19200</Td>
                </Tr>
                <Tr>
                    <TdFirst>Сопротивление НКТ - θ</TdFirst>
                    <Td>19200</Td>
                </Tr>
                <Tr>
                    <TdFirst>Коэффициент сверхсжимаемости газа в начале разработки Zн</TdFirst>
                    <Td>19200</Td>
                </Tr>
            </TableGrafic>
        </div>
    )
}
const TableGrafic = styled(Table)`
    width:410px;
    height: ${({openShurtan}) => (openShurtan ? "100%" : "25px")};
`
const FontAwesomeIconRotate = styled(FontAwesomeIcon)`
    transform:${({openShurtan}) => (openShurtan ? "rotate(180deg)" : "")}
`
export default Grafic
