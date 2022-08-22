import React, {useState, useContext} from 'react';
import {AppContext} from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSearch } from '@fortawesome/free-solid-svg-icons'
import { BtnDiv, BtnSerach, Select, Table, Tr, Th, TdFirst, Td, LabelNavTitle } from '../../styled'
import styled from 'styled-components'
import BtnSearchModal from "./BtnSearchModal";
import BdUppgModal from './BdUppgModal';
import {getRoleNameFromJWT} from "../../utills/UsefullFunctions";

const BtnSearch = () => {
    const [ showBtnSearch, setShowBtnSearch] = useState(false);
    const [ showBdUppgModal, setShowBdUppgModal] = useState(false);
    const [ openUppg, setOpenUppg ] = useState(false);

    const [ selectedUppg, setSelectedUppg ] = useState();
    const [ uppgId, setUppgId ] = useState('');

        /** Sborniy punklar (Collection points) kontekstdan **/
    const {openWell, pressureApi, allUppg, findStatus, findColor, handlerWellSearch, selectedWell} = useContext(AppContext);

    /** Skvajina turgan spni nomini topish, skvajinadagi sp (collectionPointId) id **/
    const cpNameFinder=(id)=> {
        let name="";
        /** for each bilan **/
        pressureApi.forEach(cp=>{
            if (cp.objectDto.id==id) {
                name = cp.objectDto.name;
            }
        })

        /** for bilan **/
        // for (let i = 0; i <pressureApi.length ; i++) {
        //     if (pressureApi[i].objectDto.id==id){
        //         name = pressureApi[i].objectDto.name;
        //     }
        // }

        /** map bilan **/
        // pressureApi.map(cp=>{
        //     if (cp.objectDto.id==id) {
        //         name = cp.objectDto.name;
        //     }
        // })
        return name;

    }

    const openBtnSearchModal = (id) => {
        setShowBtnSearch(prev => !prev);
        setUppgId(id);
    }
    const openBdUppgModal = () => {
        setShowBdUppgModal(prev => !prev)
    }
    // const sorted = [];
    // if(openWell){
    //     for (let s = 0; s < openWell.length; s++){
    //         sorted.push({
    //             number: openWell[s].objectDto.number - openWell[s].objectDto.number,
    //             id: openWell[s].objectDto.id,
    //         })
    //     }
    // }
    // console.log(sorted)

    const handlerAllUppg = e => {
        allUppg.forEach(selectUppg => {
            if(selectUppg.objectDto.id == e.target.value){
                setSelectedUppg(selectUppg)
                console.log(selectUppg)
            }
        })
    }

    return (
        <SearchDiv>
            <BtnDiv>
                <Select name="text" id="text" onChange={handlerAllUppg}>
                    <option value="">--Выберите--</option>
                    {allUppg.map((uppg, key) =>
                        <option key={key} value={uppg.objectDto.id}>{uppg.objectDto.name}</option>
                    )}
                </Select>
                <BtnSerach onClick={()=> setOpenUppg(!openUppg)}>
                    <FontAwesomeIcon icon={faSearch} /> Поиск скважины
                </BtnSerach>
                <BdUppgModal showBdUppgModal={showBdUppgModal}
                                setShowBdUppgModal={setShowBdUppgModal}/>
                <BtnSerach onClick={openBdUppgModal} disabled={getRoleNameFromJWT() === 'EMPLOYEE' || getRoleNameFromJWT() === 'OPERATOR' || getRoleNameFromJWT() === 'ENERGETIC' || getRoleNameFromJWT() === 'METROLOGIST' || getRoleNameFromJWT() === 'GEOLOGIST' ? true : false}> БД УППГ </BtnSerach>
            </BtnDiv>
            <SearcherSK openUppg={openUppg}>
                <Form>
                    <LabelChange htmlFor="searcher">Введите номер скважины:</LabelChange>
                    <SelectChange  htmlFor='searcher' id="searcher" onChange={handlerWellSearch}>
                        <option value=""> --Поиск скважины-- </option>
                        {openWell.map(wells =>
                            <option key={wells.objectDto.number} value={wells.objectDto.id}>{wells.objectDto.number}</option>
                        )}
                    </SelectChange>
                </Form>
                <Table>
                    <tbody>
                        <Tr>
                            <TdFirstChange>Скважина</TdFirstChange>
                            <TdChange>{selectedWell ? selectedWell.objectDto.number : ""}</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Сборный пункт</TdFirstChange>
                            <TdChange>{selectedWell ? cpNameFinder(selectedWell.objectDto.collectionPointId) : ""}</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Дата ввода в эксплуатацию</TdFirstChange>
                            <TdChange>{selectedWell ? selectedWell.objectDto.commissioningDate.slice(0,10) : ""}</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Горизонт</TdFirstChange>
                            <TdChange>{selectedWell ? selectedWell.objectDto.horizon : ""}</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Интервал перфарации</TdFirstChange>
                            <TdChange>{selectedWell ? Math.round(selectedWell.objectActionDto.perforation_min*10)/10 + "-" + Math.round(selectedWell.objectActionDto.perforation_max*10)/10 : ""}</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Состояние скважины</TdFirstChange>
                            <TdChange style={{color: `${selectedWell ? findColor(selectedWell.objectActionDto.status) : ''}`}}>{selectedWell ? findStatus(selectedWell.objectActionDto.status) : ""}</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Дата изменения состояния</TdFirstChange>
                            <TdChange>{selectedWell ? selectedWell.objectActionDto.createdAt.slice(0,10) : ""}</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Давление Pу, кгс/см²</TdFirstChange>
                            <TdChange>{selectedWell ? Math.round(selectedWell.objectActionDto.pressure*10)/10 : ""}</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Температура T, °C</TdFirstChange>
                            <TdChange>{selectedWell ? Math.round(selectedWell.objectActionDto.temperature*10)/10 : ""}</TdChange>
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
                        <Td>{(selectedWell ? Math.round(selectedWell.objectActionDto.expend*10)/10 : "")}</Td>
                        <Td>{(selectedWell ? Math.round(selectedWell.objectActionDto.expend*24*10)/10 : "")}</Td>
                        <Td>{(selectedWell ? Math.round(selectedWell.objectActionDto.expend*24*30*10)/10 : "")}</Td>
                        <Td>{(selectedWell ? Math.round(selectedWell.objectActionDto.expend*24*365*10)/10 : "")}</Td>
                    </Tr>
                    </tbody>
                </Table>
            </SearcherSK>
            <BtnSearchModal showBtnSearch={showBtnSearch}
                            setShowBtnSearch={setShowBtnSearch}
                            uppgId={uppgId}
                            selectedUppg={selectedUppg}
            />
            <Table style={{height:'360px'}}>
                <thead>
                <Tr>
                    <Th style={{position:'sticky', top:'0'}}>
                        {getRoleNameFromJWT() !== 'EMPLOYEE' &&
                         getRoleNameFromJWT() !== 'OPERATOR' &&
                         getRoleNameFromJWT() !== 'ENERGETIC' &&
                         getRoleNameFromJWT() !== 'METROLOGIST' &&
                         getRoleNameFromJWT() !== 'GEOLOGIST' ?
                             <FontAwesomeIcon style={{
                                                    position:'absolute',
                                                    top:'15px',
                                                    left:'10px',
                                                    cursor:'pointer'
                                                    }}
                                                    icon={faEdit}
                            onClick={() => openBtnSearchModal(selectedUppg ? selectedUppg.objectActionDto.uppgId : "")}/> : ""}
                        Наимено-<br/>вание</Th>
                    <Th style={{position:'sticky', top:'0'}}>Часовая</Th>
                    <Th style={{position:'sticky', top:'0'}}>За тек. сутки</Th>
                    <Th style={{position:'sticky', top:'0'}}>За тек. месяц</Th>
                    <Th style={{position:'sticky', top:'0'}}>С нач. года</Th>
                </Tr>
                </thead>
                <tbody>
                <Tr>
                    <TdFirst>Проектная <br/> производи-<br/>тельность <br/>тыс м<sup>3</sup>/год</TdFirst>
                    <Td>{(selectedUppg ? Math.round(selectedUppg.objectActionDto.designedPerformance*10/1000)/10 : "")}</Td>
                    <Td>{(selectedUppg ? Math.round((selectedUppg.objectActionDto.designedPerformance*24/1000)*10)/10 : "")}</Td>
                    <Td>{(selectedUppg ? Math.round((selectedUppg.objectActionDto.designedPerformance*24*30/1000)*10)/10 : "")}</Td>
                    <Td>{(selectedUppg ? Math.round((selectedUppg.objectActionDto.designedPerformance*24*365/1000)*10)/10 : "")}</Td>
                </Tr>
                <Tr>
                    <TdFirst>Фактическая <br/> производи-<br/>телность тыс м<sup>3</sup>/год</TdFirst>
                    <Td>{(selectedUppg ? Math.round((selectedUppg.objectActionDto.actualPerformance/1000)*10)/10 : "")}</Td>
                    <Td>{(selectedUppg ? Math.round((selectedUppg.objectActionDto.actualPerformance*24/1000)*10)/10 : "")}</Td>
                    <Td>{(selectedUppg ? Math.round((selectedUppg.objectActionDto.actualPerformance*24*30/1000)*10)/10 : "")}</Td>
                    <Td>{(selectedUppg ? Math.round((selectedUppg.objectActionDto.actualPerformance*24*365/1000)*10)/10 : "")}</Td>
                </Tr>
                <Tr>
                    <TdFirst>По газу, <br/> тыс м<sup>3</sup></TdFirst>
                    <Td>{(selectedUppg ? Math.round(selectedUppg.objectActionDto.expend/1000*10)/10 : "")}</Td>
                    <Td>{(selectedUppg ? Math.round(selectedUppg.objectActionDto.todayExpend/1000*10)/10 : "")}</Td>
                    <Td>{(selectedUppg ? Math.round(selectedUppg.objectActionDto.thisMonthExpend/1000*10)/10 : "")}</Td>
                    <Td>{(selectedUppg ? Math.round(selectedUppg.objectActionDto.actualPerformance/1000*10)/10 : "")}</Td>
                </Tr>
                <Tr>
                    <TdFirst>По конден-<br/>сату, тыс.т</TdFirst>
                    <Td>{(selectedUppg ? Math.round((selectedUppg.objectActionDto.condensate/1000)*10)/10 : "")}</Td>
                    <Td>{(selectedUppg ? Math.round((selectedUppg.objectActionDto.condensate*24/1000)*10)/10 : "")}</Td>
                    <Td>{(selectedUppg ? Math.round((selectedUppg.objectActionDto.condensate*24*30/1000)*10)/10 : "")}</Td>
                    <Td>{(selectedUppg ? Math.round((selectedUppg.objectActionDto.condensate*24*365/1000)*10)/10 : "")}</Td>
                </Tr>
                <Tr>
                    <TdFirst>По воде, <br/> тыс. т</TdFirst>
                    <Td colSpan="4">{selectedUppg ? Math.round((selectedUppg.objectActionDto.onWater/1000)*10)/10 : ""}</Td>
                </Tr>
                <Tr>
                    <TdFirst>Входное  давление, кгс\см<sup>2</sup></TdFirst>
                    <Td colSpan="4">{selectedUppg ? Math.round(selectedUppg.objectActionDto.incomePressure*10)/10 : ""}</Td>
                </Tr>
                <Tr>
                    <TdFirst>Выходное  давление, кгс\см<sup>2</sup></TdFirst>
                    <Td colSpan="4">{selectedUppg ? Math.round(selectedUppg.objectActionDto.exitPressure*10)/10 : ""}</Td>
                </Tr>
                <Tr>
                    <TdFirst>Входная температура, *С</TdFirst>
                    <Td colSpan="4">{selectedUppg ? Math.round(selectedUppg.objectActionDto.incomeTemperature*10)/10 : ""}</Td>
                </Tr>
                <Tr>
                    <TdFirst>Выходная температура, *С</TdFirst>
                    <Td colSpan="4">{selectedUppg ? Math.round(selectedUppg.objectActionDto.exitTemperature*10)/10 : ""}</Td>
                </Tr>
                </tbody>
            </Table>
        </SearchDiv>

    )
}
const SearchDiv = styled.div`
  width: 420px;
  position: relative;
`
const SearcherSK = styled.div`
  width:100%;
  height:${({openUppg}) => (openUppg ? "90%" : "0")};
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
