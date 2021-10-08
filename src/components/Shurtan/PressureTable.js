import React from 'react';
import { Tr, Td, TdFirst } from '../../styled';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const PressureTable = ({el, openPressureModal, turnMore, openShowMoreTable}) => {
    return(
        <tbody>
            <Tr key={el.objectDto.name}>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={()=>openPressureModal(el.objectDto.name, el)}/> {el.objectDto.name}
                    <FontAwesomeIconPresure rotation={turnMore ? 180 : 0} icon={faChevronDown} onClick={openShowMoreTable} />
                </TdFirstPresure>
                <Td>{el.objectActionDto !== null ? Math.round((el.objectActionDto.pressure)*10)/10 : ""}</Td>
                <Td>50</Td>
                <Td>50</Td>
                <Td>800</Td>
                <Td>{el.objectActionDto !== null ? Math.round((el.objectActionDto.temperature)*10)/10 : ""}</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
            </Tr>
        </tbody>
    )
}
const TdFirstPresure = styled(TdFirst)`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const FontAwesomeIconPresure = styled(FontAwesomeIcon)`
    cursor: pointer;
    transition:0.5s;
`
export default PressureTable