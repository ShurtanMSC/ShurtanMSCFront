import React, {useState, useContext} from 'react';
import {AppContext} from "../context";
import { Table, Tr, Th, TdFirst, Td } from '../styled';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import ModesOfOperationModal from './ModesOfOperationModal';
import CountUp from 'react-countup';
import {getRoleNameFromJWT} from "../utills/UsefullFunctions";

const ModesOfOperation = () => {
    const {date} = useContext(AppContext);
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
                    {getRoleNameFromJWT() !== 'EMPLOYEE' &&
                        getRoleNameFromJWT() !== 'OPERATOR' &&
                        getRoleNameFromJWT() !== 'ENERGETIC' &&
                        getRoleNameFromJWT() !== 'METROLOGIST' &&
                        getRoleNameFromJWT() !== 'GEOLOGIST' ?
                            <FontAwesomeIcon style={{
                                                    position:'absolute',
                                                    right:'5px',
                                                    top:'3px',
                                                    cursor:'pointer',
                                                    zIndex:"1"
                                                }}
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
                <Th>Q.тыс.м<sup>3</sup>/сут</Th>
                <Th>Q.тыс.м<sup>3</sup>/сут по факту</Th>
                <Th>Q.тыс.м<sup>3</sup>/сут по проекту</Th>
                <Th>Q.тыс.м<sup>3</sup>/сут</Th>
                <Th>мото/час</Th>
                <Th>мото/час</Th>
            </Tr>
            </thead>
            <tbody>
            <Tr>
                <TdFirst>ДКС-2 КМПО</TdFirst>
                <Td> <CountUp end={7.7} duration={5}/> </Td>
                <Td> <CountUp end={7.4} duration={5}/> </Td>
                <Td> <CountUp end={8.6} duration={5}/> </Td>
                <Td> <CountUp end={20.2} duration={5}/> </Td>
                <Td> <CountUp end={32} duration={5}/> </Td>
                <Td> <CountUp end={95} duration={5}/> </Td>
                <Td> <CountUp end={553} duration={5}/> </Td>
                <Td> <CountUp end={5285} duration={5}/> </Td>
                <Td> <CountUp end={24698} duration={5}/> </Td>
                <Td> <CountUp end={25802} duration={5}/> </Td>
                <Td> <CountUp end={635} duration={5}/> </Td>
                <Td> <CountUp end={68993} duration={5}/> </Td>
                <Td> <CountUp end={11704} duration={5}/> </Td>
            </Tr>
            <Tr>
                <TdFirst>ДКС-2 Батеман</TdFirst>
                <Td> <CountUp end={16.8} duration={5}/> </Td>
                <Td> <CountUp end={16.3} duration={5}/> </Td>
                <Td> <CountUp end={53.1} duration={5}/> </Td>
                <Td> <CountUp end={34} duration={5}/> </Td>
                <Td> <CountUp end={111} duration={5}/> </Td>
                <Td> <CountUp end={735} duration={5}/> </Td>
                <Td> <CountUp end={5500} duration={5}/> </Td>
                <Td> <CountUp end={6175} duration={5}/> </Td>
                <Td> <CountUp end={24698} duration={5}/> </Td>
                <Td> <CountUp end={40800} duration={5}/> </Td>
                <Td> <CountUp end={470} duration={5}/> </Td>
                <Td> <CountUp end={103435} duration={5}/> </Td>
                <Td> <CountUp end={36631} duration={5}/> </Td>
            </Tr>
            <Tr>
                <TdFirst>ДКС-Сев.Нишан</TdFirst>
                <Td> <CountUp end={9.5} duration={5}/> </Td>
                <Td> <CountUp end={9.3} duration={5}/> </Td>
                <Td> <CountUp end={52.7} duration={5}/> </Td>
                <Td> <CountUp end={14} duration={5}/> </Td>
                <Td> <CountUp end={42} duration={5}/> </Td>
                <Td> <CountUp end={446} duration={5}/> </Td>
                <Td> <CountUp end={4500} duration={5}/> </Td>
                <Td> <CountUp end={1339} duration={5}/> </Td>
                <Td> <CountUp end={2677} duration={5}/> </Td>
                <Td> <CountUp end={6061} duration={5}/> </Td>
                <Td> <CountUp end={237} duration={5}/> </Td>
                <Td> <CountUp end={36796} duration={5}/> </Td>
                <Td> <CountUp end={3295} duration={5}/> </Td>
            </Tr>
            </tbody>    
        </TableModeOfOperation>
        <ModesOfOperationModal showModesOperationModal={showModesOperationModal} setShowModesOperationModal={setShowModesOperationModal} date={date}/>
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
