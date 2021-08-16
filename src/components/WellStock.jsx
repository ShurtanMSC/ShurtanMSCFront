import React, {useState} from 'react'
import { Table, Tr, Th, TdFirst, Td, TdTotal, TdTotalCount } from '../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import WellStockModal from './WellStockModal'

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
                <Td>167</Td>
                <Td>22</Td>
                <Td>5</Td>
                <Td>7</Td>
                <Td>7</Td>    
            </Tr>
            <Tr>
                <TdFirst>Южная Тандырча</TdFirst>
                <Td>167</Td>
                <Td>22</Td>
                <Td>5</Td>
                <Td>7</Td>
                <Td>7</Td>
            </Tr>
            <Tr>
                <TdFirst>Бузахур</TdFirst>
                <Td>167</Td>
                <Td>22</Td>
                <Td>5</Td>
                <Td>7</Td>
                <Td>7</Td>
            </Tr>
            <Tr>
                <TdFirst>Восточный Бузахур</TdFirst>
                <Td>167</Td>
                <Td>22</Td>
                <Td>5</Td>
                <Td>7</Td>
                <Td>7</Td>
            </Tr>
            <Tr>
                <TdFirst>Тарнасой</TdFirst>
                <Td>167</Td>
                <Td>22</Td>
                <Td>5</Td>
                <Td>7</Td>
                <Td>7</Td>
            </Tr>
            <Tr>
                <TdFirst>Ойдин</TdFirst>
                <Td>167</Td>
                <Td>22</Td>
                <Td>5</Td>
                <Td>7</Td>
                <Td>7</Td>
            </Tr>
            <Tr>
                <TdFirst>Номозбой</TdFirst>
                <Td>167</Td>
                <Td>22</Td>
                <Td>5</Td>
                <Td>7</Td>
                <Td>7</Td>
            </Tr>
            <Tr>
                <TdFirst>Ёрмок</TdFirst>
                <Td>167</Td>
                <Td>22</Td>
                <Td>5</Td>
                <Td>7</Td>
                <Td>7</Td>
            </Tr>
            <Tr>
                <TdFirst>Туртсари</TdFirst>
                <Td>167</Td>
                <Td>22</Td>
                <Td>5</Td>
                <Td>7</Td>
                <Td>7</Td>
            </Tr>
            <Tr>
                <TdFirst>Северный Шуртан</TdFirst>
                <Td>167</Td>
                <Td>22</Td>
                <Td>5</Td>
                <Td>7</Td>
                <Td>7</Td>
            </Tr>
            <Tr>
                <TdFirst>Гармистон</TdFirst>
                <Td>167</Td>
                <Td>22</Td>
                <Td>5</Td>
                <Td>7</Td>
                <Td>7</Td>
            </Tr>
            <Tr>
                <TdFirst>Совлигор</TdFirst>
                <Td>167</Td>
                <Td>22</Td>
                <Td>5</Td>
                <Td>7</Td>
                <Td>7</Td>
            </Tr>
            <Tr>
                <TdFirst>Яккасарай</TdFirst>
                <Td>167</Td>
                <Td>22</Td>
                <Td>5</Td>
                <Td>7</Td>
                <Td>7</Td>
            </Tr>
            <Tr>
                <TdFirst>Мезон</TdFirst>
                <Td>167</Td>
                <Td>22</Td>
                <Td>5</Td>
                <Td>7</Td>
                <Td>7</Td>
            </Tr>
            <Tr>
                <TdFirst>Феруза</TdFirst>
                <Td>167</Td>
                <Td>22</Td>
                <Td>5</Td>
                <Td>7</Td>
                <Td>7</Td>
            </Tr>
            <Tr>
                <TdFirst>Тошли</TdFirst>
                <Td>167</Td>
                <Td>22</Td>
                <Td>5</Td>
                <Td>7</Td>
                <Td>7</Td>
            </Tr>
            <Tr>
                <TdFirst>Зафар</TdFirst>
                <Td>167</Td>
                <Td>22</Td>
                <Td>5</Td>
                <Td>7</Td>
                <Td>7</Td>
            </Tr>
            <Tr>
                <TdFirst>Коратепа</TdFirst>
                <Td>167</Td>
                <Td>22</Td>
                <Td>5</Td>
                <Td>7</Td>
                <Td>7</Td>
            </Tr>
            <Tr>
                <TdFirst>Ширкент</TdFirst>
                <Td>167</Td>
                <Td>22</Td>
                <Td>5</Td>
                <Td>7</Td>
                <Td>7</Td>
            </Tr>
            <Tr>
                <TdFirst>Рубойи</TdFirst>
                <Td>167</Td>
                <Td>22</Td>
                <Td>5</Td>
                <Td>7</Td>
                <Td>7</Td>
            </Tr>
            <Tr>
                <TdFirst>Янги Коратепа</TdFirst>
                <Td>167</Td>
                <Td>22</Td>
                <Td>5</Td>
                <Td>7</Td>
                <Td>7</Td>
            </Tr>
            </tbody>
            <tfoot>
            <Tr>
                <TdTotal>Итого</TdTotal>
                <TdTotalCount>167</TdTotalCount>
                <TdTotalCount>22</TdTotalCount>
                <TdTotalCount>5</TdTotalCount>
                <TdTotalCount>7</TdTotalCount>
                <TdTotalCount>7</TdTotalCount>
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
