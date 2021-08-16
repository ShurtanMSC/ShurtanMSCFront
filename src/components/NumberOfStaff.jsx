import React, {useState} from 'react'
import { Table, Tr, Th, TdFirst, Td, TdTotal, TdTotalCount } from '../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import NumberOfStaffModal from './NumberOfStaffModal'
import CountUp from 'react-countup'

const NumberOfStaff = () => {
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
            <Tr>
                <TdFirst>Шуртан</TdFirst>
                <Td> <CountUp end={15} duration={5}/> </Td>
                <Td> <CountUp end={20} duration={5}/> </Td>
                <Td> <CountUp end={40} duration={5}/> </Td>
                <Td> <CountUp end={12} duration={5}/> </Td>    
            </Tr>
            <Tr>
                <TdFirst>Южная Тандырча</TdFirst>
                <Td> <CountUp end={15} duration={5}/> </Td>
                <Td> <CountUp end={20} duration={5}/> </Td>
                <Td> <CountUp end={40} duration={5}/> </Td>
                <Td> <CountUp end={12} duration={5}/> </Td>    
            </Tr>
            <Tr>
                <TdFirst>Бузахур</TdFirst>
                <Td> <CountUp end={15} duration={5}/> </Td>
                <Td> <CountUp end={20} duration={5}/> </Td>
                <Td> <CountUp end={40} duration={5}/> </Td>
                <Td> <CountUp end={12} duration={5}/> </Td>    
            </Tr>
            <Tr>
                <TdFirst>Восточный Бузахур</TdFirst>
                <Td> <CountUp end={15} duration={5}/> </Td>
                <Td> <CountUp end={20} duration={5}/> </Td>
                <Td> <CountUp end={40} duration={5}/> </Td>
                <Td> <CountUp end={12} duration={5}/> </Td>    
            </Tr>
            <Tr>
                <TdFirst>Тарнасой</TdFirst>
                <Td> <CountUp end={15} duration={5}/> </Td>
                <Td> <CountUp end={20} duration={5}/> </Td>
                <Td> <CountUp end={40} duration={5}/> </Td>
                <Td> <CountUp end={12} duration={5}/> </Td>    
            </Tr>
            <Tr>
                <TdFirst>Ойдин</TdFirst>
                <Td> <CountUp end={15} duration={5}/> </Td>
                <Td> <CountUp end={20} duration={5}/> </Td>
                <Td> <CountUp end={40} duration={5}/> </Td>
                <Td> <CountUp end={12} duration={5}/> </Td>    
            </Tr>
            <Tr>
                <TdFirst>Номозбой</TdFirst>
                <Td> <CountUp end={15} duration={5}/> </Td>
                <Td> <CountUp end={20} duration={5}/> </Td>
                <Td> <CountUp end={40} duration={5}/> </Td>
                <Td> <CountUp end={12} duration={5}/> </Td>    
            </Tr>
            <Tr>
                <TdFirst>Ёрмок</TdFirst>
                <Td> <CountUp end={15} duration={5}/> </Td>
                <Td> <CountUp end={20} duration={5}/> </Td>
                <Td> <CountUp end={40} duration={5}/> </Td>
                <Td> <CountUp end={12} duration={5}/> </Td>    
            </Tr>
            <Tr>
                <TdFirst>Туртсари</TdFirst>
                <Td> <CountUp end={15} duration={5}/> </Td>
                <Td> <CountUp end={20} duration={5}/> </Td>
                <Td> <CountUp end={40} duration={5}/> </Td>
                <Td> <CountUp end={12} duration={5}/> </Td>    
            </Tr>
            <Tr>
                <TdFirst>Северный Шуртан</TdFirst>
                <Td> <CountUp end={15} duration={5}/> </Td>
                <Td> <CountUp end={20} duration={5}/> </Td>
                <Td> <CountUp end={40} duration={5}/> </Td>
                <Td> <CountUp end={12} duration={5}/> </Td>    
            </Tr>
            <Tr>
                <TdFirst>Гармистон</TdFirst>
                <Td> <CountUp end={15} duration={5}/> </Td>
                <Td> <CountUp end={20} duration={5}/> </Td>
                <Td> <CountUp end={40} duration={5}/> </Td>
                <Td> <CountUp end={12} duration={5}/> </Td>    
            </Tr>
            <Tr>
                <TdFirst>Совлигор</TdFirst>
                <Td> <CountUp end={15} duration={5}/> </Td>
                <Td> <CountUp end={20} duration={5}/> </Td>
                <Td> <CountUp end={40} duration={5}/> </Td>
                <Td> <CountUp end={12} duration={5}/> </Td>    
            </Tr>
            <Tr>
                <TdFirst>Яккасарай</TdFirst>
                <Td> <CountUp end={15} duration={5}/> </Td>
                <Td> <CountUp end={20} duration={5}/> </Td>
                <Td> <CountUp end={40} duration={5}/> </Td>
                <Td> <CountUp end={12} duration={5}/> </Td>    
            </Tr>
            <Tr>
                <TdFirst>Мезон</TdFirst>
                <Td> <CountUp end={15} duration={5}/> </Td>
                <Td> <CountUp end={20} duration={5}/> </Td>
                <Td> <CountUp end={40} duration={5}/> </Td>
                <Td> <CountUp end={12} duration={5}/> </Td>    
            </Tr>
            <Tr>
                <TdFirst>Феруза</TdFirst>
                <Td> <CountUp end={15} duration={5}/> </Td>
                <Td> <CountUp end={20} duration={5}/> </Td>
                <Td> <CountUp end={40} duration={5}/> </Td>
                <Td> <CountUp end={12} duration={5}/> </Td>    
            </Tr>
            <Tr>
                <TdFirst>Тошли</TdFirst>
                <Td> <CountUp end={15} duration={5}/> </Td>
                <Td> <CountUp end={20} duration={5}/> </Td>
                <Td> <CountUp end={40} duration={5}/> </Td>
                <Td> <CountUp end={12} duration={5}/> </Td>    
            </Tr>
            <Tr>
                <TdFirst>Зафар</TdFirst>
                <Td> <CountUp end={15} duration={5}/> </Td>
                <Td> <CountUp end={20} duration={5}/> </Td>
                <Td> <CountUp end={40} duration={5}/> </Td>
                <Td> <CountUp end={12} duration={5}/> </Td>    
            </Tr>
            <Tr>
                <TdFirst>Коратепа</TdFirst>
                <Td> <CountUp end={15} duration={5}/> </Td>
                <Td> <CountUp end={20} duration={5}/> </Td>
                <Td> <CountUp end={40} duration={5}/> </Td>
                <Td> <CountUp end={12} duration={5}/> </Td>    
            </Tr>
            <Tr>
                <TdFirst>Ширкент</TdFirst>
                <Td> <CountUp end={15} duration={5}/> </Td>
                <Td> <CountUp end={20} duration={5}/> </Td>
                <Td> <CountUp end={40} duration={5}/> </Td>
                <Td> <CountUp end={12} duration={5}/> </Td>    
            </Tr>
            <Tr>
                <TdFirst>Рубойи</TdFirst>
                <Td> <CountUp end={15} duration={5}/> </Td>
                <Td> <CountUp end={20} duration={5}/> </Td>
                <Td> <CountUp end={40} duration={5}/> </Td>
                <Td> <CountUp end={12} duration={5}/> </Td>    
            </Tr>
            <Tr>
                <TdFirst>Янги Коратепа</TdFirst>
                <Td> <CountUp end={15} duration={5}/> </Td>
                <Td> <CountUp end={20} duration={5}/> </Td>
                <Td> <CountUp end={40} duration={5}/> </Td>
                <Td> <CountUp end={12} duration={5}/> </Td>    
            </Tr>
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
        <NumberOfStaffModal showNumberOfStaffModal={showNumberOfStaffModal} setShowNumberOfStaffModal={setShowNumberOfStaffModal}/>
        </>
    )
}

const TableNumberOfStaff = styled(Table)`
    width:455px;
    height:297px;
`
export default NumberOfStaff
