import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { BtnDiv, BtnSerach, Select, Table, Tr, Th, TdFirst, Td } from '../../styled'

const BtnSearch = () => {
    return (
        <div>
            <BtnDiv>
                <Select name="text" id="tecxt">
                    <option value="text">УППГ-1</option>
                    <option value="text">УППГ-2</option>    
                </Select>
                <BtnSerach> <FontAwesomeIcon icon={faSearch} /> Поиск скважины </BtnSerach>
                <BtnSerach> БД УППГ </BtnSerach>
            </BtnDiv>
            <Table>
                <Tr>
                    <Th>Наименование</Th>
                    <Th>2-х часовая</Th>
                    <Th>За тек. сутки</Th>
                    <Th>За тек. месяц</Th>
                    <Th>С нач. года</Th>
                </Tr>
                <Tr>
                    <TdFirst>Проектная производительность <br/> м3/год</TdFirst>
                    <Td>15</Td>
                    <Td>20</Td>
                    <Td>40</Td>
                    <Td>12</Td>
                </Tr>
                <Tr>
                    <TdFirst>Фактическая производителность <br/> м3/год</TdFirst>
                    <Td>15</Td>
                    <Td>20</Td>
                    <Td>40</Td>
                    <Td>12</Td>
                </Tr>
                <Tr>
                    <TdFirst>По газу, тыс м3</TdFirst>
                    <Td>15</Td>
                    <Td>20</Td>
                    <Td>40</Td>
                    <Td>12</Td>
                </Tr>
                <Tr>
                    <TdFirst>По конденсату, тыс.т</TdFirst>
                    <Td>15</Td>
                    <Td>20</Td>
                    <Td>40</Td>
                    <Td>12</Td>
                </Tr>
                <Tr>
                    <TdFirst>По воде, тыс. т</TdFirst>
                    <Td colSpan="4">15</Td>
                </Tr>
                <Tr>
                    <TdFirst>Входное  давление, кгс\см2</TdFirst>
                    <Td colSpan="4">15</Td>
                </Tr>
                <Tr>
                    <TdFirst>Выходное  давление, кгс\см2</TdFirst>
                    <Td colSpan="4">15</Td>
                </Tr>
                <Tr>
                    <TdFirst>Входная температура, *С</TdFirst>
                    <Td colSpan="4">15</Td>
                </Tr>
                <Tr>
                    <TdFirst>Выходная температура, *С</TdFirst>
                    <Td colSpan="4">15</Td>
                </Tr>
            </Table>
        </div>
        
    )
}

export default BtnSearch
