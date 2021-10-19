import React, {useState, useContext} from 'react';
import {AppContext} from '../context'
import { Table, Tr, Th, TdFirst, Td, TdTotal, TdTotalCount } from '../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import AddGasModal from './AddGasModal'
import CountUp from 'react-countup'

const AddGas = () => {
    const {nameAllMining} = useContext(AppContext);

    const [showAddGassModal, setShowAddGassModal] = useState(false);

    const openModal = () => {
        setShowAddGassModal(prev => !prev);
    };

    return (
        <>
            <TableAddGas>
                <thead>
                <Tr>
                    <Th rowSpan="2" style={{position:'sticky', top:'0'}}>Наименование</Th>
                    <Th colSpan="3" style={{position:'sticky', top:'0'}}>Добыча газа, млн.м3 
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
                    <Th style={{position:'sticky', top:'23px'}}>Часовая</Th>
                    <Th style={{position:'sticky', top:'23px'}}>С начала суток</Th>
                    <Th style={{position:'sticky', top:'23px'}}>За прошлые сутки </Th>
                </Tr>
                </thead>
                <tbody>
                {nameAllMining.map((mining, key) =>
                    <Tr key={key}>
                        <TdFirst>{mining.name}</TdFirst>
                        <Td> <CountUp end={500} duration={2}/> </Td>
                        <Td> <CountUp end={8000} duration={4}/> </Td>
                        <Td> <CountUp end={9000} duration={5}/> </Td>
                    </Tr>
                )}
                </tbody>
                <tfoot>
                <Tr>
                    <TdTotal>Итого</TdTotal>
                    <TdTotalCount> <CountUp end={500} duration={2}/> </TdTotalCount>
                    <TdTotalCount> <CountUp end={8000} duration={4}/> </TdTotalCount>
                    <TdTotalCount> <CountUp end={9000} duration={5}/> </TdTotalCount>
                </Tr>
                </tfoot>
            </TableAddGas>
            <AddGasModal showAddGassModal={showAddGassModal} setShowAddGassModal={setShowAddGassModal} nameAllMining={nameAllMining}/>
        </>
    )
}
const TableAddGas = styled(Table)`
    width:380px;
    height:416px;
    margin-bottom: 5px;
`
export default AddGas
