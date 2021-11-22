import React, {useEffect, useState} from 'react'
import Forecast from './Forecast'
import { H2 } from '../../../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import ForecastTwo from './ForecastTwo'
import TableGraficModal from "./TableGraficModal";
import TableGraficModalTwo from "./TableGraficModalTwo";
import axios from "axios";
import {BASE_URL_FORECAST_GAS} from "../../../utills/constant"
import {BASE_URL_FORECAST_CONDENSATE} from "../../../utills/constant"
import {configHeader} from '../../../utills/congifHeader';
import {getRoleNameFromJWT} from "../../../utills/UsefullFunctions";

const TableGrafic = () => {
    const [openGrafic, setOpenGrafic] = useState(false);
    const [turnIcon, setTurnIcon] = useState(false);
    const [showTableGraficModal, setShowTableGraficModal] = useState(false);
    const [showTableGraficModalTwo, setShowTableGraficModalTwo] = useState(false);
    const [data,setData] = useState([]);
    const [dataCond, setDataCond] = useState([]);

    const openModal = () => {
        setShowTableGraficModal(prev => !prev);
    }
    const openModalTwo = () => {
        setShowTableGraficModalTwo(prev => !prev);
    }
    const openGraficMore = () => {
        setOpenGrafic(!openGrafic);
        setTurnIcon(!turnIcon);
    }
    // get Api
    useEffect(()=> {
        axios.get(BASE_URL_FORECAST_GAS + 1 + '/' + ((new Date().getFullYear()) - 1) + '/' + new Date().getFullYear(), configHeader)
            .then(res => {
                if(res.data.object.length !== 0){
                    setData(res.data.object);
                }
            });
        axios.get(BASE_URL_FORECAST_CONDENSATE + 1 + '/' + ((new Date().getFullYear()) - 1 ) + '/' + new Date().getFullYear(), configHeader)
        .then(res => {
            if(res.data.object.length !== 0){
                setDataCond(res.data.object);
            }
        })
    }, [])

    return (
        <>
            <TableGraficModal showTableGraficModal={showTableGraficModal}
                              setShowTableGraficModal={setShowTableGraficModal}
                              setData={setData} data={data}
            />
            <TableGraficModalTwo showTableGraficModalTwo={showTableGraficModalTwo}
                                 setShowTableGraficModalTwo={setShowTableGraficModalTwo}
                                 setDataCond={setDataCond} dataCond={dataCond}
            />
        <TableGraficContainer>
            <TableGraficDiv openGrafic={openGrafic}>
                <H2>Оперативный прогноз добычи</H2>
                <WidthDiv>
                    <LeftDiv onClick={openGraficMore}>
                        <FontAwesomeIconTableGrafic rotation={turnIcon ? 180 : 0} icon={faChevronLeft} />
                    </LeftDiv>
                    <EditDiv>
                        <SelectDiv>
                            {getRoleNameFromJWT() !== 'EMPLOYEE' && getRoleNameFromJWT() !== 'OPERATOR' && getRoleNameFromJWT() !== 'ENERGETIC' && getRoleNameFromJWT() !== 'METROLOGIST' && getRoleNameFromJWT() !== 'GEOLOGIST' ? <FontAwesomeIcon
                                onClick={openModal}
                                style={{cursor:'pointer'}}
                                icon={faEdit} /> : ""}
                            <P> Отбор газа млн.м³ </P> </SelectDiv>
                        <YearDiv>
                            <YearBox>
                                <YellowDiv></YellowDiv>
                                <YearP>{new Date().getFullYear()-1} года</YearP>
                            </YearBox>
                            <YearBox>
                                <BlueDiv></BlueDiv>
                                <YearP>{new Date().getFullYear()} года</YearP>
                            </YearBox>
                        </YearDiv>
                    </EditDiv>
                </WidthDiv>
                <GraficDiv>
                    <Forecast
                        data={data}
                    />
                </GraficDiv>
                <WidthDiv>
                    <EditDiv>
                        <SelectDiv>
                            {getRoleNameFromJWT() !== 'EMPLOYEE' && getRoleNameFromJWT() !== 'OPERATOR' && getRoleNameFromJWT() !== 'ENERGETIC' && getRoleNameFromJWT() !== 'METROLOGIST' && getRoleNameFromJWT() !== 'GEOLOGIST' ? <FontAwesomeIcon
                                onClick={openModalTwo}
                                style={{cursor:'pointer'}}
                                icon={faEdit} /> : ""}
                            <P> Отбор конденсата тыс.т </P> </SelectDiv>
                        <YearDiv>
                            <YearBox>
                                <YellowDiv></YellowDiv>
                                <YearP>{new Date().getFullYear()-1} года</YearP>
                            </YearBox>
                            <YearBox>
                                <BlueDiv></BlueDiv>
                                <YearP>{new Date().getFullYear()} года</YearP>
                            </YearBox>
                        </YearDiv>
                    </EditDiv>
                </WidthDiv>
                <GraficDiv>
                    <ForecastTwo
                        dataCond={dataCond}
                    />
                </GraficDiv>
            </TableGraficDiv>
        </TableGraficContainer>
        </>
    )
}
const TableGraficContainer = styled.div`
    width: 400px;
    height: 765px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const TableGraficDiv = styled.div`
    width: ${({openGrafic})=> (openGrafic ? "850px" : "400px")};
    height: 98%;
    padding-top: 5px;
    position: absolute;
    right: 0;
    background-color: #fff;
    box-shadow: 0 0 2px #666;
    overflow: hidden;
    transition:0.2s;
`
const WidthDiv = styled.div`
    display: flex;
`
const LeftDiv = styled.div`
    border: none;
    background-color: #FF914B;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    color:#fff;
    cursor:pointer;
`
const FontAwesomeIconTableGrafic = styled(FontAwesomeIcon)`
    transition: 0.5s;  
`
const EditDiv = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
`
const SelectDiv = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
`
const P = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    align-items: center;
    color: #000000;
    font-size: 16px;
    margin-left: 5px;
`
const YearDiv = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(10px);
`
const YearBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-child(1){
        margin-right: 15px;
    }
`
const YellowDiv = styled.div`
    border: none;
    width: 15px;
    height: 15px;
    border-radius: 3px;
    background: #FF914B;
`
const BlueDiv = styled.div`
    border: none;
    width: 15px;
    height: 15px;
    border-radius: 3px;
    background: #00A0DC;
`
const YearP = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    color: #000000;
    margin-left: 5px;
`
const GraficDiv = styled.div`
  width:400px;
  height:320px;
  @media(min-width:401px){
    width:850px;
  }
`
export default TableGrafic
