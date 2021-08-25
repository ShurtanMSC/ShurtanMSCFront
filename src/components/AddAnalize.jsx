import React, { useState } from 'react'
import { Table, Tr, Th, TdFirst, Td, TdTotal,TdTotalCount } from '../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import AddAnalizeModal from './AddAnalizeModal'
import CountUp from 'react-countup'

const AddAnalize = () => {

    const [openTable, setOpenTable] = useState(false);
    const [turnIcon, setTurnIcon] = useState(false);
    const [showAddAnalizeModal, setShowAddAnalizeModal] = useState(false);

    const openMore = () => {
        setOpenTable(!openTable);
        setTurnIcon(!turnIcon);
    }

    const openModal = () => {
        setShowAddAnalizeModal(prev => !prev)
    }

    return (
        <>
        <TableAddAnalize openTable={openTable}>
            <thead>
            <Tr>
                <Th rowSpan="4" 
                    style={{position:'sticky', 
                            top:'0'}}>
                    Наименование месторождений
                    <BtnMore onClick={openMore} >
                        <FontAwesomeIconRotate turnIcon={turnIcon} 
                                                icon={ faChevronDown } 
                                                />
                    </BtnMore>
                </Th>
                <Th colSpan="10" style={{position:'sticky', 
                                        top:'0'}} >
                    Анализ добычи 
                    <FontAwesomeIcon style={{position:'absolute', 
                                            right:'5px', 
                                            top:'3px', 
                                            cursor:'pointer'}}
                                            icon={faEdit} 
                                            onClick={openModal}/> 
                </Th>
            </Tr>
            <Tr>
                <Th colSpan="4" style={{position:'sticky', top:'22px'}} >За текущий месяц</Th>
                <Th colSpan="5" style={{position:'sticky', top:'22px'}} >С начала года </Th>
            </Tr>
            <Tr>
                <Th rowSpan="2" style={{position:'sticky', top:'44px'}} >План добычи тыс.м3</Th>
                <Th rowSpan="2" style={{position:'sticky', top:'44px'}} >Факт. добыча тыс.м3 </Th>
                <Th rowSpan="2" style={{position:'sticky', top:'44px'}} >% выполнения</Th>
                <Th style={{position:'sticky', top:'44px'}} >Отставание</Th>
                <Th rowSpan="2" style={{position:'sticky', top:'44px'}} >План добычи тыс.м3</Th>
                <Th rowSpan="2" style={{position:'sticky', top:'44px'}} >Факт. добыча тыс.м3</Th>
                <Th rowSpan="2" style={{position:'sticky', top:'44px'}} >За аналог. период прошлого года</Th>
                <Th rowSpan="2" style={{position:'sticky', top:'44px'}} >% выполнение </Th>
                <Th style={{position:'sticky', top:'44px'}} >Отставание</Th>
            </Tr>
            <Tr>
                <Th style={{position:'sticky', top:'69px'}} >Перевыполнение</Th>
                <Th style={{position:'sticky', top:'69px'}} >Перевыполнение</Th>
            </Tr>
            </thead>
            <tbody>
            <Tr>
                <TdFirst>Шуртан</TdFirst>
                <Td> <CountUp end={5000} duration={5}/> </Td>
                <Td> <CountUp end={4500} duration={4}/> </Td>
                <TdREd> <CountUp end={-90} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-500} duration={3}/> </TdREd>
                <Td> <CountUp end={60000} duration={6}/> </Td>
                <Td> <CountUp end={59000} duration={6}/> </Td>
                <Td> <CountUp end={70000} duration={7}/> </Td>
                <TdREd> <CountUp end={98} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-1000} duration={3}/> </TdREd>
            </Tr>
            <Tr>
                <TdFirst>Южная Тандырча</TdFirst>
                <Td> <CountUp end={5000} duration={5}/> </Td>
                <Td> <CountUp end={4500} duration={4}/> </Td>
                <TdREd> <CountUp end={-90} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-500} duration={3}/> </TdREd>
                <Td> <CountUp end={60000} duration={6}/> </Td>
                <Td> <CountUp end={59000} duration={6}/> </Td>
                <Td> <CountUp end={70000} duration={7}/> </Td>
                <TdREd> <CountUp end={98} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-1000} duration={3}/> </TdREd>
            </Tr>
            <Tr>
                <TdFirst>Бузахур</TdFirst>
                <Td> <CountUp end={5000} duration={5}/> </Td>
                <Td> <CountUp end={4500} duration={4}/> </Td>
                <TdREd> <CountUp end={-90} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-500} duration={3}/> </TdREd>
                <Td> <CountUp end={60000} duration={6}/> </Td>
                <Td> <CountUp end={59000} duration={6}/> </Td>
                <Td> <CountUp end={70000} duration={7}/> </Td>
                <TdREd> <CountUp end={98} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-1000} duration={3}/> </TdREd>
            </Tr>
            <Tr>
                <TdFirst>Восточный Бузахур</TdFirst>
                <Td> <CountUp end={5000} duration={5}/> </Td>
                <Td> <CountUp end={4500} duration={4}/> </Td>
                <TdREd> <CountUp end={-90} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-500} duration={3}/> </TdREd>
                <Td> <CountUp end={60000} duration={6}/> </Td>
                <Td> <CountUp end={59000} duration={6}/> </Td>
                <Td> <CountUp end={70000} duration={7}/> </Td>
                <TdREd> <CountUp end={98} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-1000} duration={3}/> </TdREd>
            </Tr>
            <Tr>
                <TdFirst>Тарнасой</TdFirst>
                <Td> <CountUp end={5000} duration={5}/> </Td>
                <Td> <CountUp end={4500} duration={4}/> </Td>
                <TdREd> <CountUp end={-90} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-500} duration={3}/> </TdREd>
                <Td> <CountUp end={60000} duration={6}/> </Td>
                <Td> <CountUp end={59000} duration={6}/> </Td>
                <Td> <CountUp end={70000} duration={7}/> </Td>
                <TdREd> <CountUp end={98} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-1000} duration={3}/> </TdREd>
            </Tr>
            <Tr>
                <TdFirst>Ойдин</TdFirst>
                <Td> <CountUp end={5000} duration={5}/> </Td>
                <Td> <CountUp end={4500} duration={4}/> </Td>
                <TdREd> <CountUp end={-90} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-500} duration={3}/> </TdREd>
                <Td> <CountUp end={60000} duration={6}/> </Td>
                <Td> <CountUp end={59000} duration={6}/> </Td>
                <Td> <CountUp end={70000} duration={7}/> </Td>
                <TdREd> <CountUp end={98} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-1000} duration={3}/> </TdREd>
            </Tr>
            <Tr>
                <TdFirst>Номозбой</TdFirst>
                <Td> <CountUp end={5000} duration={5}/> </Td>
                <Td> <CountUp end={4500} duration={4}/> </Td>
                <TdREd> <CountUp end={-90} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-500} duration={3}/> </TdREd>
                <Td> <CountUp end={60000} duration={6}/> </Td>
                <Td> <CountUp end={59000} duration={6}/> </Td>
                <Td> <CountUp end={70000} duration={7}/> </Td>
                <TdREd> <CountUp end={98} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-1000} duration={3}/> </TdREd>
            </Tr>
            <Tr>
                <TdFirst>Ёрмок</TdFirst>
                <Td> <CountUp end={5000} duration={5}/> </Td>
                <Td> <CountUp end={4500} duration={4}/> </Td>
                <TdREd> <CountUp end={-90} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-500} duration={3}/> </TdREd>
                <Td> <CountUp end={60000} duration={6}/> </Td>
                <Td> <CountUp end={59000} duration={6}/> </Td>
                <Td> <CountUp end={70000} duration={7}/> </Td>
                <TdREd> <CountUp end={98} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-1000} duration={3}/> </TdREd>
            </Tr>
            <Tr>
                <TdFirst>Туртсари</TdFirst>
                <Td> <CountUp end={5000} duration={5}/> </Td>
                <Td> <CountUp end={4500} duration={4}/> </Td>
                <TdREd> <CountUp end={-90} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-500} duration={3}/> </TdREd>
                <Td> <CountUp end={60000} duration={6}/> </Td>
                <Td> <CountUp end={59000} duration={6}/> </Td>
                <Td> <CountUp end={70000} duration={7}/> </Td>
                <TdREd> <CountUp end={98} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-1000} duration={3}/> </TdREd>
            </Tr>
            <Tr>
                <TdFirst>Северный Шуртан</TdFirst>
                <Td> <CountUp end={5000} duration={5}/> </Td>
                <Td> <CountUp end={4500} duration={4}/> </Td>
                <TdREd> <CountUp end={-90} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-500} duration={3}/> </TdREd>
                <Td> <CountUp end={60000} duration={6}/> </Td>
                <Td> <CountUp end={59000} duration={6}/> </Td>
                <Td> <CountUp end={70000} duration={7}/> </Td>
                <TdREd> <CountUp end={98} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-1000} duration={3}/> </TdREd>
            </Tr>
            <Tr>
                <TdFirst>Гармистон</TdFirst>
                <Td> <CountUp end={5000} duration={5}/> </Td>
                <Td> <CountUp end={4500} duration={4}/> </Td>
                <TdREd> <CountUp end={-90} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-500} duration={3}/> </TdREd>
                <Td> <CountUp end={60000} duration={6}/> </Td>
                <Td> <CountUp end={59000} duration={6}/> </Td>
                <Td> <CountUp end={70000} duration={7}/> </Td>
                <TdREd> <CountUp end={98} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-1000} duration={3}/> </TdREd>
            </Tr>
            <Tr>
                <TdFirst>Совлигор</TdFirst>
                <Td> <CountUp end={5000} duration={5}/> </Td>
                <Td> <CountUp end={4500} duration={4}/> </Td>
                <TdREd> <CountUp end={-90} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-500} duration={3}/> </TdREd>
                <Td> <CountUp end={60000} duration={6}/> </Td>
                <Td> <CountUp end={59000} duration={6}/> </Td>
                <Td> <CountUp end={70000} duration={7}/> </Td>
                <TdREd> <CountUp end={98} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-1000} duration={3}/> </TdREd>
            </Tr>
            <Tr>
                <TdFirst>Яккасарай</TdFirst>
                <Td> <CountUp end={5000} duration={5}/> </Td>
                <Td> <CountUp end={4500} duration={4}/> </Td>
                <TdREd> <CountUp end={-90} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-500} duration={3}/> </TdREd>
                <Td> <CountUp end={60000} duration={6}/> </Td>
                <Td> <CountUp end={59000} duration={6}/> </Td>
                <Td> <CountUp end={70000} duration={7}/> </Td>
                <TdREd> <CountUp end={98} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-1000} duration={3}/> </TdREd>
            </Tr>
            <Tr>
                <TdFirst>Мезон</TdFirst>
                <Td> <CountUp end={5000} duration={5}/> </Td>
                <Td> <CountUp end={4500} duration={4}/> </Td>
                <TdREd> <CountUp end={-90} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-500} duration={3}/> </TdREd>
                <Td> <CountUp end={60000} duration={6}/> </Td>
                <Td> <CountUp end={59000} duration={6}/> </Td>
                <Td> <CountUp end={70000} duration={7}/> </Td>
                <TdREd> <CountUp end={98} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-1000} duration={3}/> </TdREd>
            </Tr>
            <Tr>
                <TdFirst>Феруза</TdFirst>
                <Td> <CountUp end={5000} duration={5}/> </Td>
                <Td> <CountUp end={4500} duration={4}/> </Td>
                <TdREd> <CountUp end={-90} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-500} duration={3}/> </TdREd>
                <Td> <CountUp end={60000} duration={6}/> </Td>
                <Td> <CountUp end={59000} duration={6}/> </Td>
                <Td> <CountUp end={70000} duration={7}/> </Td>
                <TdREd> <CountUp end={98} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-1000} duration={3}/> </TdREd>
            </Tr>
            <Tr>
                <TdFirst>Тошли</TdFirst>
                <Td> <CountUp end={5000} duration={5}/> </Td>
                <Td> <CountUp end={4500} duration={4}/> </Td>
                <TdREd> <CountUp end={-90} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-500} duration={3}/> </TdREd>
                <Td> <CountUp end={60000} duration={6}/> </Td>
                <Td> <CountUp end={59000} duration={6}/> </Td>
                <Td> <CountUp end={70000} duration={7}/> </Td>
                <TdREd> <CountUp end={98} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-1000} duration={3}/> </TdREd>
            </Tr>
            <Tr>
                <TdFirst>Зафар</TdFirst>
                <Td> <CountUp end={5000} duration={5}/> </Td>
                <Td> <CountUp end={4500} duration={4}/> </Td>
                <TdREd> <CountUp end={-90} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-500} duration={3}/> </TdREd>
                <Td> <CountUp end={60000} duration={6}/> </Td>
                <Td> <CountUp end={59000} duration={6}/> </Td>
                <Td> <CountUp end={70000} duration={7}/> </Td>
                <TdREd> <CountUp end={98} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-1000} duration={3}/> </TdREd>
            </Tr>
            <Tr>
                <TdFirst>Коратепа</TdFirst>
                <Td> <CountUp end={5000} duration={5}/> </Td>
                <Td> <CountUp end={4500} duration={4}/> </Td>
                <TdREd> <CountUp end={-90} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-500} duration={3}/> </TdREd>
                <Td> <CountUp end={60000} duration={6}/> </Td>
                <Td> <CountUp end={59000} duration={6}/> </Td>
                <Td> <CountUp end={70000} duration={7}/> </Td>
                <TdREd> <CountUp end={98} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-1000} duration={3}/> </TdREd>
            </Tr>
            <Tr>
                <TdFirst>Ширкент</TdFirst>
                <Td> <CountUp end={5000} duration={5}/> </Td>
                <Td> <CountUp end={4500} duration={4}/> </Td>
                <TdREd> <CountUp end={-90} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-500} duration={3}/> </TdREd>
                <Td> <CountUp end={60000} duration={6}/> </Td>
                <Td> <CountUp end={59000} duration={6}/> </Td>
                <Td> <CountUp end={70000} duration={7}/> </Td>
                <TdREd> <CountUp end={98} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-1000} duration={3}/> </TdREd>
            </Tr>
            <Tr>
                <TdFirst>Рубойи</TdFirst>
                <Td> <CountUp end={5000} duration={5}/> </Td>
                <Td> <CountUp end={4500} duration={4}/> </Td>
                <TdREd> <CountUp end={-90} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-500} duration={3}/> </TdREd>
                <Td> <CountUp end={60000} duration={6}/> </Td>
                <Td> <CountUp end={59000} duration={6}/> </Td>
                <Td> <CountUp end={70000} duration={7}/> </Td>
                <TdREd> <CountUp end={98} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-1000} duration={3}/> </TdREd>
            </Tr>
            <Tr>
                <TdFirst>Янги Коратепа</TdFirst>
                <Td> <CountUp end={5000} duration={5}/> </Td>
                <Td> <CountUp end={4500} duration={4}/> </Td>
                <TdREd> <CountUp end={-90} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-500} duration={3}/> </TdREd>
                <Td> <CountUp end={60000} duration={6}/> </Td>
                <Td> <CountUp end={59000} duration={6}/> </Td>
                <Td> <CountUp end={70000} duration={7}/> </Td>
                <TdREd> <CountUp end={98} duration={2}/> </TdREd>
                <TdREd> <CountUp end={-1000} duration={3}/> </TdREd>
            </Tr>
            </tbody>
            <tfoot>
            <Tr>
                <TdTotal>Итого</TdTotal>
                <TdTotalCount> <CountUp end={500} duration={3}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={8000} duration={5}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={9000} duration={5}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={500} duration={3}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={8000} duration={5}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={500} duration={3}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={500} duration={3}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={8000} duration={5}/> </TdTotalCount>
                <TdTotalCount> <CountUp end={500} duration={3}/> </TdTotalCount>
            </Tr>
            </tfoot>
        </TableAddAnalize>
        <AddAnalizeModal showAddAnalizeModal={showAddAnalizeModal} setShowAddAnalizeModal={setShowAddAnalizeModal}/>
        </>
    )
}

const TableAddAnalize = styled(Table)`
    width:1040px;
    transition:0.2s;  
    height:${({openTable}) => (openTable ? "610px" : "125px")};
    margin-bottom: 5px;
    transition:0.5s;
    overflow-y: auto;
    @media(max-width:1050px){
        width:996px;
    }
`
const TdREd = styled(Td)`
    color:red;
    box-shadow: 0 0 1.5px #aaa;
`
const BtnMore = styled.button`
    position:absolute;
    top:70px;
    left:58px;
    border:2px solid #555;
    border-radius: 4px;
    background: transparent;
    padding: 0 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const FontAwesomeIconRotate = styled(FontAwesomeIcon)`
    transform: ${({turnIcon}) => (turnIcon ? "rotate(180deg)" : "0deg")};
    transition: 0.5s;
`


export default AddAnalize
