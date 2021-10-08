import React, {useState, useContext} from 'react';
import {AppContext} from '../../context'
import { Tr, Td, TdFirst } from '../../styled';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faChevronDown } from '@fortawesome/free-solid-svg-icons'


const PressureTable = ({el, openPressureModal}) => {
    const {takeWell, well} = useContext(AppContext);
    const [ turnMore, setTurnMore ] = useState(false);
    const [ showMore, setShowMore ] = useState(false);
    const openShowMoreTable = () => {
        setTurnMore(!turnMore);
        setShowMore(!showMore);
    takeWell();
    }
    return(
        <tbody>
            <Tr>
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
            {well.map(el =>
                <TrNone showMore={showMore}>
                    <TdFirstPresure>{el.objectDto.number}</TdFirstPresure>
                    <Td>14</Td>
                    <Td>17.06</Td>
                    <Td>37.22</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                </TrNone>
            )}
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
const TrNone = styled(Tr)`
    display: ${({showMore}) => ( showMore ? "" : "none")};
    transition: 0.2s;
`
export default PressureTable