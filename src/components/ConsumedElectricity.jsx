import React, {useContext} from 'react'
import {AppContext} from '../context'
import { Table, Tr, Th, TdFirst, Td, TdTotal, TdTotalCount } from '../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import ConsumesElectricityModal from './ConsumesElectricityModal'
import CountUp from 'react-countup'

const ConsumedElectricity = () => {
    const {nameAllMining, showConsumedElectricity, setShowConsumedElectricity} = useContext(AppContext)

    const openModal = () => {
        setShowConsumedElectricity(prev => !prev)
    };

    return (
        <>
        <TableConsumedElectricity >
            <thead>
            <Tr>
                <Th rowSpan="2" style={{position:'sticky', top:'0'}}>Месторождение</Th>
                <Th colSpan="4" style={{position:'sticky', top:'0'}}>Потребляемая электроэнергия, кв/ч 
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
                <Th style={{position:'sticky', top:'22px'}}>Часовая</Th>
                <Th style={{position:'sticky', top:'22px'}}>С начала суток</Th>
                <Th style={{position:'sticky', top:'22px'}}>С начала месяца</Th>
                <Th style={{position:'sticky', top:'22px'}}>С начала года</Th>
            </Tr>
            </thead>
            <tbody>
            {nameAllMining.map((mining, key) =>
                <Tr key={key}>
                    <TdFirst>{mining.name}</TdFirst>
                    <Td> <CountUp end={15} duration={4} /> </Td>
                    <Td> <CountUp end={20} duration={4}/> </Td>
                    <Td> <CountUp end={40} duration={3}/> </Td>
                    <Td> <CountUp end={500} duration={5}/> </Td>
                </Tr>
            )}
            </tbody>
            <tfoot>
            <Tr>
                <TdTotal>Итого</TdTotal>
                <TdTotalCount> <CountUp end={15} duration={5}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={20} duration={5}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={40} duration={5}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={23} duration={5}/> </TdTotalCount>    
            </Tr>
            </tfoot>
        </TableConsumedElectricity>
        <ConsumesElectricityModal showConsumedElectricity={showConsumedElectricity} setShowConsumedElectricity={setShowConsumedElectricity}
                                  nameAllMining={nameAllMining}/>
        </>
    )
}

const TableConsumedElectricity = styled(Table)`
    width:455px;
    height: 309px;
    margin-bottom: 5px;
`
export default ConsumedElectricity
