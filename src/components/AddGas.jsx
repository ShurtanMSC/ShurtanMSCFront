import React, {useState, useContext} from 'react';
import {AppContext} from '../context'
import { Table, Tr, Th, TdFirst, Td, TdTotal, TdTotalCount } from '../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import AddGasModal from './AddGasModal'
import CountUp from 'react-countup';
import {getRoleNameFromJWT} from "../utills/UsefullFunctions";

const AddGas = () => {
    const {addGas, totalAddGas} = useContext(AppContext);

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
                        {getRoleNameFromJWT() !== 'EMPLOYEE' && getRoleNameFromJWT() !== 'OPERATOR' && getRoleNameFromJWT() !== 'ENERGETIC' && getRoleNameFromJWT() !== 'METROLOGIST' && getRoleNameFromJWT() !== 'GEOLOGIST' ? <FontAwesomeIcon style={{
                            position:'absolute',
                            right:'5px',
                            top:'3px',
                            cursor:'pointer'}}
                            icon={faEdit}
                            onClick={openModal}/> : ""}
                    </Th>
                </Tr>
                <Tr>
                    <Th style={{position:'sticky', top:'23px'}}>Часовая</Th>
                    <Th style={{position:'sticky', top:'23px'}}>С начала суток</Th>
                    <Th style={{position:'sticky', top:'23px'}}>За прошлые сутки </Th>
                </Tr>
                </thead>
                <tbody>
                {addGas.map((mining, key) =>
                    <Tr key={key}>
                        <TdFirst>{mining.objectDto !== null ? mining.objectDto.name : ""}</TdFirst>
                        <Td> <CountUp end={mining.objectActionDto !==null ? mining.objectActionDto.expend : 0} duration={0.7}/> </Td>
                        <Td> <CountUp end={mining.objectActionDto !==null ? mining.objectActionDto.todayExpend : 0} duration={1}/> </Td>
                        <Td> <CountUp end={mining.objectActionDto !==null ? mining.objectActionDto.yesterdayExpend : 0} duration={1}/> </Td>
                    </Tr>
                )}
                </tbody>
                <tfoot>
                <Tr>
                    <TdTotal>Итого</TdTotal>
                    <TdTotalCount> <CountUp end={totalAddGas} duration={0.7}/> </TdTotalCount>
                    <TdTotalCount> <CountUp end={totalAddGas*24} duration={1}/> </TdTotalCount>
                    <TdTotalCount> <CountUp end={0} duration={1}/> </TdTotalCount>
                </Tr>
                </tfoot>
            </TableAddGas>
            <AddGasModal showAddGassModal={showAddGassModal} setShowAddGassModal={setShowAddGassModal} addGas={addGas}/>
        </>
    )
}
const TableAddGas = styled(Table)`
    width:380px;
    height:400px;
    margin-bottom: 5px;
`
export default AddGas
