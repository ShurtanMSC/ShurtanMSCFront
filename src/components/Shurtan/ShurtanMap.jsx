import React from 'react'
import { ShurtanMapImg, H1shurtan, Status, H4, Circle, CircleImg, ShurtanMapContainer, Pcircle } from '../../styled'
import CircleBlack from '../../image/Shurtan/circleBlack.png'
import CircleGreen from '../../image/Shurtan/circleGreen.png'
import CirclePurple from '../../image/Shurtan/circlePurple.png'
import CircleRed from '../../image/Shurtan/circleRed.png'
import CircleYellow from '../../image/Shurtan/circleYellow.png'
import MapShurtan from '../../image/Shurtan/MapShurtan.jpg'

const ShurtanMap = () => {
    return (
        <ShurtanMapContainer>
            <H1shurtan>Месторождение Шуртан</H1shurtan>
            <ShurtanMapImg src={MapShurtan} alt="shurtanMapPhoto" />
            <Status>
                <H4>Индикаторы статуса скважин:</H4>
                <Circle>
                    <CircleImg src={CircleGreen} alt="cicrlePhoto"/>
                    <Pcircle>-в работе</Pcircle>
                </Circle>
                <Circle>
                    <CircleImg src={CircleYellow} alt="circlePhoto"/>
                    <Pcircle>-в простое</Pcircle>
                </Circle>
                <Circle>
                    <CircleImg src={CircleRed} alt="cicrlePhoto"/>
                    <Pcircle>-в ремонте</Pcircle>
                </Circle>
                <Circle>
                    <CircleImg src={CirclePurple} alt="cicrlePhoto"/>
                    <Pcircle>-в консервации</Pcircle>
                </Circle>
                <Circle>
                    <CircleImg src={CircleBlack} alt="cicrlePhoto"/>
                    <Pcircle>-в ликвидации</Pcircle>
                </Circle>
            </Status>
        </ShurtanMapContainer>
    )
}

export default ShurtanMap
