import React, {useState} from 'react'
import { Table, Tr, Th, TdFirst, Td, TdTotal, TdTotalCount } from '../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import WellStockModal from './WellStockModal'
import CountUp from 'react-countup'

const WellStock = () => {
    const [showWellStockModal, setShowWellStockModal] = useState(false);

    const openModal = () => {
        setShowWellStockModal(prev => !prev);
    }

    return (
        <>
        <TableWellStock>
            <thead>
            <Tr>
                <Th rowSpan="2" style={{position:'sticky', top:'0'}}>Наимено-<br/>вание</Th>
                <Th colSpan="5" style={{position:'sticky', top:'0'}}> Фонд скважин 
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
                <Th style={{position:'sticky', top:'23px'}}>В прос-<br/>тое</Th>
                <Th style={{position:'sticky', top:'23px'}}>В ремон-<br/>те</Th>
                <Th style={{position:'sticky', top:'23px'}}>В консер-<br/>вации</Th>
                <Th style={{position:'sticky', top:'23px'}}>В ликви-<br/>дации</Th>
            </Tr>
            </thead>
            <tbody>
            <Tr>
                <TdFirst>Шуртан</TdFirst>
                <Td> <CountUp end={167} duration={5}/> </Td>
                <Td> <CountUp end={22} duration={5}/> </Td>
                <Td> <CountUp end={5} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>    
            </Tr>
            <Tr>
                <TdFirst>Южная Тандырча</TdFirst>
                <Td> <CountUp end={167} duration={5}/> </Td>
                <Td> <CountUp end={22} duration={5}/> </Td>
                <Td> <CountUp end={5} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
            </Tr>
            <Tr>
                <TdFirst>Бузахур</TdFirst>
                <Td> <CountUp end={167} duration={5}/> </Td>
                <Td> <CountUp end={22} duration={5}/> </Td>
                <Td> <CountUp end={5} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
            </Tr>
            <Tr>
                <TdFirst>Восточный Бузахур</TdFirst>
                <Td> <CountUp end={167} duration={5}/> </Td>
                <Td> <CountUp end={22} duration={5}/> </Td>
                <Td> <CountUp end={5} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
            </Tr>
            <Tr>
                <TdFirst>Тарнасой</TdFirst>
                <Td> <CountUp end={167} duration={5}/> </Td>
                <Td> <CountUp end={22} duration={5}/> </Td>
                <Td> <CountUp end={5} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
            </Tr>
            <Tr>
                <TdFirst>Ойдин</TdFirst>
                <Td> <CountUp end={167} duration={5}/> </Td>
                <Td> <CountUp end={22} duration={5}/> </Td>
                <Td> <CountUp end={5} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
            </Tr>
            <Tr>
                <TdFirst>Номозбой</TdFirst>
                <Td> <CountUp end={167} duration={5}/> </Td>
                <Td> <CountUp end={22} duration={5}/> </Td>
                <Td> <CountUp end={5} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
            </Tr>
            <Tr>
                <TdFirst>Ёрмок</TdFirst>
                <Td> <CountUp end={167} duration={5}/> </Td>
                <Td> <CountUp end={22} duration={5}/> </Td>
                <Td> <CountUp end={5} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
            </Tr>
            <Tr>
                <TdFirst>Туртсари</TdFirst>
                <Td> <CountUp end={167} duration={5}/> </Td>
                <Td> <CountUp end={22} duration={5}/> </Td>
                <Td> <CountUp end={5} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
            </Tr>
            <Tr>
                <TdFirst>Северный Шуртан</TdFirst>
                <Td> <CountUp end={167} duration={5}/> </Td>
                <Td> <CountUp end={22} duration={5}/> </Td>
                <Td> <CountUp end={5} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
            </Tr>
            <Tr>
                <TdFirst>Гармистон</TdFirst>
                <Td> <CountUp end={167} duration={5}/> </Td>
                <Td> <CountUp end={22} duration={5}/> </Td>
                <Td> <CountUp end={5} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
            </Tr>
            <Tr>
                <TdFirst>Совлигор</TdFirst>
                <Td> <CountUp end={167} duration={5}/> </Td>
                <Td> <CountUp end={22} duration={5}/> </Td>
                <Td> <CountUp end={5} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
            </Tr>
            <Tr>
                <TdFirst>Яккасарай</TdFirst>
                <Td> <CountUp end={167} duration={5}/> </Td>
                <Td> <CountUp end={22} duration={5}/> </Td>
                <Td> <CountUp end={5} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
            </Tr>
            <Tr>
                <TdFirst>Мезон</TdFirst>
                <Td> <CountUp end={167} duration={5}/> </Td>
                <Td> <CountUp end={22} duration={5}/> </Td>
                <Td> <CountUp end={5} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
            </Tr>
            <Tr>
                <TdFirst>Феруза</TdFirst>
                <Td> <CountUp end={167} duration={5}/> </Td>
                <Td> <CountUp end={22} duration={5}/> </Td>
                <Td> <CountUp end={5} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
            </Tr>
            <Tr>
                <TdFirst>Тошли</TdFirst>
                <Td> <CountUp end={167} duration={5}/> </Td>
                <Td> <CountUp end={22} duration={5}/> </Td>
                <Td> <CountUp end={5} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
            </Tr>
            <Tr>
                <TdFirst>Зафар</TdFirst>
                <Td> <CountUp end={167} duration={5}/> </Td>
                <Td> <CountUp end={22} duration={5}/> </Td>
                <Td> <CountUp end={5} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
            </Tr>
            <Tr>
                <TdFirst>Коратепа</TdFirst>
                <Td> <CountUp end={167} duration={5}/> </Td>
                <Td> <CountUp end={22} duration={5}/> </Td>
                <Td> <CountUp end={5} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
            </Tr>
            <Tr>
                <TdFirst>Ширкент</TdFirst>
                <Td> <CountUp end={167} duration={5}/> </Td>
                <Td> <CountUp end={22} duration={5}/> </Td>
                <Td> <CountUp end={5} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
            </Tr>
            <Tr>
                <TdFirst>Рубойи</TdFirst>
                <Td> <CountUp end={167} duration={5}/> </Td>
                <Td> <CountUp end={22} duration={5}/> </Td>
                <Td> <CountUp end={5} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
            </Tr>
            <Tr>
                <TdFirst>Янги Коратепа</TdFirst>
                <Td> <CountUp end={167} duration={5}/> </Td>
                <Td> <CountUp end={22} duration={5}/> </Td>
                <Td> <CountUp end={5} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
                <Td> <CountUp end={7} duration={5}/> </Td>
            </Tr>
            </tbody>
            <tfoot>
            <Tr>
                <TdTotal>Итого</TdTotal>
                <TdTotalCount> <CountUp end={167} duration={5}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={20} duration={5}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={5} duration={5}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={7} duration={5}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={7} duration={5}/> </TdTotalCount>
            </Tr>
            </tfoot>
        </TableWellStock>
        <WellStockModal showWellStockModal={showWellStockModal} setShowWellStockModal={setShowWellStockModal}/>
        </>
    )
}
const TableWellStock = styled(Table)`
    width:380px;
    height:400px;
`
export default WellStock
