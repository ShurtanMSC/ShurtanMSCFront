import React from 'react'
import { Table, Tr, Th, TdFirst, Td, TdTotal, TdTotalCount } from '../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const AddGas = () => {
    return (
        <TableAddGas>
            <Tr>
                <Th rowSpan="2" style={{position:'sticky', top:'0'}}>Наименование</Th>
                <Th colSpan="3" style={{position:'sticky', top:'0'}}>Добыча газа, млн.м3 <FontAwesomeIcon style={{position:'absolute', right:'5px', top:'3px', cursor:'pointer'}} icon={faEdit} /> </Th>
            </Tr>
            <Tr>
                <Th style={{position:'sticky', top:'23px'}}>Часовая</Th>
                <Th style={{position:'sticky', top:'23px'}}>С начала суток</Th>
                <Th style={{position:'sticky', top:'23px'}}>За прошлые сутки </Th>
            </Tr>
            <Tr>
                <TdFirst>Шуртан</TdFirst>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>    
            </Tr>
            <Tr>
                <TdFirst>Южная Тандырча</TdFirst>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
            </Tr>
            <Tr>
                <TdFirst>Бузахур</TdFirst>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
            </Tr>
            <Tr>
                <TdFirst>Восточный Бузахур</TdFirst>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
            </Tr>
            <Tr>
                <TdFirst>Тарнасой</TdFirst>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
            </Tr>
            <Tr>
                <TdFirst>Ойдин</TdFirst>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
            </Tr>
            <Tr>
                <TdFirst>Номозбой</TdFirst>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
            </Tr>
            <Tr>
                <TdFirst>Ёрмок</TdFirst>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
            </Tr>
            <Tr>
                <TdFirst>Туртсари</TdFirst>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
            </Tr>
            <Tr>
                <TdFirst>Северный Шуртан</TdFirst>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
            </Tr>
            <Tr>
                <TdFirst>Гармистон</TdFirst>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
            </Tr>
            <Tr>
                <TdFirst>Совлигор</TdFirst>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
            </Tr>
            <Tr>
                <TdFirst>Яккасарай</TdFirst>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
            </Tr>
            <Tr>
                <TdFirst>Мезон</TdFirst>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
            </Tr>
            <Tr>
                <TdFirst>Феруза</TdFirst>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
            </Tr>
            <Tr>
                <TdFirst>Тошли</TdFirst>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
            </Tr>
            <Tr>
                <TdFirst>Зафар</TdFirst>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
            </Tr>
            <Tr>
                <TdFirst>Коратепа</TdFirst>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
            </Tr>
            <Tr>
                <TdFirst>Ширкент</TdFirst>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
            </Tr>
            <Tr>
                <TdFirst>Рубойи</TdFirst>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
            </Tr>
            <Tr>
                <TdFirst>Янги Коратепа</TdFirst>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
            </Tr>
            <Tr>
                <TdTotal>Итого</TdTotal>
                <TdTotalCount>500</TdTotalCount>
                <TdTotalCount>8000</TdTotalCount>
                <TdTotalCount>9000</TdTotalCount>
            </Tr>
        </TableAddGas>
    )
}
const TableAddGas = styled(Table)`
    width:380px;
    height:416px;
    margin-bottom: 5px;
`

export default AddGas
