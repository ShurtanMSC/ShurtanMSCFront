import React, { useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    AddGasNavbarModalDiv,
    NavbarModalP,
    DataP,
    ButtonNavbarCancel,
    ButtonNavbarSave,
    ButtonDiv,
    ParametersP,
    ParametersDiv,
    ParametersCard,
    ParametersInput,
    LabelNav,
    SelectNav,
    NavbarModalInput,
    AddFactDiv, CurrentMonthDiv
} from '../../../styled'
import styled from 'styled-components'

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

const modal = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "200px",
        opacity: 1,
        transition: { delay: 0.5 }
    }
}

const RegistrationWell = ({showRegistrationWell, setShowRegistrationWell}) => {
    const modalRef = useRef();

    const closeModal = e => {
        if( modalRef.current === e.target ) {
            setShowRegistrationWell(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showRegistrationWell){
            setShowRegistrationWell(false)
        }
    }, [setShowRegistrationWell, showRegistrationWell]);

    useEffect(()=>{
        document.addEventListener('keydown', keyPress);
        return() => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <AnimatePresence>
            { showRegistrationWell && (
                <motion.div className="backdrop"
                            variants={backdrop}
                            initial="hidden"
                            animate="visible"
                            ref={modalRef}
                            onClick={closeModal}
                >
                    <motion.div className="modalWellOparation"
                                variants={modal}
                    >
                        <AddGasNavbarModalDiv>
                            <form>
                                <ParametersDiv>
                                    <ParametersCard>
                                        <LabelNav htmlFor="well">Номер скважину</LabelNav>
                                        <ParametersInput type="number" name="well" id="well"/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <LabelNav htmlFor="uppg">УППГ</LabelNav>
                                        <SelectNav name="uppg" id="uppg">
                                            <option value="">--Выберите--</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </SelectNav>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <LabelNav htmlFor="sp">СП</LabelNav>
                                        <SelectNav name="sp" id="sp">
                                            <option value="">--Выберите--</option>
                                            <option value="sp-1">СП-1</option>
                                            <option value="sp-2">СП-2</option>
                                            <option value="sp-3">СП-3</option>
                                            <option value="sp-4">СП-4</option>
                                            <option value="bt-5">БТ-5</option>
                                            <option value="sp-6">СП-6</option>
                                            <option value="sp-9">СП-9</option>
                                            <option value="sp-10">СП-10</option>
                                            <option value="sp-12">СП-12</option>
                                            <option value="sp-14">СП-14</option>
                                            <option value="sp-15">СП-15</option>
                                            <option value="bt-16">БТ-16</option>
                                            <option value="bt-17">БТ-17</option>
                                            <option value="bt-19">БТ-19</option>
                                            <option value="sp-20">СП-20</option>
                                            <option value="bt-21">БТ-21</option>
                                            <option value="sp-22">СП-22</option>
                                            <option value="sp-24">СП-24</option>
                                            <option value="sp-26">СП-26</option>
                                            <option value="bt-30">БТ-30</option>
                                            <option value="sp-34">БТ-34</option>
                                        </SelectNav>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Горизонт</ParametersPChange>
                                        <ParametersInputChange type="text" name="text"/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Дата ввода в эксплуатацию</ParametersPChange>
                                        <ParametersInputChange type="date" name="date"/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Дата начала бурения</ParametersPChange>
                                        <ParametersInputChange type="date" name="date"/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <LabelNav htmlFor="category">Категория</LabelNav>
                                        <SelectNav name="category" id="category">
                                            <option value="">--Выберите--</option>
                                            <option value="mining">Добывающая</option>
                                            <option value="discharge">Нагнетательная</option>
                                            <option value="exploration">Разведочная</option>
                                            <option value="piezometric">Пьезометрическая</option>
                                        </SelectNav>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <LabelNav htmlFor="state">Состояние</LabelNav>
                                        <SelectNav name="state" id="state">
                                            <option value="">--Выберите--</option>
                                            <option value="working">в работе</option>
                                            <option value="idling">в простое</option>
                                            <option value="repairing">в ремонте</option>
                                            <option value="conservation">в консервации</option>
                                            <option value="liquidation">в ликвидации</option>
                                        </SelectNav>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Интервал перфарации</ParametersPChange>
                                        <ParametersInputChange type="number" name="number"/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Альтитуда, м</ParametersPChange>
                                        <ParametersInputChange type="number" name="number"/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Глубина, м</ParametersPChange>
                                        <ParametersInputChange type="number" name="number"/>
                                    </ParametersCard>
                                </ParametersDiv>
                                <CurrentMonthDivChange>
                                    <div>
                                        <NavbarModalP>Координаты</NavbarModalP>
                                        <NavbarModalInputChange type="number" name="number" placeholder="X="/>
                                    </div>
                                    <AddFactDiv>
                                        <NavbarModalP>Координаты</NavbarModalP>
                                        <NavbarModalInputChange type="number" name="number" placeholder="Y="/>
                                    </AddFactDiv>
                                </CurrentMonthDivChange>
                                <div>
                                    <NavbarModalP>Дата ввода данных</NavbarModalP>
                                    <DataP>2021-06-17 14:49:22</DataP>
                                </div>
                                <ButtonDivChange>
                                    <ButtonNavbarCancel onClick={() => setShowRegistrationWell(prev => !prev)}>Назад</ButtonNavbarCancel>
                                    <ButtonNavbarSave>Сохранить</ButtonNavbarSave>
                                </ButtonDivChange>
                            </form>
                        </AddGasNavbarModalDiv>
                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
    )
}
const ParametersPChange = styled(ParametersP)`
  text-align: center;
  width: 220px;
`
const ParametersInputChange = styled(ParametersInput)`
  width:170px;
`
const NavbarModalInputChange = styled(NavbarModalInput)`
  text-align: start;
  padding-left: 25px;
`
const CurrentMonthDivChange = styled(CurrentMonthDiv)`
  margin: 5px;
`
const ButtonDivChange = styled(ButtonDiv)`
  margin: 10px 0 0 0;
`

export default RegistrationWell
