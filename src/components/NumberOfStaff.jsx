import React, {useState, useContext} from 'react';
import {AppContext} from '../context'
import { Table, Tr, Th, TdFirst, Td, TdTotal, TdTotalCount } from '../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import NumberOfStaffModal from './NumberOfStaffModal'
import CountUp from 'react-countup'

const NumberOfStaff = () => {
    const {nameAllMining} = useContext(AppContext);
    const [showNumberOfStaffModal, setShowNumberOfStaffModal] = useState(false);

    const openModal = () => {
        setShowNumberOfStaffModal(prev => !prev)
    };

    return (
        <>
        <TableNumberOfStaff>
            <thead>
            <Tr>
                <Th rowSpan="2" style={{position:'sticky', top:'0'}}>Месторождение</Th>
                <Th colSpan="4" style={{position:'sticky', top:'0', width:'100%'}}>Количество персонала 
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
                <Th style={{position:'sticky', top:'23px'}}>В отпуске</Th>
                <Th style={{position:'sticky', top:'23px'}}>На больничном</Th>
                <Th style={{position:'sticky', top:'23px'}}>Б/С</Th>
            </Tr>
            </thead>
            <tbody>
            {nameAllMining.map((mining, key) =>
                <Tr key={key}>
                    <TdFirst>{mining.name}</TdFirst>
                    <Td> <CountUp end={15} duration={5}/> </Td>
                    <Td> <CountUp end={20} duration={5}/> </Td>
                    <Td> <CountUp end={40} duration={5}/> </Td>
                    <Td> <CountUp end={12} duration={5}/> </Td>
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
        </TableNumberOfStaff>
        <NumberOfStaffModal showNumberOfStaffModal={showNumberOfStaffModal} setShowNumberOfStaffModal={setShowNumberOfStaffModal} nameAllMining={nameAllMining}/>
        </>
    )
}

const TableNumberOfStaff = styled(Table)`
    width:455px;
    height:290px;
`
export default NumberOfStaff
