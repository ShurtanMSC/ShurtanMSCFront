import React, {useContext} from 'react';
import {AppContext} from "../../context";
import { Table, Tr, Th, Td, TdFirst } from '../../styled'
import styled from 'styled-components'

const Mining = () => {
    const {totalAllUppg, totalAllUppgCon, totalAllUppgWater} = useContext(AppContext);

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
                    <TdFirst>Часовая</TdFirst>
                    <Td>{Math.round(totalAllUppg*10/1000)/10}</Td>
                    <Td>{Math.round(totalAllUppgCon*10/1000)/10}</Td>
                    <Td>{Math.round(totalAllUppgWater*10/1000)/10}</Td>
                </Tr>
                <Tr>
                    <TdFirst>За тек. сутки</TdFirst>
                    <Td>{Math.round(totalAllUppg*10/1000)/10*24}</Td>
                    <Td>{Math.round(totalAllUppgCon*10/1000)/10*24}</Td>
                    <Td>{Math.round(totalAllUppgWater*10/1000)/10}</Td>
                </Tr>
                <Tr>
                    <TdFirst>За тек. месяц</TdFirst>
                    <Td>{Math.round(totalAllUppg*10/1000)/10*24*30}</Td>
                    <Td>{Math.round(totalAllUppgCon*10/1000)/10*24*30}</Td>
                    <Td>{Math.round(totalAllUppgWater*10/1000)/10}</Td>
                </Tr>
                <Tr>
                    <TdFirst>С начала эксплуатации</TdFirst>
                    <Td>{Math.round(totalAllUppg*10/1000)/10*24*365}</Td>
                    <Td>{Math.round(totalAllUppgCon*10/1000)/10*24*365}</Td>
                    <Td>{Math.round(totalAllUppgWater*10/1000)/10}</Td>
                </Tr>
            </tbody>
        </TableMining>
    )
}
const TableMining = styled(Table)`
    width:410px;
`
export default Mining
