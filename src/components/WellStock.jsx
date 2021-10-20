import React, {useState, useContext} from 'react';
import {AppContext} from "../context";
import { Table, Tr, Th, TdFirst, Td, TdTotal, TdTotalCount } from '../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import WellStockModal from './WellStockModal'
import CountUp from 'react-countup'

const WellStock = () => {
    const {statStatus, totalInWork, totalInIdle, totalInRepair, totalInConservation, totalInLiquidation, nameAllMining} = useContext(AppContext);
    const [showWellStockModal, setShowWellStockModal] = useState(false);

    const openModal = () => {
        setShowWellStockModal(prev => !prev);
    }

    return (
        <>
        <TableWellStock>
            <thead>
            <Tr>
                <Th rowSpan="2" style={{position:'sticky', top:'0'}}>Наимено-<br/>вание</Th>
                <Th colSpan="5" style={{position:'sticky', top:'0'}}> Фонд скважин 
                <FontAwesomeIcon style={{
                                    position:'absolute', 
                                    right:'5px', 
                                    top:'3px', 
                                    cursor:'pointer'}} 
                                    icon={faEdit} 
                                    onClick={openModal}/> 
                </Th>
            </Tr>
            <Tr>
                <Th style={{position:'sticky', top:'23px'}}>В работе</Th>
                <Th style={{position:'sticky', top:'23px'}}>В прос-<br/>тое</Th>
                <Th style={{position:'sticky', top:'23px'}}>В ремон-<br/>те</Th>
                <Th style={{position:'sticky', top:'23px'}}>В консер-<br/>вации</Th>
                <Th style={{position:'sticky', top:'23px'}}>В ликви-<br/>дации</Th>
            </Tr>
            </thead>
            <tbody>
            {nameAllMining.map((mining,index) =>
                <Tr key={index}>
                    <TdFirst>{mining.name}</TdFirst>
                    <Td> <CountUp end={statStatus ? statStatus[index].IN_WORK : ''} duration={5}/> </Td>
                    <Td> <CountUp end={statStatus ? statStatus[index].IN_IDLE : ''} duration={5}/> </Td>
                    <Td> <CountUp end={statStatus ? statStatus[index].IN_REPAIR : ''} duration={5}/> </Td>
                    <Td> <CountUp end={statStatus ? statStatus[index].IN_CONSERVATION : ''} duration={5}/> </Td>
                    <Td> <CountUp end={statStatus ? statStatus[index].IN_LIQUIDATION : ''} duration={5}/> </Td>
                </Tr>
            )}
            </tbody>
            <tfoot>
            <Tr>
                <TdTotal>Итого</TdTotal>
                <TdTotalCount> <CountUp end={totalInWork} duration={5}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={totalInIdle} duration={5}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={totalInRepair} duration={5}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={totalInConservation} duration={5}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={totalInLiquidation} duration={5}/> </TdTotalCount>
            </Tr>
            </tfoot>
        </TableWellStock>
        <WellStockModal showWellStockModal={showWellStockModal} setShowWellStockModal={setShowWellStockModal} statStatus={statStatus} nameAllMining={nameAllMining}/>
        </>
    )
}
const TableWellStock = styled(Table)`
    width:380px;
    height:400px;
`
export default WellStock
