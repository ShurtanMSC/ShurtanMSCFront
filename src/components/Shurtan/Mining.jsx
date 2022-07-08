import React, {useContext} from 'react';
import {AppContext} from "../../context";
import { Table, Tr, Th, Td, TdFirst } from '../../styled'
import styled from 'styled-components'

const Mining = () => {
    const {totalAllUppg, totalAllUppgCon, totalAllUppgWater, uppgDatabase} = useContext(AppContext);

    return (
        <TableMining>
            <thead>
                <Tr>
                    <Th>Добыча</Th>
                    <Th>Газ, тыс.м<sup>3</sup></Th>
                    <Th>Конденсат, тыс.т</Th>
                    <Th>Вода, тыс.т</Th>
                </Tr>
            </thead>
            <tbody>
                <Tr>
                    <TdFirst>Часовая</TdFirst>
                    <Td>{ Math.round( ( (uppgDatabase&&uppgDatabase[0] ? uppgDatabase[0].rasxod : 0) + (uppgDatabase&&uppgDatabase[1] ? uppgDatabase[1].rasxod : 0) )*100)/100}</Td>
                    <Td>{Math.round(totalAllUppgCon*10)/10/1000}</Td>
                    <Td>{Math.round(totalAllUppgWater*10)/10/1000}</Td>
                </Tr>
                <Tr>
                    <TdFirst>За тек. сутки</TdFirst>
                    <Td>{ Math.round( ( (uppgDatabase&&uppgDatabase[0] ? uppgDatabase[0].nakoplenniy_obyom_s_nachalo_sutok : 0) + (uppgDatabase&&uppgDatabase[1] ? uppgDatabase[1].nakoplenniy_obyom_s_nachalo_sutok : 0) )*100)/100}</Td>
                    <Td>{Math.round(totalAllUppgCon*10)/10*24/1000}</Td>
                    <Td>{Math.round(totalAllUppgWater*10)/10/1000}</Td>
                </Tr>
                <Tr>
                    <TdFirst>За тек. месяц</TdFirst>
                    <Td>{ Math.round( ( (uppgDatabase&&uppgDatabase[0] ? uppgDatabase[0].nakoplenniy_obyom_s_nachalo_mesyach : 0) + (uppgDatabase&&uppgDatabase[1] ? uppgDatabase[1].nakoplenniy_obyom_s_nachalo_mesyach : 0))*100 )/100 }</Td>
                    <Td>{Math.round(totalAllUppgCon*10)/10*24*30/1000}</Td>
                    <Td>{Math.round(totalAllUppgWater*10)/10/1000}</Td>
                </Tr>
                <Tr>
                    <TdFirst>С начала года</TdFirst>
                    <Td>{ Math.round( ( ( uppgDatabase&&uppgDatabase[0] ? uppgDatabase[0].nakoplenniy_obyom : 0 ) + ( uppgDatabase&&uppgDatabase[1] ?
                                      ( ( ( uppgDatabase[1].nakoplenniy_obyom_za_pered_mesyach*(new Date().getMonth()))+uppgDatabase[1].nakoplenniy_obyom_s_nachalo_mesyach ) ) 
                                      : 0 ) )*100 )/100 }</Td>
                    <Td>{Math.round(totalAllUppgCon*10)/10*24*365/1000}</Td>
                    <Td>{Math.round(totalAllUppgWater*10)/10/1000}</Td>
                </Tr>
            </tbody>
        </TableMining>
    )
}
const TableMining = styled(Table)`
    width:410px;
`
export default Mining
