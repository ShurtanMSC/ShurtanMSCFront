import React, {useState} from 'react'
import { Table, Tr, Th, TdFirst, Td, TdTotal, TdTotalCount } from '../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import AddGasModal from './AddGasModal'
import CountUp from 'react-countup'

const AddGas = () => {
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
                <Tr>
                    <TdFirst>Шуртан</TdFirst>
                    <Td> <CountUp end={500} duration={2}/> </Td>
                    <Td> <CountUp end={8000} duration={4}/> </Td>
                    <Td> <CountUp end={9000} duration={5}/> </Td>    
                </Tr>
                <Tr>
                    <TdFirst>Южная Тандырча</TdFirst>
                    <Td> <CountUp end={500} duration={2}/> </Td>
                    <Td> <CountUp end={8000} duration={4}/> </Td>
                    <Td> <CountUp end={9000} duration={5}/> </Td>
                </Tr>
                <Tr>
                    <TdFirst>Бузахур</TdFirst>
                    <Td> <CountUp end={500} duration={2}/> </Td>
                    <Td> <CountUp end={8000} duration={4}/> </Td>
                    <Td> <CountUp end={9000} duration={5}/> </Td>
                </Tr>
                <Tr>
                    <TdFirst>Восточный Бузахур</TdFirst>
                    <Td> <CountUp end={500} duration={2}/> </Td>
                    <Td> <CountUp end={8000} duration={4}/> </Td>
                    <Td> <CountUp end={9000} duration={5}/> </Td>
                </Tr>
                <Tr>
                    <TdFirst>Тарнасой</TdFirst>
                    <Td> <CountUp end={500} duration={2}/> </Td>
                    <Td> <CountUp end={8000} duration={4}/> </Td>
                    <Td> <CountUp end={9000} duration={5}/> </Td>
                </Tr>
                <Tr>
                    <TdFirst>Ойдин</TdFirst>
                    <Td> <CountUp end={500} duration={2}/> </Td>
                    <Td> <CountUp end={8000} duration={4}/> </Td>
                    <Td> <CountUp end={9000} duration={5}/> </Td>
                </Tr>
                <Tr>
                    <TdFirst>Номозбой</TdFirst>
                    <Td> <CountUp end={500} duration={2}/> </Td>
                    <Td> <CountUp end={8000} duration={4}/> </Td>
                    <Td> <CountUp end={9000} duration={5}/> </Td>
                </Tr>
                <Tr>
                    <TdFirst>Ёрмок</TdFirst>
                    <Td> <CountUp end={500} duration={2}/> </Td>
                    <Td> <CountUp end={8000} duration={4}/> </Td>
                    <Td> <CountUp end={9000} duration={5}/> </Td>
                </Tr>
                <Tr>
                    <TdFirst>Туртсари</TdFirst>
                    <Td> <CountUp end={500} duration={2}/> </Td>
                    <Td> <CountUp end={8000} duration={4}/> </Td>
                    <Td> <CountUp end={9000} duration={5}/> </Td>
                </Tr>
                <Tr>
                    <TdFirst>Северный Шуртан</TdFirst>
                    <Td> <CountUp end={500} duration={2}/> </Td>
                    <Td> <CountUp end={8000} duration={4}/> </Td>
                    <Td> <CountUp end={9000} duration={5}/> </Td>
                </Tr>
                <Tr>
                    <TdFirst>Гармистон</TdFirst>
                    <Td> <CountUp end={500} duration={2}/> </Td>
                    <Td> <CountUp end={8000} duration={4}/> </Td>
                    <Td> <CountUp end={9000} duration={5}/> </Td>
                </Tr>
                <Tr>
                    <TdFirst>Совлигор</TdFirst>
                    <Td> <CountUp end={500} duration={2}/> </Td>
                    <Td> <CountUp end={8000} duration={4}/> </Td>
                    <Td> <CountUp end={9000} duration={5}/> </Td>
                </Tr>
                <Tr>
                    <TdFirst>Яккасарай</TdFirst>
                    <Td> <CountUp end={500} duration={2}/> </Td>
                    <Td> <CountUp end={8000} duration={4}/> </Td>
                    <Td> <CountUp end={9000} duration={5}/> </Td>
                </Tr>
                <Tr>
                    <TdFirst>Мезон</TdFirst>
                    <Td> <CountUp end={500} duration={2}/> </Td>
                    <Td> <CountUp end={8000} duration={4}/> </Td>
                    <Td> <CountUp end={9000} duration={5}/> </Td>
                </Tr>
                <Tr>
                    <TdFirst>Феруза</TdFirst>
                    <Td> <CountUp end={500} duration={2}/> </Td>
                    <Td> <CountUp end={8000} duration={4}/> </Td>
                    <Td> <CountUp end={9000} duration={5}/> </Td>
                </Tr>
                <Tr>
                    <TdFirst>Тошли</TdFirst>
                    <Td> <CountUp end={500} duration={2}/> </Td>
                    <Td> <CountUp end={8000} duration={4}/> </Td>
                    <Td> <CountUp end={9000} duration={5}/> </Td>
                </Tr>
                <Tr>
                    <TdFirst>Зафар</TdFirst>
                    <Td> <CountUp end={500} duration={2}/> </Td>
                    <Td> <CountUp end={8000} duration={4}/> </Td>
                    <Td> <CountUp end={9000} duration={5}/> </Td>
                </Tr>
                <Tr>
                    <TdFirst>Коратепа</TdFirst>
                    <Td> <CountUp end={500} duration={2}/> </Td>
                    <Td> <CountUp end={8000} duration={4}/> </Td>
                    <Td> <CountUp end={9000} duration={5}/> </Td>
                </Tr>
                <Tr>
                    <TdFirst>Ширкент</TdFirst>
                    <Td> <CountUp end={500} duration={2}/> </Td>
                    <Td> <CountUp end={8000} duration={4}/> </Td>
                    <Td> <CountUp end={9000} duration={5}/> </Td>
                </Tr>
                <Tr>
                    <TdFirst>Рубойи</TdFirst>
                    <Td> <CountUp end={500} duration={2}/> </Td>
                    <Td> <CountUp end={8000} duration={4}/> </Td>
                    <Td> <CountUp end={9000} duration={5}/> </Td>
                </Tr>
                <Tr>
                    <TdFirst>Янги Коратепа</TdFirst>
                    <Td> <CountUp end={500} duration={2}/> </Td>
                    <Td> <CountUp end={8000} duration={4}/> </Td>
                    <Td> <CountUp end={9000} duration={5}/> </Td>
                </Tr>
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
            <AddGasModal showAddGassModal={showAddGassModal} setShowAddGassModal={setShowAddGassModal}/>
        </>
    )
}
const TableAddGas = styled(Table)`
    width:380px;
    height:416px;
    margin-bottom: 5px;
`
export default AddGas
