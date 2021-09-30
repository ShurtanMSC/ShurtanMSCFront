import React, { useRef, useEffect, useCallback, useContext } from 'react';
import {AppContext} from "../../../context";
import { motion, AnimatePresence } from 'framer-motion'
import { AddGasNavbarModalDiv, NavbarModalP,
    // LabelNavTitle,
    DataP, ButtonNavbarCancel, ButtonNavbarSave, ButtonDiv,
    ParametersP, ParametersDiv, ParametersCard, ParametersInput,
    // SelectNavTitle,
    LabelNav, SelectNav } from '../../../styled'
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

const WellOperation = () => {
    const {
        uppg, handlerUppg,
        point, handlerPoint, getPoint,
        well, selectWell,
        numberWell, handlerNumberWell,
        getUppg, handlerWellOperation,
        showWellOperation, setShowWellOperation,
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
                                        <SelectNav name="uppg" id="uppg" value={uppg} onChange={handlerUppg}>
                                            <option value="">--Выберите--</option>
                                            {getUppg.map((el, u) =>
                                                <option key={u} value={el.id}>{el.name}</option>
                                            )}
                                        </SelectNav>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <LabelNav htmlFor="sp">СП</LabelNav>
                                        <SelectNav name="sp" id="sp" value={point} onChange={handlerPoint} required>
                                            <option value="">--Выберите--</option>
                                            {getPoint.map((el, p) =>
                                                <option key={p} value={el.id}>{el.name}</option>
                                            )}
                                        </SelectNav>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <LabelNav htmlFor="well">Выберите скважину</LabelNav>
                                        <SelectNav name="well" id="well" value={numberWell} onChange={handlerNumberWell}>
                                            <option value="">--Выберите--</option>
                                            {well.map((el, w) =>
                                                <option key={w} value={el.id}>{el.number}</option>
                                            )}
                                        </SelectNav>
                                    </ParametersCard>
                                    <ParametersCard>
                                            <ParametersPChange>Горизонт</ParametersPChange>
                                            <ParametersInputChange defaultValue='' type="text" name="text"/>
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
                                        <ParametersPChange>Изменение состояния</ParametersPChange>
                                        <ParametersInputChange type="date" name="date"/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Интервал перфарации</ParametersPChange>
                                        <ParametersInputChange type="number" name="number"/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Устьевое давление Ру, кгс/см²</ParametersPChange>
                                        <ParametersInputChange type="number" name="number"/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Температура на устье, °С</ParametersPChange>
                                        <ParametersInputChange type="number" name="number"/>
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
