import React from 'react'
import { Table, Tr, Th, Td, TdFirst, TdTotalCount, TdTotal } from '../../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Pressure = () => {
    return (
        <TablePresure>
            <thead>
            <Tr>
                <Th rowSpan="2" style={{position:'sticky', top:'0'}}>Наименование</Th>
                <Th colSpan="3" style={{position:'sticky', top:'0'}}>Давление, кгс/см2</Th>
                <Th rowSpan="2" style={{position:'sticky', top:'0'}}>Расход, тыс м³/ч</Th>
                <Th rowSpan="2" style={{position:'sticky', top:'0'}}>Темрература </Th>
                <Th rowSpan='2' style={{position:'sticky', top:'0'}}><FontAwesomeIconPresure icon={faChevronRight}/></Th>
            </Tr>
            <Tr>
                <Th style={{position:'sticky', top:'38px'}}>РСП</Th>
                <Th style={{position:'sticky', top:'38px'}}>РУ</Th>
                <Th style={{position:'sticky', top:'38px'}}>РПЛ</Th>
            </Tr>
            </thead>
            <tbody>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit}/> СП-1 <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td colSpan="2">9000</Td>
            </Tr>
            </tbody>
            <tfoot>
            <Tr>
                <TdTotal>Итого</TdTotal>
                <TdTotalCount>500</TdTotalCount>
                <TdTotalCount>500</TdTotalCount>
                <TdTotalCount>500</TdTotalCount>
                <TdTotalCount>8000</TdTotalCount>
                <TdTotalCount colSpan="2">9000</TdTotalCount>
            </Tr>
            </tfoot>
        </TablePresure>
    )
}

const TablePresure = styled(Table)`
    width:400px;
    height:610px;
`
const TdFirstPresure = styled(TdFirst)`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const FontAwesomeIconPresure = styled(FontAwesomeIcon)`
    cursor: pointer;
`
// const ThSideIcon = styled(Th)`
//     display:flex;
//     justify-content:space-between;
//     align-items:center;
// `
// const FontAwesomeIconSide = styled(FontAwesomeIcon)`
//     cursor: pointer;
//     min-height:80px;
// `
export default Pressure
