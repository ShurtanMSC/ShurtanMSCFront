import React from 'react'
import { Table, Tr, Th, TdFirst, Td } from '../../styled'

const Grafic = () => {
    return (
        <div>
            <h2>Месторожедние Шуртан</h2>
            <Table>
                <Tr>
                    <Th>Параметры пласта</Th>
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
            </Table>
        </div>
    )
}

export default Grafic
