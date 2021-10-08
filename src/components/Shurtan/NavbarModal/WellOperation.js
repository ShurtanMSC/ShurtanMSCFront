import React, { useRef, useEffect, useCallback, useContext} from 'react';
import {AppContext} from "../../../context";
import { motion, AnimatePresence } from 'framer-motion'
import { AddGasNavbarModalDiv, NavbarModalP,
    // LabelNavTitle,
    DataP, ButtonNavbarCancel, ButtonNavbarSave, ButtonDiv,
    ParametersP, ParametersDiv, ParametersCard, ParametersInput,
    // SelectNavTitle,
    LabelNav, SelectNav } from '../../../styled'
import styled from 'styled-components';

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


const WellOperation = () => {

    const {
        getPoint,
        well, selectWell,
        getUppg, handlerWellOperation,
        showWellOperation, setShowWellOperation,
        horizonOper, handlerHorizonOperation,
        uppgOper, handlerUppgOperation,
        pointOper, handlerPointOperation,
        numberWellOper, handlerWellNumberOperation,
        changeDate, handlerChangeDate,
        state, handlerState,
        handlerCategory,
        handlerComDate, handlerDrillDate,
        handlerTemp, handlerPerMax, handlerPerMin, handlerPressure,perMin,perMax,pressure, temp,
    } = useContext(AppContext);

    const modalRef = useRef();

    const closeModal = e => {
        if( modalRef.current === e.target ) {
            setShowWellOperation(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showWellOperation){
            setShowWellOperation(false)
        }
    }, [setShowWellOperation, showWellOperation]);

    useEffect(()=>{
        document.addEventListener('keydown', keyPress);
        return() => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <AnimatePresence>
            { showWellOperation && (
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
                            <form onSubmit={handlerWellOperation}>
                                <ParametersDiv>
                                    <ParametersCard>
                                        <LabelNav htmlFor="uppg">УППГ</LabelNav>
                                        <SelectNav name="uppg" id="uppg" value={uppgOper} onChange={handlerUppgOperation} required>
                                            <option value="">--Выберите--</option>
                                            {getUppg.map((el, u) =>
                                                <option key={u} value={el.id}>{el.name}</option>
                                            )}
                                        </SelectNav>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <LabelNav htmlFor="sp">СП</LabelNav>
                                        <SelectNav name="sp" id="sp" value={pointOper} onChange={handlerPointOperation} required>
                                            <option value="">--Выберите--</option>
                                            {getPoint.map((el, p) =>
                                                <option key={p} value={el.id}>{el.name}</option>
                                            )}
                                        </SelectNav>
                                    </ParametersCard>
                                    <ParametersCard>
                                       <LabelNav htmlFor="well">Выберите скважину</LabelNav>
                                        <SelectNav name="well" id="well" value={numberWellOper} onChange={handlerWellNumberOperation} required>
                                            <option value="">--Выберите--</option>
                                            {well.map((el, w) =>
                                                <option key={w} value={el.id}>{el.number}</option>
                                            )}
                                        </SelectNav>
                                    </ParametersCard>
                                    <ParametersCard>
                                            <ParametersPChange>Горизонт</ParametersPChange>
                                            <ParametersInputChange defaultValue={horizonOper}
                                                                   onChange={handlerHorizonOperation} type="text" name="text" required/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Дата ввода в эксплуатацию</ParametersPChange>
                                        <ParametersInputChange defaultValue={selectWell !== null ? selectWell.objectDto.commissioningDate.slice(0, 10) : ''}
                                                               onChange={handlerComDate} type="date" name="date" required/>
                                    </ParametersCard>

                                    <ParametersCard>
                                        <ParametersPChange>Дата начала бурения</ParametersPChange>
                                        <ParametersInputChange defaultValue={selectWell !== null ? selectWell.objectDto.drillingStartDate.slice(0, 10) : ''}
                                                               onChange={handlerDrillDate} type="date" name="date" required/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <LabelNav htmlFor="category">Категория</LabelNav>
                                        <SelectNav defaultValue={selectWell !== null ? selectWell.objectDto.category : false}
                                                   onChange={handlerCategory} name="category" id="category" required>

                                            <option value="">--Выберите--</option>
                                            <option value="MINING" /*selected={selectWell !== null ? (selectWell.objectDto.category==="MINING") : false}*/>Добывающая</option>
                                            <option value="DISCHARGE" /*selected={selectWell !== null ? (selectWell.objectDto.category==="DISCHARGE") : false}*/>Нагнетательная</option>
                                            <option value="EXPLORATION" /*selected={selectWell !== null ? (selectWell.objectDto.category==="EXPLORATION") : false}*/>Разведочная</option>
                                            <option value="PIEZOMETRIC" /*selected={selectWell !== null ? (selectWell.objectDto.category==="PIEZOMETRIC") : false}*/>Пьезометрическая</option>
                                        </SelectNav>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <LabelNav htmlFor="state">Состояние</LabelNav>
                                        <SelectNav defaultValue={state} onChange={handlerState} name="state" id="state" required>
                                            <option value="">--Выберите--</option>
                                            <option value="IN_WORK" /*selected={selectWell !== null ? (selectWell.objectActionDto.status==="IN_WORK") : false}*/>в работе</option>
                                            <option value="IN_IDLE" /*selected={selectWell !== null ? (selectWell.objectActionDto.status==="IN_IDLE") : false}*/>в простое</option>
                                            <option value="IN_REPAIR" /*selected={selectWell !== null ? (selectWell.objectActionDto.status==="IN_REPAIR") : false}*/>в ремонте</option>
                                            <option value="IN_CONSERVATION" /*selected={selectWell !== null ? (selectWell.objectActionDto.status==="IN_CONSERVATION") : false}*/>в консервации</option>
                                            <option value="IN_LIQUIDATION" /*selected={selectWell !== null ? (selectWell.objectActionDto.status==="IN_LIQUIDATION") : false}*/>в ликвидации</option>
                                        </SelectNav>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Изменение состояния</ParametersPChange>
                                        <ParametersInputChange defaultValue={changeDate} onChange={handlerChangeDate} type="date" name="date" required/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Интервал перфарации мин</ParametersPChange>
                                        <ParametersInputChange defaultValue={perMin}
                                                               onChange={handlerPerMin} type="number" name="number" required/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Интервал перфарации мах</ParametersPChange>
                                        <ParametersInputChange defaultValue={perMax}
                                                               onChange={handlerPerMax} type="number" name="number" required/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Устьевое давление Ру, кгс/см²</ParametersPChange>
                                        <ParametersInputChange defaultValue={/*selectWell !== null ? selectWell.objectActionDto.pressure : ''*/pressure}
                                                               onChange={handlerPressure} type="number" name="number" required/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Температура на устье, °С</ParametersPChange>
                                        <ParametersInputChange defaultValue={/*selectWell !== null ? selectWell.objectActionDto.temperature : ''*/temp}
                                                               onChange={handlerTemp} type="number" name="number" required/>
                                    </ParametersCard>
                                </ParametersDiv>
                                <div>
                                    <NavbarModalP>Дата ввода данных</NavbarModalP>
                                    <DataP>2021-06-17 14:49:22</DataP>
                                </div>
                                <ButtonDiv>
                                    <ButtonNavbarSave>Сохранить</ButtonNavbarSave>
                                    <ButtonNavbarCancel onClick={() => setShowWellOperation(prev => !prev)}>Назад</ButtonNavbarCancel>
                                </ButtonDiv>
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

export default WellOperation
