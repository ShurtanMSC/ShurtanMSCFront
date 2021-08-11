import React from 'react'
import { Table, Tr, Th, Td, TdFirst } from '../../styled'
import styled from 'styled-components'

const Mining = () => {
    return (
        <TableMining>
            <thead>
                <Tr>
                    <Th>Добыча</Th>
                    <Th>Газ, тыс.м3</Th>
                    <Th>Конденсат, тыс.т</Th>
                    <Th>Вода, тыс.т</Th>
                </Tr>
            </thead>
            <tbody>
                <Tr>
                    <TdFirst>2-х часовая</TdFirst>
                    <Td>15</Td>
                    <Td>20</Td>
                    <Td>40</Td>
                </Tr>
                <Tr>
                    <TdFirst>За тек. сутки</TdFirst>
                    <Td>15</Td>
                    <Td>20</Td>
                    <Td>40</Td>
                </Tr>
                <Tr>
                    <TdFirst>За тек. месяц</TdFirst>
                    <Td>15</Td>
                    <Td>20</Td>
                    <Td>40</Td>
                </Tr>
                <Tr>
                    <TdFirst>С начала эксплуатации</TdFirst>
                    <Td>15</Td>
                    <Td>20</Td>
                    <Td>40</Td>
                </Tr>
            </tbody>
        </TableMining>
    )
}
const TableMining = styled(Table)`
    width:410px;
`
export default Mining
