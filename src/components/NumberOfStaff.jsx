import React, {useState, useContext} from 'react';
import {AppContext} from '../context'
import { Table, Tr, Th, TdFirst, Td, TdTotal, TdTotalCount } from '../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import NumberOfStaffModal from './NumberOfStaffModal'
import CountUp from 'react-countup'
import {getRoleNameFromJWT} from "../utills/UsefullFunctions";

const NumberOfStaff = () => {
    const {nameAllMining, personal, totalAtWork, totalOnVacation, totalOnSick, totalWithoutContent,} = useContext(AppContext);
    const [showNumberOfStaffModal, setShowNumberOfStaffModal] = useState(false);

    const openModal = () => {
        setShowNumberOfStaffModal(prev => !prev)
    };
    console.log(nameAllMining);

    return (
        <>
        <TableNumberOfStaff>
            <thead>
            <Tr>
                <Th rowSpan="2" style={{position:'sticky', top:'0'}}>Месторождение</Th>
                <Th colSpan="4" style={{position:'sticky', top:'0', width:'100%'}}>Количество персонала
                    {getRoleNameFromJWT() !== 'OPERATOR' && getRoleNameFromJWT() !== 'ENERGETIC' && getRoleNameFromJWT() !== 'METROLOGIST' && getRoleNameFromJWT() !== 'GEOLOGIST' ? <FontAwesomeIcon style={{
                        position: 'absolute',
                        right: '5px',
                        top: '3px',
                        cursor: 'pointer'
                    }}
                                      icon={faEdit}
                                      onClick={openModal}/> : "" }
                </Th>
            </Tr>
            <Tr>
                <Th style={{position:'sticky', top:'23px'}}>В работе</Th>
                <Th style={{position:'sticky', top:'23px'}}>В отпуске</Th>
                <Th style={{position:'sticky', top:'23px'}}>На больничном</Th>
                <Th style={{position:'sticky', top:'23px'}}>Б/С</Th>
            </Tr>
            </thead>
            <tbody>
            {personal && personal.map((workers, index) =>
                <Tr key={index}>
                    <TdFirst>{workers.objectDto.name}</TdFirst>
                    <Td> <CountUp end={workers.objectActionDto !== null ? workers.objectActionDto.atWork : ""} duration={5}/> </Td>
                    <Td> <CountUp end={workers.objectActionDto !== null ? workers.objectActionDto.onVacation : ""} duration={5}/> </Td>
                    <Td> <CountUp end={workers.objectActionDto !== null ? workers.objectActionDto.onSickLeave : ""} duration={5}/> </Td>
                    <Td> <CountUp end={workers.objectActionDto !== null ? workers.objectActionDto.withoutContent : ""} duration={5}/> </Td>
                </Tr>
            )}
            </tbody>
            <tfoot>
            <Tr>
                <TdTotal>Итого</TdTotal>
                <TdTotalCount> <CountUp end={totalAtWork} duration={5}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={totalOnVacation} duration={5}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={totalOnSick} duration={5}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={totalWithoutContent} duration={5}/> </TdTotalCount>
            </Tr>
            </tfoot>
        </TableNumberOfStaff>
        <NumberOfStaffModal showNumberOfStaffModal={showNumberOfStaffModal}
                            setShowNumberOfStaffModal={setShowNumberOfStaffModal}
                            nameAllMining={nameAllMining}
                            personal={personal}/>
        </>
    )
}

const TableNumberOfStaff = styled(Table)`
    width:455px;
    height:290px;
`
export default NumberOfStaff
