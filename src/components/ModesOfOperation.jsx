import React, {useState} from 'react'
import { Table, Tr, Th, TdFirst, Td } from '../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import ModesOfOperationModal from './ModesOfOperationModal'
import CountUp from 'react-countup';
import {getRoleNameFromJWT} from "../utills/UsefullFunctions";

const ModesOfOperation = () => {
    const [showModesOperationModal, setShowModesOperationModal] = useState(false);

    const openModal = () => {
        setShowModesOperationModal(prev => !prev)
    }

    return (
        <>
        <TableModeOfOperation>
            <thead>
            <Tr>
                <Th rowSpan="3">Наименование обьектов, агрегатов и марка ГТД</Th>
                <Th colSpan="14" style={{position:'relative', zIndex:"1"}} >Режимы Эксплуатаций ДКС
                    {getRoleNameFromJWT() !== "EMPLOYEE" ? <FontAwesomeIcon style={{
                        position:'absolute',
                        right:'5px',
                        top:'3px',
                        cursor:'pointer',
                        zIndex:"1"}}
                        icon={faEdit}
                        onClick={openModal} /> : ""}
                </Th>
            </Tr>
            <Tr>
                <Th colSpan="3">Давление газа, кгс/см²</Th>
                <Th colSpan="3">Температура газа, °С</Th>
                <Th>Обороты СТ</Th>
                <Th>Обьем газа ГПА</Th>
                <Th colSpan="2">Обьем газа КС</Th>
                <Th>Расход Топ.газа</Th>
                <Th>Общая наработка ГТД</Th>
                <Th>Эксплуататция после кап ремонта</Th>
            </Tr>
            <Tr>
                <Th>Р вх.Стан</Th>
                <Th>Р вх.</Th>
                <Th>Р вых.</Th>
                <Th>Т вх.</Th>
                <Th>Т вых.</Th>
                <Th>Т выхл.</Th>
                <Th>Об/мин</Th>
                <Th>Q.тыс.м3/сут</Th>
                <Th>Q.тыс.м3/сут по факту</Th>
                <Th>Q.тыс.м3/сут по проекту</Th>
                <Th>Q.тыс.м3/сут</Th>
                <Th>мото/час</Th>
                <Th>мото/час</Th>
            </Tr>
            </thead>
            <tbody>
            <Tr>
                <TdFirst>ДКС-2 КМПО</TdFirst>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
            </Tr>
            <Tr>
                <TdFirst>ДКС-2 Батеман</TdFirst>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
            </Tr>
            <Tr>
                <TdFirst>ДКС-Сев.Нишан</TdFirst>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
            </Tr>
            </tbody>    
        </TableModeOfOperation>
        <ModesOfOperationModal showModesOperationModal={showModesOperationModal} setShowModesOperationModal={setShowModesOperationModal}/>
        </>
    )
}

const TableModeOfOperation = styled(Table)`
    width:1040px;
    height:186px;
    @media(max-width:1050px){
        width: 996px;
        height:200px;
    }
`
export default ModesOfOperation
