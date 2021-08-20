import React, { useState } from 'react'
import { Table, Tr, Th, Td, TdFirst, TdTotalCount, TdTotal } from '../../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import PressureModal from "./PressureModal";

const Pressure = () => {
    const [ showPressureModal, setShowPressureModal ] = useState(false);
    const [ showPressureTable, setShowPressureTable ] = useState(false);
    const [ showMore, setShowMore ] = useState(false);

    const openPressureModal = () => {
        setShowPressureModal(prev => !prev);
    };

    return (
        <PressureContainer>
            <PressureModal showPressureModal={showPressureModal}
                           setShowPressureModal={setShowPressureModal}/>
            <TablePresure showPressureTable={showPressureTable}>
            <thead>
            <Tr>
                <Th rowSpan="2" style={{position:'sticky', top:'0', padding:'0 5px'}}>Наименование</Th>
                <Th colSpan="3" style={{position:'sticky', top:'0'}}>Давление, кгс/см2</Th>
                <Th rowSpan="2" style={{position:'sticky', top:'0', padding:'0 5px'}}>Расход, тыс м³/ч</Th>
                <Th rowSpan="2" style={{position:'sticky', top:'0', padding:'0 5px'}}>Темрера- <br/>тура </Th>
                <Th rowSpan="2" style={{position:'sticky', top:'0'}}>В работе</Th>
                <Th rowSpan="2" style={{position:'sticky', top:'0'}}>В простое</Th>
                <Th rowSpan="2" style={{position:'sticky', top:'0'}}>В ремонте</Th>
                <Th rowSpan="2" style={{position:'sticky', top:'0'}}>В консервации</Th>
                <Th rowSpan="2" style={{position:'sticky', top:'0'}}>В ликвидации</Th>
                <RightTh rowSpan="2" onClick={() => setShowPressureTable(!showPressureTable)}>
                    <FontAwesomeIconPresure icon={faChevronRight} showPressureTable={showPressureTable}/>
                </RightTh>
            </Tr>
            <Tr>
                <Th style={{position:'sticky', top:'22px', padding:'5px 10px'}}>РСП</Th>
                <Th style={{position:'sticky', top:'22px', padding:'5px 10px'}}>РУ</Th>
                <Th style={{position:'sticky', top:'22px', padding:'5px 10px'}}>РПЛ</Th>
            </Tr>
            </thead>
            <tbody>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-1
                    <FontAwesomeIconPresure icon={faChevronDown} onClick={() => setShowMore(!showMore)} showMore={showMore}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </Tr>
            <TrNone showMore={showMore}>
                <TdFirstPresure>154</TdFirstPresure>
                <Td>14</Td>
                <Td>17.06</Td>
                <Td>37.22</Td>
                <Td>0</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </TrNone>
            <TrNone showMore={showMore}>
                <TdFirstPresure>155</TdFirstPresure>
                <Td>14</Td>
                <Td>17.06</Td>
                <Td>37.22</Td>
                <Td>0</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </TrNone>
            <TrNone showMore={showMore}>
                <TdFirstPresure>157</TdFirstPresure>
                <Td>14</Td>
                <Td>17.06</Td>
                <Td>37.22</Td>
                <Td>0</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </TrNone>
            <TrNone showMore={showMore}>
                <TdFirstPresure>158</TdFirstPresure>
                <Td>14</Td>
                <Td>17.06</Td>
                <Td>37.22</Td>
                <Td>0</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </TrNone>
            <TrNone showMore={showMore}>
                <TdFirstPresure>169</TdFirstPresure>
                <Td>14</Td>
                <Td>17.06</Td>
                <Td>37.22</Td>
                <Td>0</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </TrNone>
            <TrNone showMore={showMore}>
                <TdFirstPresure>309</TdFirstPresure>
                <Td>14</Td>
                <Td>17.06</Td>
                <Td>37.22</Td>
                <Td>0</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </TrNone>
            <TrNone showMore={showMore}>
                <TdFirstPresure>312</TdFirstPresure>
                <Td>14</Td>
                <Td>17.06</Td>
                <Td>37.22</Td>
                <Td>0</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </TrNone>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-2
                    <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-3
                    <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-4
                    <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> БТ-5
                    <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-6
                    <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-9
                    <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-10
                    <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-12
                    <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-14
                    <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-15
                    <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> БТ-16
                    <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> БТ-17
                    <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> БТ-19
                    <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-20
                    <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> БТ-21
                    <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-22
                    <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-24
                    <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-26
                    <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> БТ-30
                    <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </Tr>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> БТ-34
                    <FontAwesomeIconPresure icon={faChevronDown}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
            </Tr>
            </tbody>
            <tfoot>
            <Tr>
                <TdTotal>Итого</TdTotal>
                <TdTotalCount>500</TdTotalCount>
                <TdTotalCount>500</TdTotalCount>
                <TdTotalCount>500</TdTotalCount>
                <TdTotalCount>8000</TdTotalCount>
                <TdTotalCount>9000</TdTotalCount>
                <TdTotalCount>5</TdTotalCount>
                <TdTotalCount>3</TdTotalCount>
                <TdTotalCount>4</TdTotalCount>
                <TdTotalCount>6</TdTotalCount>
                <TdTotalCount>0</TdTotalCount>
            </Tr>
            </tfoot>
        </TablePresure>
        </PressureContainer>
    )
}
const PressureContainer = styled.div`
    width: 400px;
    height:590px;  
    position:relative;
`
const TablePresure = styled(Table)`
    width:${({showPressureTable}) => (showPressureTable ? "800px" : "400px")};
    height:590px;
    overflow:hidden;
    transition:0.2s;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
`
const TdFirstPresure = styled(TdFirst)`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const FontAwesomeIconPresure = styled(FontAwesomeIcon)`
    cursor: pointer;
    transform: ${({showPressureTable}) => (showPressureTable ? "rotate(180deg)" : "")};
  transform: ${({showMore}) => (showMore ? "rotate(180deg)" : "")};
`
const RightTh = styled(Th)`
  border: none;
  background-color: #FF914B;
  padding: 5px;
  color:#fff;
  position: sticky;
  top: 0;
  right: 0;
  cursor: pointer;
`
const TrNone = styled(Tr)`
  display: ${({showMore}) => ( showMore ? "" : "none")};
  transition: 0.2s;
`
// const FontAwesomeIconSide = styled(FontAwesomeIcon)`
//     cursor: pointer;
//     min-height:80px;
// `
export default Pressure
