import React, {useState} from 'react';
import { Tr, Td, TdFirst } from '../../styled';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faChevronDown, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import {BASE_URL} from "../../utills/constant";
import {configHeader} from "../../utills/congifHeader";


const PressureTable = ({el, openPressureModal}) => {
    const [wellPressure, setWellPressure] = useState([]);
    const [ turnMore, setTurnMore ] = useState(false);
    const [ showMore, setShowMore ] = useState(false);
    const openShowMoreTable = () => {
        setTurnMore(!turnMore);
        setShowMore(!showMore);
        axios.get(BASE_URL + '/api/well/all/actions/collection_point/' + el.objectDto.id, configHeader)
            .then(res =>{setWellPressure(res.data.object); console.log(res.data.object)})
            .catch(err => {console.log(err)})
    }

    return(
        <tbody>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={()=>openPressureModal(el.objectDto.name, el)}/> {el.objectDto.name}
                    <FontAwesomeIconPresure rotation={turnMore ? 180 : 0} icon={faChevronDown} onClick={openShowMoreTable} />
                </TdFirstPresure>
                <Td>{el.objectActionDto !== null ? Math.round((el.objectActionDto.pressure)*10)/10 : ""}</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>{el.objectActionDto !== null ? Math.round(el.objectActionDto.expand*10)/10 : ""}</Td>
                <Td>{el.objectActionDto !== null ? Math.round((el.objectActionDto.temperature)*10)/10 : ""}</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
            </Tr>
            {wellPressure.map(well =>
                <TrNone showMore={showMore} key={well.objectDto.number}>
                    <TdFirstPresure>{well.objectDto.number}</TdFirstPresure>
                    <Td>{el.objectActionDto !== null ? Math.round((el.objectActionDto.pressure)*10)/10 : ""}</Td>
                    <Td>{well.objectActionDto.pressure}</Td>
                    <Td>{well.objectActionDto.rpl}</Td>
                    <Td>{Math.round(well.objectActionDto.expend*10)/10}</Td>
                    <Td>{well.objectActionDto.temperature}</Td>
                    <TdGreen>{well.objectActionDto.status !== "IN_WORK" ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faCheck}/>}</TdGreen>
                    <TdYellow>{well.objectActionDto.status !== "IN_IDLE" ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faCheck}/>}</TdYellow>
                    <TdRed>{well.objectActionDto.status !== "IN_REPAIR" ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faCheck}/>}</TdRed>
                    <TdPurple>{well.objectActionDto.status !== "IN_CONSERVATION" ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faCheck}/>}</TdPurple>
                    <TdBlack>{well.objectActionDto.status !== "IN_LIQUIDATION" ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faCheck}/>}</TdBlack>
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
const TdGreen = styled(Td)`
    color:#0FA30E;
`
const TdYellow = styled(Td)`
  color:#FFC91B;
`
const TdRed = styled(Td)`
  color:#FF0000;
`
const TdPurple = styled(Td)`
  color:#800080;
`
const TdBlack = styled(Td)`
  color:#000000;
`
export default PressureTable