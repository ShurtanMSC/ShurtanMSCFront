import React, { useState, useContext } from 'react';
import {AppContext} from '../../context';
import { Table, Tr, Th, TdTotalCount, TdTotal } from '../../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import PressureModal from "./PressureModal";
import PressureTable from './PressureTable'
import axios from "axios";
import {BASE_URL} from "../../utills/constant";
import {configHeader} from "../../utills/congifHeader";

const   Pressure = () => {
    const {pressureApi} = useContext(AppContext);

    const [ showPressureModal, setShowPressureModal ] = useState(false);
    const [ showPressureTable, setShowPressureTable ] = useState(false);
    const [ turnIcon, setTurnIcon ] = useState(false);
    const [ wellPressureModal, setWellPressureModal ] = useState([]);

    const [ id, setId ] = useState('');
    const [ currentSP, setCurrentSP ] = useState({});

    const openPressureModal = (SPid, sp) => {
        setShowPressureModal(prev => !prev);
        setId(SPid);
        setCurrentSP(sp);
        axios.get(BASE_URL + '/api/well/all/actions/collection_point/' + sp.objectDto.id, configHeader)
            .then(res =>{setWellPressureModal(res.data.object); console.log(res.data.object)})
            .catch(err => {console.log(err)})
        };
    const openMoreTable = () => {
        setShowPressureTable(!showPressureTable);
        setTurnIcon(!turnIcon);
    }

    return (
        <PressureContainer>
            <PressureModal showPressureModal={showPressureModal}
                           setShowPressureModal={setShowPressureModal}
                           id={id}
                           sp={currentSP}
                           wellPressureModal={wellPressureModal}
            />
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
                <RightTh rowSpan="2" onClick={openMoreTable}>
                    <FontAwesomeIconPresure rotation={turnIcon ? 180 : 0} icon={faChevronRight} />
                </RightTh>
            </Tr>
            <Tr>
                <Th style={{position:'sticky', top:'22px', padding:'5px 10px'}}>РСП</Th>
                <Th style={{position:'sticky', top:'22px', padding:'5px 10px'}}>РУ</Th>
                <Th style={{position:'sticky', top:'22px', padding:'5px 10px'}}>РПЛ</Th>
            </Tr>
            </thead>
            {pressureApi.map((el) =>
                    <PressureTable el={el} openPressureModal={openPressureModal} key={el.objectDto.name} />
            )}
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
    transition:0.2s;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
`
const FontAwesomeIconPresure = styled(FontAwesomeIcon)`
    cursor: pointer;
    transition:0.5s;
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
export default Pressure
