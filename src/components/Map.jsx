import React from 'react'
import MainPageMap from '../image/MainPage/mainPageMapWay.svg'
import Head from '../image/MainPage/head.png'
import styled from 'styled-components'
import { MainPageImg, MapBox, HeadImg } from '../styled'

const Map = () => {
    return (
        <MapBox>
            <MainPageImg src={MainPageMap} alt="map" />
            <HeadImg src={Head} alt="headPhoto" />
        </MapBox>
    )
}

export default Map
