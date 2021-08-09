import React from 'react'
import { Table, TableScroll, Tr, Th, TdFirst, Td, TdTotal, TdTotalCount } from '../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const NumberOfStaff = () => {
    return (
        <TableNumberOfStaff>
            <Tr>
                <Th rowSpan="2" style={{position:'sticky', top:'0'}}>Месторождение</Th>
                <Th colSpan="4" style={{position:'relative', position:'sticky', top:'0', width:'100%'}}>Количество персонала <FontAwesomeIcon style={{position:'absolute', right:'5px', top:'3px', cursor:'pointer'}} icon={faEdit}/> </Th>
            </Tr>
            <Tr>
                <Th style={{position:'sticky', top:'23px'}}>В работе</Th>
                <Th style={{position:'sticky', top:'23px'}}>В отпуске</Th>
                <Th style={{position:'sticky', top:'23px'}}>На больничном</Th>
                <Th style={{position:'sticky', top:'23px'}}>Б/С</Th>
            </Tr>
            <Tr>
                <TdFirst>Шуртан</TdFirst>
                <Td>15</Td>
                <Td>20</Td>
                <Td>40</Td>
                <Td>1000</Td>    
            </Tr>
            <Tr>
                <TdFirst>Южная Тандырча</TdFirst>
                <Td>15</Td>
                <Td>20</Td>
                <Td>40</Td>
                <Td>12</Td>    
            </Tr>
            <Tr>
                <TdFirst>Бузахур</TdFirst>
                <Td>15</Td>
                <Td>20</Td>
                <Td>40</Td>
                <Td>12</Td>    
            </Tr>
            <Tr>
                <TdFirst>Восточный Бузахур</TdFirst>
                <Td>15</Td>
                <Td>20</Td>
                <Td>40</Td>
                <Td>12</Td>    
            </Tr>
            <Tr>
                <TdFirst>Тарнасой</TdFirst>
                <Td>15</Td>
                <Td>20</Td>
                <Td>40</Td>
                <Td>12</Td>    
            </Tr>
            <Tr>
                <TdFirst>Ойдин</TdFirst>
                <Td>15</Td>
                <Td>20</Td>
                <Td>40</Td>
                <Td>12</Td>    
            </Tr>
            <Tr>
                <TdFirst>Номозбой</TdFirst>
                <Td>15</Td>
                <Td>20</Td>
                <Td>40</Td>
                <Td>12</Td>    
            </Tr>
            <Tr>
                <TdFirst>Ёрмок</TdFirst>
                <Td>15</Td>
                <Td>20</Td>
                <Td>40</Td>
                <Td>12</Td>    
            </Tr>
            <Tr>
                <TdFirst>Туртсари</TdFirst>
                <Td>15</Td>
                <Td>20</Td>
                <Td>40</Td>
                <Td>12</Td>    
            </Tr>
            <Tr>
                <TdFirst>Северный Шуртан</TdFirst>
                <Td>15</Td>
                <Td>20</Td>
                <Td>40</Td>
                <Td>12</Td>    
            </Tr>
            <Tr>
                <TdFirst>Гармистон</TdFirst>
                <Td>15</Td>
                <Td>20</Td>
                <Td>40</Td>
                <Td>12</Td>    
            </Tr>
            <Tr>
                <TdFirst>Совлигор</TdFirst>
                <Td>15</Td>
                <Td>20</Td>
                <Td>40</Td>
                <Td>12</Td>    
            </Tr>
            <Tr>
                <TdFirst>Яккасарай</TdFirst>
                <Td>15</Td>
                <Td>20</Td>
                <Td>40</Td>
                <Td>12</Td>    
            </Tr>
            <Tr>
                <TdFirst>Мезон</TdFirst>
                <Td>15</Td>
                <Td>20</Td>
                <Td>40</Td>
                <Td>12</Td>    
            </Tr>
            <Tr>
                <TdFirst>Феруза</TdFirst>
                <Td>15</Td>
                <Td>20</Td>
                <Td>40</Td>
                <Td>12</Td>    
            </Tr>
            <Tr>
                <TdFirst>Тошли</TdFirst>
                <Td>15</Td>
                <Td>20</Td>
                <Td>40</Td>
                <Td>12</Td>    
            </Tr>
            <Tr>
                <TdFirst>Зафар</TdFirst>
                <Td>15</Td>
                <Td>20</Td>
                <Td>40</Td>
                <Td>12</Td>    
            </Tr>
            <Tr>
                <TdFirst>Коратепа</TdFirst>
                <Td>15</Td>
                <Td>20</Td>
                <Td>40</Td>
                <Td>12</Td>    
            </Tr>
            <Tr>
                <TdFirst>Ширкент</TdFirst>
                <Td>15</Td>
                <Td>20</Td>
                <Td>40</Td>
                <Td>12</Td>    
            </Tr>
            <Tr>
                <TdFirst>Рубойи</TdFirst>
                <Td>15</Td>
                <Td>20</Td>
                <Td>40</Td>
                <Td>12</Td>    
            </Tr>
            <Tr>
                <TdFirst>Янги Коратепа</TdFirst>
                <Td>15</Td>
                <Td>20</Td>
                <Td>40</Td>
                <Td>12</Td>    
            </Tr>
            <Tr>
                <TdTotal>Итого</TdTotal>
                <TdTotalCount>15</TdTotalCount>
                <TdTotalCount>20</TdTotalCount>
                <TdTotalCount>40</TdTotalCount>
                <TdTotalCount>12</TdTotalCount>    
            </Tr>
        </TableNumberOfStaff>
    )
}

const TableNumberOfStaff = styled(Table)`
    width:455px;
    height:271px;
`
export default NumberOfStaff
