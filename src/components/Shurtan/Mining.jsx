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
                    <TdFirst>2-х часовая</TdFirst>
                    <Td>{totalAllUppg*2/10000}</Td>
                    <Td>{totalAllUppgCon*2}</Td>
                    <Td>{totalAllUppgWater}</Td>
                </Tr>
                <Tr>
                    <TdFirst>За тек. сутки</TdFirst>
                    <Td>{totalAllUppg*24/10000}</Td>
                    <Td>{totalAllUppgCon*24}</Td>
                    <Td>{totalAllUppgWater}</Td>
                </Tr>
                <Tr>
                    <TdFirst>За тек. месяц</TdFirst>
                    <Td>{totalAllUppg*24*30/10000}</Td>
                    <Td>{totalAllUppgCon*24*30}</Td>
                    <Td>{totalAllUppgWater}</Td>
                </Tr>
                <Tr>
                    <TdFirst>С начала эксплуатации</TdFirst>
                    <Td>{totalAllUppg*24*365/10000}</Td>
                    <Td>{totalAllUppgCon*24*365}</Td>
                    <Td>{totalAllUppgWater}</Td>
                </Tr>
            </tbody>
        </TableMining>
    )
}
const TableMining = styled(Table)`
    width:410px;
`
export default Mining
