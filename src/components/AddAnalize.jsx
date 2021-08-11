import React, { useState } from 'react'
import { Table, Tr, Th, TdFirst, Td, TdTotal,TdTotalCount } from '../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const AddAnalize = () => {

    const [openTable, setOpenTable] = useState(false)

    return (
        <TableAddAnalize openTable={openTable}>
            <Tr>
                <Th rowSpan="4" 
                    style={{position:'sticky', 
                            top:'0'}}>
                    Наименование месторождений
                    <BtnMore onClick={()=>setOpenTable(!openTable)} >
                        <FontAwesomeIconRotate openTable={openTable} icon={ faChevronDown } />
                    </BtnMore>
                </Th>
                <Th colSpan="10" style={{position:'sticky', 
                                        top:'0'}} >
                    Анализ добычи 
                    <FontAwesomeIcon style={{position:'absolute', 
                                            right:'5px', 
                                            top:'3px', 
                                            cursor:'pointer'}}
                                     icon={faEdit} /> 
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
            <Tr>
                <TdFirst>Шуртан</TdFirst>
                <Td>5000</Td>
                <Td>4500</Td>
                <TdREd>90</TdREd>
                <TdREd>-500</TdREd>
                <Td>60000</Td>
                <Td>59000</Td>
                <Td>70000</Td>
                <TdREd>98</TdREd>
                <TdREd>-1000</TdREd>
            </Tr>
            <Tr>
                <TdFirst>Южная Тандырча</TdFirst>
                <Td>5000</Td>
                <Td>4500</Td>
                <TdREd>90</TdREd>
                <TdREd>-500</TdREd>
                <Td>60000</Td>
                <Td>59000</Td>
                <Td>70000</Td>
                <TdREd>98</TdREd>
                <TdREd>-1000</TdREd>
            </Tr>
            <Tr>
                <TdFirst>Бузахур</TdFirst>
                <Td>5000</Td>
                <Td>4500</Td>
                <TdREd>90</TdREd>
                <TdREd>-500</TdREd>
                <Td>60000</Td>
                <Td>59000</Td>
                <Td>70000</Td>
                <TdREd>98</TdREd>
                <TdREd>-1000</TdREd>
            </Tr>
            <Tr>
                <TdFirst>Восточный Бузахур</TdFirst>
                <Td>5000</Td>
                <Td>4500</Td>
                <TdREd>90</TdREd>
                <TdREd>-500</TdREd>
                <Td>60000</Td>
                <Td>59000</Td>
                <Td>70000</Td>
                <TdREd>98</TdREd>
                <TdREd>-1000</TdREd>
            </Tr>
            <Tr>
                <TdFirst>Тарнасой</TdFirst>
                <Td>5000</Td>
                <Td>4500</Td>
                <TdREd>90</TdREd>
                <TdREd>-500</TdREd>
                <Td>60000</Td>
                <Td>59000</Td>
                <Td>70000</Td>
                <TdREd>98</TdREd>
                <TdREd>-1000</TdREd>
            </Tr>
            <Tr>
                <TdFirst>Ойдин</TdFirst>
                <Td>5000</Td>
                <Td>4500</Td>
                <TdREd>90</TdREd>
                <TdREd>-500</TdREd>
                <Td>60000</Td>
                <Td>59000</Td>
                <Td>70000</Td>
                <TdREd>98</TdREd>
                <TdREd>-1000</TdREd>
            </Tr>
            <Tr>
                <TdFirst>Номозбой</TdFirst>
                <Td>5000</Td>
                <Td>4500</Td>
                <TdREd>90</TdREd>
                <TdREd>-500</TdREd>
                <Td>60000</Td>
                <Td>59000</Td>
                <Td>70000</Td>
                <TdREd>98</TdREd>
                <TdREd>-1000</TdREd>
            </Tr>
            <Tr>
                <TdFirst>Ёрмок</TdFirst>
                <Td>5000</Td>
                <Td>4500</Td>
                <TdREd>90</TdREd>
                <TdREd>-500</TdREd>
                <Td>60000</Td>
                <Td>59000</Td>
                <Td>70000</Td>
                <TdREd>98</TdREd>
                <TdREd>-1000</TdREd>
            </Tr>
            <Tr>
                <TdFirst>Туртсари</TdFirst>
                <Td>5000</Td>
                <Td>4500</Td>
                <TdREd>90</TdREd>
                <TdREd>-500</TdREd>
                <Td>60000</Td>
                <Td>59000</Td>
                <Td>70000</Td>
                <TdREd>98</TdREd>
                <TdREd>-1000</TdREd>
            </Tr>
            <Tr>
                <TdFirst>Северный Шуртан</TdFirst>
                <Td>5000</Td>
                <Td>4500</Td>
                <TdREd>90</TdREd>
                <TdREd>-500</TdREd>
                <Td>60000</Td>
                <Td>59000</Td>
                <Td>70000</Td>
                <TdREd>98</TdREd>
                <TdREd>-1000</TdREd>
            </Tr>
            <Tr>
                <TdFirst>Гармистон</TdFirst>
                <Td>5000</Td>
                <Td>4500</Td>
                <TdREd>90</TdREd>
                <TdREd>-500</TdREd>
                <Td>60000</Td>
                <Td>59000</Td>
                <Td>70000</Td>
                <TdREd>98</TdREd>
                <TdREd>-1000</TdREd>
            </Tr>
            <Tr>
                <TdFirst>Совлигор</TdFirst>
                <Td>5000</Td>
                <Td>4500</Td>
                <TdREd>90</TdREd>
                <TdREd>-500</TdREd>
                <Td>60000</Td>
                <Td>59000</Td>
                <Td>70000</Td>
                <TdREd>98</TdREd>
                <TdREd>-1000</TdREd>
            </Tr>
            <Tr>
                <TdFirst>Яккасарай</TdFirst>
                <Td>5000</Td>
                <Td>4500</Td>
                <TdREd>90</TdREd>
                <TdREd>-500</TdREd>
                <Td>60000</Td>
                <Td>59000</Td>
                <Td>70000</Td>
                <TdREd>98</TdREd>
                <TdREd>-1000</TdREd>
            </Tr>
            <Tr>
                <TdFirst>Мезон</TdFirst>
                <Td>5000</Td>
                <Td>4500</Td>
                <TdREd>90</TdREd>
                <TdREd>-500</TdREd>
                <Td>60000</Td>
                <Td>59000</Td>
                <Td>70000</Td>
                <TdREd>98</TdREd>
                <TdREd>-1000</TdREd>
            </Tr>
            <Tr>
                <TdFirst>Феруза</TdFirst>
                <Td>5000</Td>
                <Td>4500</Td>
                <TdREd>90</TdREd>
                <TdREd>-500</TdREd>
                <Td>60000</Td>
                <Td>59000</Td>
                <Td>70000</Td>
                <TdREd>98</TdREd>
                <TdREd>-1000</TdREd>
            </Tr>
            <Tr>
                <TdFirst>Тошли</TdFirst>
                <Td>5000</Td>
                <Td>4500</Td>
                <TdREd>90</TdREd>
                <TdREd>-500</TdREd>
                <Td>60000</Td>
                <Td>59000</Td>
                <Td>70000</Td>
                <TdREd>98</TdREd>
                <TdREd>-1000</TdREd>
            </Tr>
            <Tr>
                <TdFirst>Зафар</TdFirst>
                <Td>5000</Td>
                <Td>4500</Td>
                <TdREd>90</TdREd>
                <TdREd>-500</TdREd>
                <Td>60000</Td>
                <Td>59000</Td>
                <Td>70000</Td>
                <TdREd>98</TdREd>
                <TdREd>-1000</TdREd>
            </Tr>
            <Tr>
                <TdFirst>Коратепа</TdFirst>
                <Td>5000</Td>
                <Td>4500</Td>
                <TdREd>90</TdREd>
                <TdREd>-500</TdREd>
                <Td>60000</Td>
                <Td>59000</Td>
                <Td>70000</Td>
                <TdREd>98</TdREd>
                <TdREd>-1000</TdREd>
            </Tr>
            <Tr>
                <TdFirst>Ширкент</TdFirst>
                <Td>5000</Td>
                <Td>4500</Td>
                <TdREd>90</TdREd>
                <TdREd>-500</TdREd>
                <Td>60000</Td>
                <Td>59000</Td>
                <Td>70000</Td>
                <TdREd>98</TdREd>
                <TdREd>-1000</TdREd>
            </Tr>
            <Tr>
                <TdFirst>Рубойи</TdFirst>
                <Td>5000</Td>
                <Td>4500</Td>
                <TdREd>90</TdREd>
                <TdREd>-500</TdREd>
                <Td>60000</Td>
                <Td>59000</Td>
                <Td>70000</Td>
                <TdREd>98</TdREd>
                <TdREd>-1000</TdREd>
            </Tr>
            <Tr>
                <TdFirst>Янги Коратепа</TdFirst>
                <Td>5000</Td>
                <Td>4500</Td>
                <TdREd>90</TdREd>
                <TdREd>-500</TdREd>
                <Td>60000</Td>
                <Td>59000</Td>
                <Td>70000</Td>
                <TdREd>98</TdREd>
                <TdREd>-1000</TdREd>
            </Tr>
            <Tr>
                <TdTotal>Итого</TdTotal>
                <TdTotalCount>500</TdTotalCount>
                <TdTotalCount>8000</TdTotalCount>
                <TdTotalCount>9000</TdTotalCount>
                <TdTotalCount>500</TdTotalCount>
                <TdTotalCount>8000</TdTotalCount>
                <TdTotalCount>9000</TdTotalCount>
                <TdTotalCount>500</TdTotalCount>
                <TdTotalCount>8000</TdTotalCount>
                <TdTotalCount>9000</TdTotalCount>
            </Tr>
        </TableAddAnalize>
    )
}

const TableAddAnalize = styled(Table)`
    width:1040px;
    height:${({openTable}) => (openTable ? "100%" : "125px") };
    margin-bottom: 5px;
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
    transform: ${({openTable}) => (openTable ? "rotate(180deg)" : "")};
`


export default AddAnalize
