import React, {useContext} from 'react'
import {AppContext} from '../context'
import { Table, Tr, Th, TdFirst, Td, TdTotal, TdTotalCount } from '../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import ConsumesElectricityModal from './ConsumesElectricityModal'
import CountUp from 'react-countup';
import {getRoleNameFromJWT} from "../utills/UsefullFunctions";

const ConsumedElectricity = () => {
    const {showConsumedElectricity, setShowConsumedElectricity, getElectric, nameAllMining, totalElectric} = useContext(AppContext)

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
                    {getRoleNameFromJWT() !== 'EMPLOYEE' && getRoleNameFromJWT() !== 'OPERATOR' && getRoleNameFromJWT() !== 'METROLOGIST' && getRoleNameFromJWT() !== 'GEOLOGIST' ? <FontAwesomeIcon style={{
                        position:'absolute',
                        right:'5px',
                        top:'3px',
                        cursor:'pointer'}}
                        icon={faEdit}
                        onClick={openModal}/> : ""}
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
            {getElectric.map((mining, index) =>
                <Tr key={index}>
                    <TdFirst>{nameAllMining[index] ? nameAllMining[index].name : ""}</TdFirst>
                    <Td> <CountUp end={mining !== null ? mining.hourly : ""} duration={4} /> </Td>
                    <Td> <CountUp end={mining !== null ? mining.hourly*24 : ""} duration={4}/> </Td>
                    <Td> <CountUp end={mining !== null ? mining.hourly*24*30 : ""} duration={3}/> </Td>
                    <Td> <CountUp end={mining !== null ? mining.hourly*24*365 : ""} duration={5}/> </Td>
                </Tr>
            )}
            </tbody>
            <tfoot>
            <Tr>
                <TdTotal>Итого</TdTotal>
                <TdTotalCount> <CountUp end={totalElectric} duration={5}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={totalElectric*24} duration={5}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={totalElectric*24*30} duration={5}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={totalElectric*24*30*365} duration={5}/> </TdTotalCount>
            </Tr>
            </tfoot>
        </TableConsumedElectricity>
        <ConsumesElectricityModal showConsumedElectricity={showConsumedElectricity} setShowConsumedElectricity={setShowConsumedElectricity}
                                  getElectric={getElectric} nameAllMining={nameAllMining}/>
        </>
    )
}

const TableConsumedElectricity = styled(Table)`
    width:455px;
    height: 309px;
    margin-bottom: 5px;
`
export default ConsumedElectricity
