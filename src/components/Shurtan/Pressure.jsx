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
    const [ showMoreSP2, setShowMoreSP2 ] = useState(false);
    const [ showMoreSP3, setShowMoreSP3 ] = useState(false);
    const [ showMoreSP4, setShowMoreSP4 ] = useState(false);
    const [ showMoreBT5, setShowMoreBT5 ] = useState(false);
    const [ showMoreSP6, setShowMoreSP6 ] = useState(false);
    const [ showMoreSP9, setShowMoreSP9 ] = useState(false);
    const [ showMoreSP10, setShowMoreSP10 ] = useState(false);
    const [ showMoreSP12, setShowMoreSP12 ] = useState(false);
    const [ showMoreSP14, setShowMoreSP14 ] = useState(false);
    const [ showMoreSP15, setShowMoreSP15 ] = useState(false);
    const [ showMoreBT16, setShowMoreBT16 ] = useState(false);
    const [ showMoreBT17, setShowMoreBT17 ] = useState(false);
    const [ showMoreBT19, setShowMoreBT19 ] = useState(false);
    const [ showMoreSP20, setShowMoreSP20 ] = useState(false);
    const [ showMoreBT21, setShowMoreBT21 ] = useState(false);
    const [ showMoreSP22, setShowMoreSP22 ] = useState(false);
    const [ showMoreSP24, setShowMoreSP24 ] = useState(false);
    const [ showMoreSP26, setShowMoreSP26 ] = useState(false);
    const [ showMoreBT30, setShowMoreBT30 ] = useState(false);
    const [ showMoreBT34, setShowMoreBT34 ] = useState(false);

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
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
            </Tr>
            <TrNone showMore={showMore}>
                <TdFirstPresure>154</TdFirstPresure>
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
            <TrNone showMore={showMore}>
                <TdFirstPresure>155</TdFirstPresure>
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
            <TrNone showMore={showMore}>
                <TdFirstPresure>157</TdFirstPresure>
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
            <TrNone showMore={showMore}>
                <TdFirstPresure>158</TdFirstPresure>
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
            <TrNone showMore={showMore}>
                <TdFirstPresure>169</TdFirstPresure>
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
            <TrNone showMore={showMore}>
                <TdFirstPresure>309</TdFirstPresure>
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
            <TrNone showMore={showMore}>
                <TdFirstPresure>312</TdFirstPresure>
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
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-2
                    <FontAwesomeIconPresure icon={faChevronDown} onClick={() => setShowMoreSP2(!showMoreSP2)} showMoreSP2={showMoreSP2}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
            </Tr>
            <TrNoneSP2 showMoreSP2={showMoreSP2}>
                <TdFirstPresure>4</TdFirstPresure>
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
            </TrNoneSP2>
            <TrNoneSP2 showMoreSP2={showMoreSP2}>
                <TdFirstPresure>170</TdFirstPresure>
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
            </TrNoneSP2>
            <TrNoneSP2 showMoreSP2={showMoreSP2}>
                <TdFirstPresure>171</TdFirstPresure>
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
            </TrNoneSP2>
            <TrNoneSP2 showMoreSP2={showMoreSP2}>
                <TdFirstPresure>172</TdFirstPresure>
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
            </TrNoneSP2>
            <TrNoneSP2 showMoreSP2={showMoreSP2}>
                <TdFirstPresure>173</TdFirstPresure>
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
            </TrNoneSP2>
            <TrNoneSP2 showMoreSP2={showMoreSP2}>
                <TdFirstPresure>185</TdFirstPresure>
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
            </TrNoneSP2>
            <TrNoneSP2 showMoreSP2={showMoreSP2}>
                <TdFirstPresure>313</TdFirstPresure>
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
            </TrNoneSP2>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-3
                    <FontAwesomeIconPresure icon={faChevronDown} onClick={() => setShowMoreSP3(!showMoreSP3)} showMoreSP3={showMoreSP3}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
            </Tr>
            <TrNoneSP3 showMoreSP3={showMoreSP3}>
                <TdFirstPresure>13</TdFirstPresure>
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
            </TrNoneSP3>
            <TrNoneSP3 showMoreSP3={showMoreSP3}>
                <TdFirstPresure>52</TdFirstPresure>
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
            </TrNoneSP3>
            <TrNoneSP3 showMoreSP3={showMoreSP3}>
                <TdFirstPresure>120</TdFirstPresure>
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
            </TrNoneSP3>
            <TrNoneSP3 showMoreSP3={showMoreSP3}>
                <TdFirstPresure>122</TdFirstPresure>
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
            </TrNoneSP3>
            <TrNoneSP3 showMoreSP3={showMoreSP3}>
                <TdFirstPresure>219</TdFirstPresure>
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
            </TrNoneSP3>
            <TrNoneSP3 showMoreSP3={showMoreSP3}>
                <TdFirstPresure>275</TdFirstPresure>
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
            </TrNoneSP3>
            <TrNoneSP3 showMoreSP3={showMoreSP3}>
                <TdFirstPresure>315</TdFirstPresure>
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
            </TrNoneSP3>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-4
                    <FontAwesomeIconPresure icon={faChevronDown} onClick={() => setShowMoreSP4(!showMoreSP4)} showMoreSP4={showMoreSP4}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
            </Tr>
            <TrNoneSP4 showMoreSP4={showMoreSP4}>
                <TdFirstPresure>37</TdFirstPresure>
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
            </TrNoneSP4>
            <TrNoneSP4 showMoreSP4={showMoreSP4}>
                <TdFirstPresure>127</TdFirstPresure>
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
            </TrNoneSP4>
            <TrNoneSP4 showMoreSP4={showMoreSP4}>
                <TdFirstPresure>300</TdFirstPresure>
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
            </TrNoneSP4>
            <TrNoneSP4 showMoreSP4={showMoreSP4}>
                <TdFirstPresure>301</TdFirstPresure>
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
            </TrNoneSP4>
            <TrNoneSP4 showMoreSP4={showMoreSP4}>
                <TdFirstPresure>321</TdFirstPresure>
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
            </TrNoneSP4>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> BT-5
                    <FontAwesomeIconPresure icon={faChevronDown} onClick={() => setShowMoreBT5(!showMoreBT5)} showMoreBT5={showMoreBT5}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
            </Tr>
            <TrNoneBT5 showMoreBT5={showMoreBT5}>
                <TdFirstPresure>92</TdFirstPresure>
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
            </TrNoneBT5>
            <TrNoneBT5 showMoreBT5={showMoreBT5}>
                <TdFirstPresure>102</TdFirstPresure>
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
            </TrNoneBT5>
            <TrNoneBT5 showMoreBT5={showMoreBT5}>
                <TdFirstPresure>123</TdFirstPresure>
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
            </TrNoneBT5>
            <TrNoneBT5 showMoreBT5={showMoreBT5}>
                <TdFirstPresure>178</TdFirstPresure>
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
            </TrNoneBT5>
            <TrNoneBT5 showMoreBT5={showMoreBT5}>
                <TdFirstPresure>210</TdFirstPresure>
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
            </TrNoneBT5>
            <TrNoneBT5 showMoreBT5={showMoreBT5}>
                <TdFirstPresure>251</TdFirstPresure>
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
            </TrNoneBT5>
            <TrNoneBT5 showMoreBT5={showMoreBT5}>
                <TdFirstPresure>286</TdFirstPresure>
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
            </TrNoneBT5>
            <TrNoneBT5 showMoreBT5={showMoreBT5}>
                <TdFirstPresure>287</TdFirstPresure>
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
            </TrNoneBT5>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-6
                    <FontAwesomeIconPresure icon={faChevronDown} onClick={() => setShowMoreSP6(!showMoreSP6)} showMoreSP6={showMoreSP6}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
            </Tr>
            <TrNoneSP6 showMoreSP6={showMoreSP6}>
                <TdFirstPresure>14</TdFirstPresure>
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
            </TrNoneSP6>
            <TrNoneSP6 showMoreSP6={showMoreSP6}>
                <TdFirstPresure>197</TdFirstPresure>
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
            </TrNoneSP6>
            <TrNoneSP6 showMoreSP6={showMoreSP6}>
                <TdFirstPresure>199</TdFirstPresure>
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
            </TrNoneSP6>
            <TrNoneSP6 showMoreSP6={showMoreSP6}>
                <TdFirstPresure>208</TdFirstPresure>
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
            </TrNoneSP6>
            <TrNoneSP6 showMoreSP6={showMoreSP6}>
                <TdFirstPresure>211</TdFirstPresure>
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
            </TrNoneSP6>
            <TrNoneSP6 showMoreSP6={showMoreSP6}>
                <TdFirstPresure>218</TdFirstPresure>
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
            </TrNoneSP6>
            <TrNoneSP6 showMoreSP6={showMoreSP6}>
                <TdFirstPresure>252</TdFirstPresure>
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
            </TrNoneSP6>
            <TrNoneSP6 showMoreSP6={showMoreSP6}>
                <TdFirstPresure>253</TdFirstPresure>
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
            </TrNoneSP6>
            <TrNoneSP6 showMoreSP6={showMoreSP6}>
                <TdFirstPresure>254</TdFirstPresure>
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
            </TrNoneSP6>
            <TrNoneSP6 showMoreSP6={showMoreSP6}>
                <TdFirstPresure>257</TdFirstPresure>
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
            </TrNoneSP6>
            <TrNoneSP6 showMoreSP6={showMoreSP6}>
                <TdFirstPresure>288</TdFirstPresure>
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
            </TrNoneSP6>
            <TrNoneSP6 showMoreSP6={showMoreSP6}>
                <TdFirstPresure>289</TdFirstPresure>
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
            </TrNoneSP6>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-9
                    <FontAwesomeIconPresure icon={faChevronDown} onClick={() => setShowMoreSP9(!showMoreSP9)} showMoreSP9={showMoreSP9}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
            </Tr>
            <TrNoneSP9 showMoreSP9={showMoreSP9}>
                <TdFirstPresure>10</TdFirstPresure>
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
            </TrNoneSP9>
            <TrNoneSP9 showMoreSP9={showMoreSP9}>
                <TdFirstPresure>15</TdFirstPresure>
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
            </TrNoneSP9>
            <TrNoneSP9 showMoreSP9={showMoreSP9}>
                <TdFirstPresure>115</TdFirstPresure>
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
            </TrNoneSP9>
            <TrNoneSP9 showMoreSP9={showMoreSP9}>
                <TdFirstPresure>118</TdFirstPresure>
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
            </TrNoneSP9>
            <TrNoneSP9 showMoreSP9={showMoreSP9}>
                <TdFirstPresure>119</TdFirstPresure>
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
            </TrNoneSP9>
            <TrNoneSP9 showMoreSP9={showMoreSP9}>
                <TdFirstPresure>196</TdFirstPresure>
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
            </TrNoneSP9>
            <TrNoneSP9 showMoreSP9={showMoreSP9}>
                <TdFirstPresure>201</TdFirstPresure>
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
            </TrNoneSP9>
            <TrNoneSP9 showMoreSP9={showMoreSP9}>
                <TdFirstPresure>202</TdFirstPresure>
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
            </TrNoneSP9>
            <TrNoneSP9 showMoreSP9={showMoreSP9}>
                <TdFirstPresure>203</TdFirstPresure>
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
            </TrNoneSP9>
            <TrNoneSP9 showMoreSP9={showMoreSP9}>
                <TdFirstPresure>207</TdFirstPresure>
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
            </TrNoneSP9>
            <TrNoneSP9 showMoreSP9={showMoreSP9}>
                <TdFirstPresure>258</TdFirstPresure>
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
            </TrNoneSP9>
            <TrNoneSP9 showMoreSP9={showMoreSP9}>
                <TdFirstPresure>260</TdFirstPresure>
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
            </TrNoneSP9>
            <TrNoneSP9 showMoreSP9={showMoreSP9}>
                <TdFirstPresure>285</TdFirstPresure>
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
            </TrNoneSP9>
            <TrNoneSP9 showMoreSP9={showMoreSP9}>
                <TdFirstPresure>293 </TdFirstPresure>
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
            </TrNoneSP9>
            <TrNoneSP9 showMoreSP9={showMoreSP9}>
                <TdFirstPresure>306</TdFirstPresure>
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
            </TrNoneSP9>
            <TrNoneSP9 showMoreSP9={showMoreSP9}>
                <TdFirstPresure>307</TdFirstPresure>
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
            </TrNoneSP9>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-10
                    <FontAwesomeIconPresure icon={faChevronDown} onClick={() => setShowMoreSP10(!showMoreSP10)} showMoreSP10={showMoreSP10}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
            </Tr>
            <TrNoneSP10 showMoreSP10={showMoreSP10}>
                <TdFirstPresure>51</TdFirstPresure>
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
            </TrNoneSP10>
            <TrNoneSP10 showMoreSP10={showMoreSP10}>
                <TdFirstPresure>56</TdFirstPresure>
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
            </TrNoneSP10>
            <TrNoneSP10 showMoreSP10={showMoreSP10}>
                <TdFirstPresure>61</TdFirstPresure>
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
            </TrNoneSP10>
            <TrNoneSP10 showMoreSP10={showMoreSP10}>
                <TdFirstPresure>198</TdFirstPresure>
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
            </TrNoneSP10>
            <TrNoneSP10 showMoreSP10={showMoreSP10}>
                <TdFirstPresure>200</TdFirstPresure>
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
            </TrNoneSP10>
            <TrNoneSP10 showMoreSP10={showMoreSP10}>
                <TdFirstPresure>256</TdFirstPresure>
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
            </TrNoneSP10>
            <TrNoneSP10 showMoreSP10={showMoreSP10}>
                <TdFirstPresure>292</TdFirstPresure>
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
            </TrNoneSP10>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-12
                    <FontAwesomeIconPresure icon={faChevronDown} onClick={() => setShowMoreSP12(!showMoreSP12)} showMoreSP12={showMoreSP12}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
            </Tr>
            <TrNoneSP12 showMoreSP12={showMoreSP12}>
                <TdFirstPresure>125</TdFirstPresure>
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
            </TrNoneSP12>
            <TrNoneSP12 showMoreSP12={showMoreSP12}>
                <TdFirstPresure>128</TdFirstPresure>
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
            </TrNoneSP12>
            <TrNoneSP12 showMoreSP12={showMoreSP12}>
                <TdFirstPresure>129</TdFirstPresure>
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
            </TrNoneSP12>
            <TrNoneSP12 showMoreSP12={showMoreSP12}>
                <TdFirstPresure>130</TdFirstPresure>
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
            </TrNoneSP12>
            <TrNoneSP12 showMoreSP12={showMoreSP12}>
                <TdFirstPresure>132</TdFirstPresure>
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
            </TrNoneSP12>
            <TrNoneSP12 showMoreSP12={showMoreSP12}>
                <TdFirstPresure>136</TdFirstPresure>
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
            </TrNoneSP12>
            <TrNoneSP12 showMoreSP12={showMoreSP12}>
                <TdFirstPresure>278</TdFirstPresure>
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
            </TrNoneSP12>
            <TrNoneSP12 showMoreSP12={showMoreSP12}>
                <TdFirstPresure>305</TdFirstPresure>
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
            </TrNoneSP12>
            <TrNoneSP12 showMoreSP12={showMoreSP12}>
                <TdFirstPresure>314</TdFirstPresure>
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
            </TrNoneSP12>
            <TrNoneSP12 showMoreSP12={showMoreSP12}>
                <TdFirstPresure>320</TdFirstPresure>
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
            </TrNoneSP12>
            <TrNoneSP12 showMoreSP12={showMoreSP12}>
                <TdFirstPresure>323</TdFirstPresure>
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
            </TrNoneSP12>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-14
                    <FontAwesomeIconPresure icon={faChevronDown} onClick={() => setShowMoreSP14(!showMoreSP14)} showMoreSP14={showMoreSP14}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
            </Tr>
            <TrNoneSP14 showMoreSP14={showMoreSP14}>
                <TdFirstPresure>137</TdFirstPresure>
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
            </TrNoneSP14>
            <TrNoneSP14 showMoreSP14={showMoreSP14}>
                <TdFirstPresure>139</TdFirstPresure>
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
            </TrNoneSP14>
            <TrNoneSP14 showMoreSP14={showMoreSP14}>
                <TdFirstPresure>140</TdFirstPresure>
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
            </TrNoneSP14>
            <TrNoneSP14 showMoreSP14={showMoreSP14}>
                <TdFirstPresure>141</TdFirstPresure>
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
            </TrNoneSP14>
            <TrNoneSP14 showMoreSP14={showMoreSP14}>
                <TdFirstPresure>153</TdFirstPresure>
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
            </TrNoneSP14>
            <TrNoneSP14 showMoreSP14={showMoreSP14}>
                <TdFirstPresure>283</TdFirstPresure>
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
            </TrNoneSP14>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-15
                    <FontAwesomeIconPresure icon={faChevronDown} onClick={() => setShowMoreSP15(!showMoreSP15)} showMoreSP15={showMoreSP15}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
            </Tr>
            <TrNoneSP15 showMoreSP15={showMoreSP15}>
                <TdFirstPresure>3</TdFirstPresure>
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
            </TrNoneSP15>
            <TrNoneSP15 showMoreSP15={showMoreSP15}>
                <TdFirstPresure>151</TdFirstPresure>
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
            </TrNoneSP15>
            <TrNoneSP15 showMoreSP15={showMoreSP15}>
                <TdFirstPresure>160</TdFirstPresure>
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
            </TrNoneSP15>
            <TrNoneSP15 showMoreSP15={showMoreSP15}>
                <TdFirstPresure>282</TdFirstPresure>
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
            </TrNoneSP15>
            <TrNoneSP15 showMoreSP15={showMoreSP15}>
                <TdFirstPresure>284</TdFirstPresure>
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
            </TrNoneSP15>
            <TrNoneSP15 showMoreSP15={showMoreSP15}>
                <TdFirstPresure>296</TdFirstPresure>
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
            </TrNoneSP15>
            <TrNoneSP15 showMoreSP15={showMoreSP15}>
                <TdFirstPresure>311</TdFirstPresure>
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
            </TrNoneSP15>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> BT-16
                    <FontAwesomeIconPresure icon={faChevronDown} onClick={() => setShowMoreBT16(!showMoreBT16)} showMoreBT16={showMoreBT16}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
            </Tr>
            <TrNoneBT16 showMoreBT16={showMoreBT16}>
                <TdFirstPresure>83</TdFirstPresure>
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
            </TrNoneBT16>
            <TrNoneBT16 showMoreBT16={showMoreBT16}>
                <TdFirstPresure>282</TdFirstPresure>
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
            </TrNoneBT16>
            <TrNoneBT16 showMoreBT16={showMoreBT16}>
                <TdFirstPresure>131</TdFirstPresure>
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
            </TrNoneBT16>
            <TrNoneBT16 showMoreBT16={showMoreBT16}>
                <TdFirstPresure>225</TdFirstPresure>
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
            </TrNoneBT16>
            <TrNoneBT16 showMoreBT16={showMoreBT16}>
                <TdFirstPresure>240</TdFirstPresure>
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
            </TrNoneBT16>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> BT-17
                    <FontAwesomeIconPresure icon={faChevronDown} onClick={() => setShowMoreBT17(!showMoreBT17)} showMoreBT17={showMoreBT17}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
            </Tr>
            <TrNoneBT17 showMoreBT17={showMoreBT17}>
                <TdFirstPresure>23</TdFirstPresure>
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
            </TrNoneBT17>
            <TrNoneBT17 showMoreBT17={showMoreBT17}>
                <TdFirstPresure>79</TdFirstPresure>
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
            </TrNoneBT17>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> BT-19
                    <FontAwesomeIconPresure icon={faChevronDown} onClick={() => setShowMoreBT19(!showMoreBT19)} showMoreBT19={showMoreBT19}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
            </Tr>
            <TrNoneBT19 showMoreBT19={showMoreBT19}>
                <TdFirstPresure>21</TdFirstPresure>
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
            </TrNoneBT19>
            <TrNoneBT19 showMoreBT19={showMoreBT19}>
                <TdFirstPresure>71</TdFirstPresure>
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
            </TrNoneBT19>
            <TrNoneBT19 showMoreBT19={showMoreBT19}>
                <TdFirstPresure>72</TdFirstPresure>
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
            </TrNoneBT19>
            <TrNoneBT19 showMoreBT19={showMoreBT19}>
                <TdFirstPresure>144</TdFirstPresure>
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
            </TrNoneBT19>
            <TrNoneBT19 showMoreBT19={showMoreBT19}>
                <TdFirstPresure>145</TdFirstPresure>
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
            </TrNoneBT19>
            <TrNoneBT19 showMoreBT19={showMoreBT19}>
                <TdFirstPresure>163</TdFirstPresure>
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
            </TrNoneBT19>
            <TrNoneBT19 showMoreBT19={showMoreBT19}>
                <TdFirstPresure>179</TdFirstPresure>
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
            </TrNoneBT19>
            <TrNoneBT19 showMoreBT19={showMoreBT19}>
                <TdFirstPresure>244</TdFirstPresure>
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
            </TrNoneBT19>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-20
                    <FontAwesomeIconPresure icon={faChevronDown} onClick={() => setShowMoreSP20(!showMoreSP20)} showMoreSP20={showMoreSP20}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
            </Tr>
            <TrNoneSP20 showMoreSP20={showMoreSP20}>
                <TdFirstPresure>5</TdFirstPresure>
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
            </TrNoneSP20>
            <TrNoneSP20 showMoreSP20={showMoreSP20}>
                <TdFirstPresure>67</TdFirstPresure>
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
            </TrNoneSP20>
            <TrNoneSP20 showMoreSP20={showMoreSP20}>
                <TdFirstPresure>190</TdFirstPresure>
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
            </TrNoneSP20>
            <TrNoneSP20 showMoreSP20={showMoreSP20}>
                <TdFirstPresure>192</TdFirstPresure>
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
            </TrNoneSP20>
            <TrNoneSP20 showMoreSP20={showMoreSP20}>
                <TdFirstPresure>193</TdFirstPresure>
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
            </TrNoneSP20>
            <TrNoneSP20 showMoreSP20={showMoreSP20}>
                <TdFirstPresure>194</TdFirstPresure>
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
            </TrNoneSP20>
            <TrNoneSP20 showMoreSP20={showMoreSP20}>
                <TdFirstPresure>195</TdFirstPresure>
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
            </TrNoneSP20>
            <TrNoneSP20 showMoreSP20={showMoreSP20}>
                <TdFirstPresure>259</TdFirstPresure>
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
            </TrNoneSP20>
            <TrNoneSP20 showMoreSP20={showMoreSP20}>
                <TdFirstPresure>261</TdFirstPresure>
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
            </TrNoneSP20>
            <TrNoneSP20 showMoreSP20={showMoreSP20}>
                <TdFirstPresure>280</TdFirstPresure>
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
            </TrNoneSP20>
            <TrNoneSP20 showMoreSP20={showMoreSP20}>
                <TdFirstPresure>303</TdFirstPresure>
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
            </TrNoneSP20>
            <TrNoneSP20 showMoreSP20={showMoreSP20}>
                <TdFirstPresure>308</TdFirstPresure>
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
            </TrNoneSP20>
            <TrNoneSP20 showMoreSP20={showMoreSP20}>
                <TdFirstPresure>310</TdFirstPresure>
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
            </TrNoneSP20>
            <TrNoneSP20 showMoreSP20={showMoreSP20}>
                <TdFirstPresure>317</TdFirstPresure>
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
            </TrNoneSP20>
            <TrNoneSP20 showMoreSP20={showMoreSP20}>
                <TdFirstPresure>318</TdFirstPresure>
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
            </TrNoneSP20>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> BT-21
                    <FontAwesomeIconPresure icon={faChevronDown} onClick={() => setShowMoreBT21(!showMoreBT21)} showMoreBT21={showMoreBT21}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
            </Tr>
            <TrNoneBT21 showMoreBT21={showMoreBT21}>
                <TdFirstPresure>233</TdFirstPresure>
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
            </TrNoneBT21>
            <TrNoneBT21 showMoreBT21={showMoreBT21}>
                <TdFirstPresure>236</TdFirstPresure>
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
            </TrNoneBT21>
            <TrNoneBT21 showMoreBT21={showMoreBT21}>
                <TdFirstPresure>290</TdFirstPresure>
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
            </TrNoneBT21>
            <TrNoneBT21 showMoreBT21={showMoreBT21}>
                <TdFirstPresure>319</TdFirstPresure>
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
            </TrNoneBT21>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-22
                    <FontAwesomeIconPresure icon={faChevronDown} onClick={() => setShowMoreSP22(!showMoreSP22)} showMoreSP22={showMoreSP22}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
            </Tr>
            <TrNoneSP22 showMoreSP22={showMoreSP22}>
                <TdFirstPresure>1</TdFirstPresure>
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
            </TrNoneSP22>
            <TrNoneSP22 showMoreSP22={showMoreSP22}>
                <TdFirstPresure>2</TdFirstPresure>
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
            </TrNoneSP22>
            <TrNoneSP22 showMoreSP22={showMoreSP22}>
                <TdFirstPresure>53</TdFirstPresure>
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
            </TrNoneSP22>
            <TrNoneSP22 showMoreSP22={showMoreSP22}>
                <TdFirstPresure>55</TdFirstPresure>
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
            </TrNoneSP22>
            <TrNoneSP22 showMoreSP22={showMoreSP22}>
                <TdFirstPresure>57</TdFirstPresure>
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
            </TrNoneSP22>
            <TrNoneSP22 showMoreSP22={showMoreSP22}>
                <TdFirstPresure>304</TdFirstPresure>
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
            </TrNoneSP22>
            <TrNoneSP22 showMoreSP22={showMoreSP22}>
                <TdFirstPresure>316</TdFirstPresure>
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
            </TrNoneSP22>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-24
                    <FontAwesomeIconPresure  icon={faChevronDown} onClick={() => setShowMoreSP24(!showMoreSP24)} showMoreSP24={showMoreSP24}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
            </Tr>
            <TrNoneSP24 showMoreSP24={showMoreSP24}>
                <TdFirstPresure>33</TdFirstPresure>
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
            </TrNoneSP24>
            <TrNoneSP24 showMoreSP24={showMoreSP24}>
                <TdFirstPresure>161</TdFirstPresure>
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
            </TrNoneSP24>
            <TrNoneSP24 showMoreSP24={showMoreSP24}>
                <TdFirstPresure>164</TdFirstPresure>
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
            </TrNoneSP24>
            <TrNoneSP24 showMoreSP24={showMoreSP24} >
                <TdFirstPresure>165</TdFirstPresure>
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
            </TrNoneSP24>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> СП-26
                    <FontAwesomeIconPresure icon={faChevronDown} onClick={() => setShowMoreSP26(!showMoreSP26)} showMoreSP26={showMoreSP26}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
            </Tr>
            <TrNoneSP26 showMoreSP26={showMoreSP26}>
                <TdFirstPresure>103</TdFirstPresure>
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
            </TrNoneSP26>
            <TrNoneSP26 showMoreSP26={showMoreSP26}>
                <TdFirstPresure>167</TdFirstPresure>
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
            </TrNoneSP26>
            <TrNoneSP26 showMoreSP26={showMoreSP26}>
                <TdFirstPresure>174</TdFirstPresure>
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
            </TrNoneSP26>
            <TrNoneSP26 showMoreSP26={showMoreSP26}>
                <TdFirstPresure>175</TdFirstPresure>
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
            </TrNoneSP26>
            <TrNoneSP26 showMoreSP26={showMoreSP26}>
                <TdFirstPresure>182</TdFirstPresure>
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
            </TrNoneSP26>
            <TrNoneSP26 showMoreSP26={showMoreSP26}>
                <TdFirstPresure>183</TdFirstPresure>
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
            </TrNoneSP26>
            <TrNoneSP26 showMoreSP26={showMoreSP26}>
                <TdFirstPresure>184</TdFirstPresure>
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
            </TrNoneSP26>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> BT-30
                    <FontAwesomeIconPresure icon={faChevronDown} onClick={() => setShowMoreBT30(!showMoreBT30)} showMoreBT30={showMoreBT30}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
            </Tr>
            <TrNoneBT30 showMoreBT30={showMoreBT30}>
                <TdFirstPresure>174</TdFirstPresure>
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
            </TrNoneBT30>
            <TrNoneBT30 showMoreBT30={showMoreBT30}>
                <TdFirstPresure>7</TdFirstPresure>
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
            </TrNoneBT30>
            <TrNoneBT30 showMoreBT30={showMoreBT30}>
                <TdFirstPresure>96</TdFirstPresure>
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
            </TrNoneBT30>
            <TrNoneBT30 showMoreBT30={showMoreBT30}>
                <TdFirstPresure>101</TdFirstPresure>
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
            </TrNoneBT30>
            <TrNoneBT30 showMoreBT30={showMoreBT30}>
                <TdFirstPresure>108</TdFirstPresure>
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
            </TrNoneBT30>
            <TrNoneBT30 showMoreBT30={showMoreBT30}>
                <TdFirstPresure>110</TdFirstPresure>
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
            </TrNoneBT30>
            <Tr>
                <TdFirstPresure>
                    <FontAwesomeIconPresure icon={faEdit} onClick={openPressureModal}/> BT-34
                    <FontAwesomeIconPresure icon={faChevronDown} onClick={() => setShowMoreBT34(!showMoreBT34)} showMoreBT34={showMoreBT34}/>
                </TdFirstPresure>
                <Td>500</Td>
                <Td>500</Td>
                <Td>500</Td>
                <Td>8000</Td>
                <Td>9000</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>0</Td>
            </Tr>
            <TrNoneBT34 showMoreBT34={showMoreBT34}>
                <TdFirstPresure>264</TdFirstPresure>
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
            </TrNoneBT34>
            <TrNoneBT34 showMoreBT34={showMoreBT34}>
                <TdFirstPresure>266</TdFirstPresure>
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
            </TrNoneBT34>
            <TrNoneBT34 showMoreBT34={showMoreBT34}>
                <TdFirstPresure>267</TdFirstPresure>
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
            </TrNoneBT34>
            <TrNoneBT34 showMoreBT34={showMoreBT34}>
                <TdFirstPresure>268</TdFirstPresure>
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
            </TrNoneBT34>
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
    transition:0.5s;
    transform: ${({showPressureTable}) => (showPressureTable ? "rotate(180deg)" : "")};
    transform: ${({showMore}) => (showMore ? "rotate(180deg)" : "")};
    transform: ${({showMoreSP2}) => (showMoreSP2 ? "rotate(180deg)" : "")};
    transform: ${({showMoreSP3}) => (showMoreSP3 ? "rotate(180deg)" : "")};
    transform: ${({showMoreSP4}) => (showMoreSP4 ? "rotate(180deg)" : "")};
    transform: ${({showMoreBT5}) => (showMoreBT5 ? "rotate(180deg)" : "")};
    transform: ${({showMoreSP6}) => (showMoreSP6 ? "rotate(180deg)" : "")};
    transform: ${({showMoreSP9}) => (showMoreSP9 ? "rotate(180deg)" : "")};
    transform: ${({showMoreSP10}) => (showMoreSP10 ? "rotate(180deg)" : "")};
    transform: ${({showMoreSP12}) => (showMoreSP12 ? "rotate(180deg)" : "")};
    transform: ${({showMoreSP14}) => (showMoreSP14 ? "rotate(180deg)" : "")};
    transform: ${({showMoreSP15}) => (showMoreSP15 ? "rotate(180deg)" : "")};
    transform: ${({showMoreBT16}) => (showMoreBT16 ? "rotate(180deg)" : "")};
    transform: ${({showMoreBT17}) => (showMoreBT17 ? "rotate(180deg)" : "")};
    transform: ${({showMoreBT19}) => (showMoreBT19 ? "rotate(180deg)" : "")};
    transform: ${({showMoreSP20}) => (showMoreSP20 ? "rotate(180deg)" : "")};
    transform: ${({showMoreBT21}) => (showMoreBT21 ? "rotate(180deg)" : "")};
    transform: ${({showMoreSP22}) => (showMoreSP22 ? "rotate(180deg)" : "")};
    transform: ${({showMoreSP24}) => (showMoreSP24 ? "rotate(180deg)" : "")};
    transform: ${({showMoreSP26}) => (showMoreSP26 ? "rotate(180deg)" : "")};
  transform: ${({showMoreBT30}) => (showMoreBT30 ? "rotate(180deg)" : "")};
  transform: ${({showMoreBT34}) => (showMoreBT34 ? "rotate(180deg)" : "")};
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
const TrNoneSP2 = styled(Tr)`
  display: ${({showMoreSP2}) => ( showMoreSP2 ? "" : "none")};
  transition: 0.2s;
`
const TrNoneSP3 = styled(Tr)`
  display: ${({showMoreSP3}) => ( showMoreSP3 ? "" : "none")};
  transition: 0.2s;
`
const TrNoneSP4 = styled(Tr)`
  display: ${({showMoreSP4}) => ( showMoreSP4 ? "" : "none")};
  transition: 0.2s;
`
const TrNoneBT5 = styled(Tr)`
  display: ${({showMoreBT5}) => ( showMoreBT5 ? "" : "none")};
  transition: 0.2s;
`
const TrNoneSP6 = styled(Tr)`
  display: ${({showMoreSP6}) => ( showMoreSP6 ? "" : "none")};
  transition: 0.2s;
`
const TrNoneSP9 = styled(Tr)`
  display: ${({showMoreSP9}) => ( showMoreSP9 ? "" : "none")};
  transition: 0.2s;
`
const TrNoneSP10 = styled(Tr)`
  display: ${({showMoreSP10}) => ( showMoreSP10 ? "" : "none")};
  transition: 0.2s;
`
const TrNoneSP12 = styled(Tr)`
  display: ${({showMoreSP12}) => ( showMoreSP12 ? "" : "none")};
  transition: 0.2s;
`
const TrNoneSP14 = styled(Tr)`
  display: ${({showMoreSP14}) => ( showMoreSP14 ? "" : "none")};
  transition: 0.2s;
`
const TrNoneSP15 = styled(Tr)`
  display: ${({showMoreSP15}) => ( showMoreSP15 ? "" : "none")};
  transition: 0.2s;
`
const TrNoneBT16 = styled(Tr)`
  display: ${({showMoreBT16}) => ( showMoreBT16 ? "" : "none")};
  transition: 0.2s;
`
const TrNoneBT17 = styled(Tr)`
  display: ${({showMoreBT17}) => ( showMoreBT17 ? "" : "none")};
  transition: 0.2s;
`
const TrNoneBT19 = styled(Tr)`
  display: ${({showMoreBT19}) => ( showMoreBT19 ? "" : "none")};
  transition: 0.2s;
`
const TrNoneSP20 = styled(Tr)`
  display: ${({showMoreSP20}) => ( showMoreSP20 ? "" : "none")};
  transition: 0.2s; 
`
const TrNoneBT21 = styled(Tr)`
  display: ${({showMoreBT21}) => ( showMoreBT21 ? "" : "none")};
  transition: 0.2s;
`
const TrNoneSP22 = styled(Tr)`
  display: ${({showMoreSP22}) => ( showMoreSP22 ? "" : "none")};
  transition: 0.2s; 
`
const TrNoneSP24 = styled(Tr)`
  display: ${({showMoreSP24}) => ( showMoreSP24 ? "" : "none")};
  transition: 0.2s; 
`
const TrNoneSP26 = styled(Tr)`
  display: ${({showMoreSP26}) => ( showMoreSP26 ? "" : "none")};
  transition: 0.2s; 
`
const TrNoneBT30 = styled(Tr)`
  display: ${({showMoreBT30}) => ( showMoreBT30 ? "" : "none")};
  transition: 0.2s;
`
const TrNoneBT34 = styled(Tr)`
  display: ${({showMoreBT34}) => ( showMoreBT34 ? "" : "none")};
  transition: 0.2s;
`
export default Pressure
