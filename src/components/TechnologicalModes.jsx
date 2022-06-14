import React, {useState, useContext} from 'react';
import {AppContext} from '../context'
import { Table, Tr, Th, TdFirst, Td, TdTotal,TdTotalCount } from '../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import TechnologicalModesModal from './TechnologicalModesModal'
import CountUp from 'react-countup';
import {getRoleNameFromJWT} from "../utills/UsefullFunctions";

const TechnologicalModes = () => {
    const {nameAllMining} = useContext(AppContext);
    const [showTechnologicalModesModal, setShowTechnologicalModesModal] = useState(false);

    const openModal = () => {
        setShowTechnologicalModesModal(prev => !prev)
    };

    return (
        <>
        <TableTechnologicalModel>
            <thead>
            <Tr>
                <Th rowSpan="3" style={{position:'sticky', top:'0'}}>Месторождение</Th>
                <Th colSpan="4" style={{position:'sticky', top:'0'}} >Технологические режимы эксплуатации месторождений
                    {getRoleNameFromJWT() !== 'EMPLOYEE' &&
                     getRoleNameFromJWT() !== 'OPERATOR' &&
                     getRoleNameFromJWT() !== 'ENERGETIC' &&
                     getRoleNameFromJWT() !== 'METROLOGIST' &&
                     getRoleNameFromJWT() !== 'GEOLOGIST' ? <FontAwesomeIcon style={{
                        position:'absolute',
                        right:'5px',
                        top:'3px',
                        cursor:'pointer'}}
                        icon={faEdit}
                        onClick={openModal} /> : ""}
                </Th>
            </Tr>
            <Tr>
                <Th colSpan="4" style={{position:'sticky', top:'38px'}}>Часовой режим, кгс/см<sup>2</sup></Th>
            </Tr>
            <Tr>
                <Th style={{position:'sticky', top:'60px'}}>Текущее пластовое давление</Th>
                <Th style={{position:'sticky', top:'60px'}}>Среднее устьевое давление на скважине</Th>
                <Th style={{position:'sticky', top:'60px'}}>Давление на БВН</Th>
                <Th style={{position:'sticky', top:'60px'}}>Давление на входе в ГТС/ДКС</Th>
            </Tr>
            </thead>
            <tbody>
            {nameAllMining.map((mining, key) =>
                <Tr key={key}>
                    <TdFirst>{mining.name}</TdFirst>
                    <Td> <CountUp end={mining.id === 1 ? 15 : ""} duration={5}/> </Td>
                    <Td> <CountUp end={mining.id === 1 ? 20 : ""} duration={5}/> </Td>
                    <Td> <CountUp end={mining.id === 1 ? 40 : ""} duration={5}/> </Td>
                    <Td> <CountUp end={mining.id === 1 ? 12 : ""} duration={5}/> </Td>
                </Tr>
            )}
            </tbody>
            <tfoot>
            <Tr>
                <TdTotal>Итого</TdTotal>
                <TdTotalCount> <CountUp end={15} duration={5}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={20} duration={5}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={40} duration={5}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={12} duration={5}/> </TdTotalCount>    
            </Tr>
            </tfoot>
        </TableTechnologicalModel>
        <TechnologicalModesModal showTechnologicalModesModal={showTechnologicalModesModal}
                                 setShowTechnologicalModesModal={setShowTechnologicalModesModal} nameAllMining={nameAllMining}/>
        </>
    )
}

const TableTechnologicalModel = styled(Table)`
    width:455px;
    height:346px;
    margin-bottom: 5px;
`
export default TechnologicalModes
