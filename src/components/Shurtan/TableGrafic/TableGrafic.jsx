import React, {useState} from 'react'
import Forecast from './Forecast'
import { H2 } from '../../../styled'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import ForecastTwo from './ForecastTwo'
import TableGraficModal from "./TableGraficModal";

const TableGrafic = () => {
    const [openGrafic, setOpenGrafic] = useState(false);
    const [showTableGraficModal, setShowTableGraficModal] = useState(false);

    const openModal = () => {
        setShowTableGraficModal(prev => !prev);
    }

    return (
        <>
            <TableGraficModal showTableGraficModal={showTableGraficModal}
                              setShowTableGraficModal={setShowTableGraficModal}/>
        <TableGraficContainer>
            <TableGraficDiv openGrafic={openGrafic}>
                <H2>Оперативный прогноз добычи</H2>
                <WidthDiv>
                    <LeftDiv openGrafic={openGrafic} onClick={()=>setOpenGrafic(!openGrafic)}> <FontAwesomeIcon icon={faChevronLeft} /> </LeftDiv>
                    <EditDiv>
                        <SelectDiv>
                            <FontAwesomeIcon onClick={openModal} style={{cursor:'pointer'}} icon={faEdit} />
                            <P> Отбор газа млн.м³ </P> </SelectDiv>
                        <YearDiv>
                            <YearBox>
                                <YellowDiv></YellowDiv>
                                <YearP>2020 года</YearP>
                            </YearBox>
                            <YearBox>
                                <BlueDiv></BlueDiv>
                                <YearP>2021 года</YearP>
                            </YearBox>
                        </YearDiv>
                    </EditDiv>
                </WidthDiv>    
                <Forecast/>
                <WidthDiv>
                    <EditDiv>
                        <SelectDiv>
                            <FontAwesomeIcon onClick={openModal} style={{cursor:'pointer'}} icon={faEdit} />
                            <P> Отбор конденсата тыс.т </P> </SelectDiv>
                        <YearDiv>
                            <YearBox>
                                <YellowDiv></YellowDiv>
                                <YearP>2020 года</YearP>
                            </YearBox>
                            <YearBox>
                                <BlueDiv></BlueDiv>
                                <YearP>2021 года</YearP>
                            </YearBox>
                        </YearDiv>
                    </EditDiv>
                </WidthDiv>    
                <ForecastTwo/>
            </TableGraficDiv>
        </TableGraficContainer>
        </>
    )
}
const TableGraficContainer = styled.div`
    width: 400px;
    height: 810px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const TableGraficDiv = styled.div`
    width: ${({openGrafic})=> (openGrafic ? "850px" : "400px")};
    height: 98%;
    padding-top: 5%;
    position: absolute;
    right: 0;
    background-color: #fff;
    box-shadow: 0 0 2px #666;
    overflow: hidden;
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
    transform: ${({openGrafic})=> (openGrafic ? "rotate(180deg)" : "")};
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
export default TableGrafic
