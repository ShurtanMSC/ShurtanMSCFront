import React, {useState, useContext} from 'react';
import {AppContext} from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSearch } from '@fortawesome/free-solid-svg-icons'
import { BtnDiv, BtnSerach, Select, Table, Tr, Th, TdFirst, Td, LabelNavTitle } from '../../styled'
import styled from 'styled-components'
import BtnSearchModal from "./BtnSearchModal";
import BdUppgModal from './BdUppgModal'

const BtnSearch = () => {
    const {openWell} = useContext(AppContext);
    const [ showBtnSearch, setShowBtnSearch] = useState(false);
    const [ showBdUppgModal, setShowBdUppgModal] = useState(false);
    const [ openUppg, setOpenUppg ] = useState(false);
    const [ selectedWell, setSelectedWell ] = useState(50);
    const [ selectWell, setSelectWell ] = useState('');

    const openBtnSearchModal = () => {
        setShowBtnSearch(prev => !prev);
    }
    const openBdUppgModal = () => {
        setShowBdUppgModal(prev => !prev)
    }
    const sorted = openWell.sort(function (a, b){
        return a.objectDto.number - b.objectDto.number;
    })

    const handlerWellSearch = (e) => {
        setSelectedWell(e.target.value);
        console.log(filteredWell);
    }
    const filteredWell = openWell.map(well => well.objectDto.id === selectedWell)

    return (
        <SearchDiv>
            <BtnDiv>
                <Select name="text" id="text">
                    <option value="text">УППГ-1</option>
                    <option value="text">УППГ-2</option>    
                </Select>
                <BtnSerach onClick={()=> setOpenUppg(!openUppg)}>
                    <FontAwesomeIcon icon={faSearch} /> Поиск скважины
                </BtnSerach>
                <BdUppgModal showBdUppgModal={showBdUppgModal}
                                setShowBdUppgModal={setShowBdUppgModal}/>
                <BtnSerach onClick={openBdUppgModal}> БД УППГ </BtnSerach>
            </BtnDiv>
            <SearcherSK openUppg={openUppg}>
                <div>
                    <LabelChange htmlFor="searcher">Введите номер скважины:</LabelChange>
                    <SelectChange  htmlFor='searcher' id="searcher" value={selectedWell} onChange={handlerWellSearch}>
                        <option value=""> --Поиск скважины-- </option>
                        {sorted.map(wells =>
                            <option key={wells.objectDto.number} value={wells.objectDto.id}>{wells.objectDto.number}</option>
                        )}
                    </SelectChange>
                </div>
                <Table>
                    <tbody>
                        <Tr>
                            <TdFirstChange>Скважина</TdFirstChange>
                            <TdChange>4</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Сборный пункт</TdFirstChange>
                            <TdChange>СП-2</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Дата ввода в эксплуатацию</TdFirstChange>
                            <TdChange>1980-11-03</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Горизонт</TdFirstChange>
                            <TdChange>XV-НР</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Интервал перфарации</TdFirstChange>
                            <TdChange>2796-2839</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Состояние скважины</TdFirstChange>
                            <TdChange>В простое</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Дата изменения состояния</TdFirstChange>
                            <TdChange>2021-06-18</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Давление Pу, кгс/см²</TdFirstChange>
                            <TdChange>0.00</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Температура T, °C</TdFirstChange>
                            <TdChange>50.00</TdChange>
                        </Tr>
                    </tbody>

                </Table>
                <Table>
                    <thead>
                    <Tr>
                        <Th>Добыча</Th>
                        <Th>Часовая</Th>
                        <Th>За тек. сутки</Th>
                        <Th>За тек. месяц</Th>
                        <Th>С нач. года</Th>
                    </Tr>
                    </thead>
                    <tbody>
                    <Tr>
                        <TdFirst>Расход, тыс.м³/час</TdFirst>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                    </Tr>
                    </tbody>
                </Table>
            </SearcherSK>
            <BtnSearchModal showBtnSearch={showBtnSearch}
                            setShowBtnSearch={setShowBtnSearch}/>
            <Table>
                <thead>
                <Tr>
                    <Th style={{position:'relative'}}>
                        <FontAwesomeIcon style={{position:'absolute',
                                                top:'10px',
                                                left:'10px',
                                                cursor:'pointer'}}
                                                icon={faEdit}
                                                onClick={openBtnSearchModal}/> Наименование</Th>
                    <Th>2-х часовая</Th>
                    <Th>За тек. сутки</Th>
                    <Th>За тек. месяц</Th>
                    <Th>С нач. года</Th>
                </Tr>
                </thead>
                <tbody>
                <Tr>
                    <TdFirst>Проектная производительность <br/> м3/год</TdFirst>
                    <Td>15</Td>
                    <Td>20</Td>
                    <Td>40</Td>
                    <Td>12</Td>
                </Tr>
                <Tr>
                    <TdFirst>Фактическая производителность <br/> м3/год</TdFirst>
                    <Td>15</Td>
                    <Td>20</Td>
                    <Td>40</Td>
                    <Td>12</Td>
                </Tr>
                <Tr>
                    <TdFirst>По газу, тыс м3</TdFirst>
                    <Td>15</Td>
                    <Td>20</Td>
                    <Td>40</Td>
                    <Td>12</Td>
                </Tr>
                <Tr>
                    <TdFirst>По конденсату, тыс.т</TdFirst>
                    <Td>15</Td>
                    <Td>20</Td>
                    <Td>40</Td>
                    <Td>12</Td>
                </Tr>
                <Tr>
                    <TdFirst>По воде, тыс. т</TdFirst>
                    <Td colSpan="4">15</Td>
                </Tr>
                <Tr>
                    <TdFirst>Входное  давление, кгс\см2</TdFirst>
                    <Td colSpan="4">15</Td>
                </Tr>
                <Tr>
                    <TdFirst>Выходное  давление, кгс\см2</TdFirst>
                    <Td colSpan="4">15</Td>
                </Tr>
                <Tr>
                    <TdFirst>Входная температура, *С</TdFirst>
                    <Td colSpan="4">15</Td>
                </Tr>
                <Tr>
                    <TdFirst>Выходная температура, *С</TdFirst>
                    <Td colSpan="4">15</Td>
                </Tr>
                </tbody>
            </Table>
        </SearchDiv>
        
    )
}
const SearchDiv = styled.div`
  width: 400px;
  position: relative;
`
const SearcherSK = styled.div`
  width:100%;
  height:${({openUppg}) => (openUppg ? "100%" : "0")};
  position:absolute;
  top:35px;
  z-index: 2;
  background: #fff;
  overflow: hidden;
  transition: height 0.5s ease-in;
`
const TdFirstChange = styled(TdFirst)`
  width: 40%;    
`
const TdChange = styled(Td)`
  width: 50%;
`
const Form = styled.form`
  width:100%;
  height:50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LabelChange = styled(LabelNavTitle)`
  font-size:15px;
`
const SelectChange = styled(Select)`
  padding:2px 5px;
  margin-left: 5px;
  background: #fff;
`
export default BtnSearch
