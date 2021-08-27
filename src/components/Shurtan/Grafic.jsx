import React, { useState } from 'react'
import { Table, Tr, Th, TdFirst, Td, H2 } from '../../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Grafic = () => {

    const [openShurtan, setOpenShurtan] = useState(false);
    const [turnIcon, setTurnIcon] = useState(false);

    const openMore = () => {
        setOpenShurtan(!openShurtan);
        setTurnIcon(!turnIcon);
    }

    return (
        <div>
            <H2>Месторожедние Шуртан</H2>
            <TableGrafic openShurtan={openShurtan}>
                <thead>
                <Tr>
                    <Th style={{position:'relative', padding:'8px 0'}}>Параметры пласта 
                    <FontAwesomeIconRotate
                        onClick={openMore}
                        style={{
                            position:'absolute', 
                            right:'10px', 
                            top:'9px', 
                            cursor:'pointer'}}
                            rotation={turnIcon ? 180 : 0}
                            icon={faChevronDown}/> 
                    </Th>
                    <Th>Значение</Th>
                </Tr>
                </thead>
                <tbody>
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
                </tbody>
            </TableGrafic>
        </div>
    )
}
const TableGrafic = styled(Table)`
    width:410px;
    transition:0.2s;
    height: ${({openShurtan}) => (openShurtan ? "290px" : "35px")};
`
const FontAwesomeIconRotate = styled(FontAwesomeIcon)`
    transition: 0.5s;
`
export default Grafic
