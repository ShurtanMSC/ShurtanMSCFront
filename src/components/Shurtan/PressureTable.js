import React, {useEffect, useState} from 'react';
import { Tr, Td, TdFirst } from '../../styled';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faChevronDown, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import {BASE_URL} from "../../utills/constant";
import {configHeader} from "../../utills/congifHeader";
import PressureModal from "./PressureModal";
import {getRoleNameFromJWT} from "../../utills/UsefullFunctions";

const PressureTable = ({el}) => {
    const [wellPressure, setWellPressure] = useState([]);
    const [ turnMore, setTurnMore ] = useState(false);
    const [ showMore, setShowMore ] = useState(false);

    const [ showPressureModal, setShowPressureModal ] = useState(false);
    const [ wellPressureModal, setWellPressureModal ] = useState([]);
    const [ id, setId ] = useState('');
    const [ currentSP, setCurrentSP ] = useState({});

    const openPressureModal = (SPid, sp) => {
        setShowPressureModal(prev => !prev);
        setId(SPid);
        setCurrentSP(sp);
        getWellActions(sp.objectDto.id)
    };

    const getWellActions = (id) => {
        axios.get(BASE_URL + '/api/well/all/actions/collection_point/' + id, configHeader)
            .then(res =>{
                setWellPressureModal(res.data.object);
                // console.log(res.data.object)
            })
            .catch(err => {console.log(err)})
    }
    const takeWell = () => {
        axios.get(BASE_URL + '/api/well/all/actions/collection_point/' + el.objectDto.id, configHeader)
            .then(res =>{
                setWellPressure(res.data.object);
                // console.log(res.data.object)
            })
            .catch(err => {console.log(err)})
    }
    useEffect(() => {
       takeWell();
    },[])
    const openShowMoreTable = () => {
        setTurnMore(!turnMore);
        setShowMore(!showMore);
    }
    const counterWellStatus = () => {
        let arrayWell = [ 0, 0, 0, 0, 0];
        wellPressure.map(well=>{
            switch (well.objectActionDto.status) {
                case "IN_WORK":arrayWell[0]+=1; break;
                case "IN_IDLE":arrayWell[1]+=1; break;
                case "IN_REPAIR":arrayWell[2]+=1; break;
                case "IN_CONSERVATION":arrayWell[3]+=1; break;
                case "IN_LIQUIDATION":arrayWell[4]+=1; break;
                default:return ""
            }
        })
        return arrayWell;
    }

    return(
        <tbody>
        <PressureModal showPressureModal={showPressureModal}
                       setShowPressureModal={setShowPressureModal}
                       id={id}
                       sp={currentSP}
                       wellPressureModal={wellPressureModal}
                       getWellActions={getWellActions}
                       takeWell={takeWell}
        />
        <Tr>
            <TdFirstPresure>
                {getRoleNameFromJWT() !== 'EMPLOYEE' && getRoleNameFromJWT() !== 'OPERATOR' && getRoleNameFromJWT() !== 'ENERGETIC' && getRoleNameFromJWT() !== 'GEOLOGIST' ? <FontAwesomeIconPresure
                    icon={faEdit}
                    onClick={()=>openPressureModal(el.objectDto.name, el)}/> : ""}
                {el.objectDto.name}
                <FontAwesomeIconPresure rotation={turnMore ? 180 : 0} icon={faChevronDown} onClick={openShowMoreTable} />
            </TdFirstPresure>
            <Td>{el.objectActionDto !== null ? Math.round((el.objectActionDto.pressure)*10)/10 : ""}</Td>
            <Td>-</Td>
            <Td>-</Td>
            <Td>{el.objectActionDto !== null ? Math.round(el.objectActionDto.expend*10/1000)/10 : ""}</Td>
            <Td>{el.objectActionDto !== null ? Math.round((el.objectActionDto.temperature)*10)/10 : ""}</Td>
            <Td>{counterWellStatus()[0]}</Td>
            <Td>{counterWellStatus()[1]}</Td>
            <Td>{counterWellStatus()[2]}</Td>
            <Td>{counterWellStatus()[3]}</Td>
            <Td>{counterWellStatus()[4]}</Td>

        </Tr>
        {wellPressure.map(well =>
            <TrNone showMore={showMore} key={well.objectDto.number}>
                <TdFirstPresure>{well.objectDto.number}</TdFirstPresure>
                <Td>{el.objectActionDto !== null ? Math.round((el.objectActionDto.pressure)*10)/10 : ""}</Td>
                <Td>{Math.round(well.objectActionDto.pressure*10)/10}</Td>
                <Td>{Math.round(well.objectActionDto.rpl*10)/10}</Td>
                <Td>{Math.round(well.objectActionDto.expend*10)/10}</Td>
                <Td>{Math.round(well.objectActionDto.temperature*10)/10}</Td>
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