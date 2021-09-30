import React, { useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AddGasNavbarModalDiv, NavbarModalP, DataP, ButtonNavbarCancel, ButtonNavbarSave, ButtonDiv,
    ParametersP, ParametersDiv, ParametersCard, ParametersInput } from '../../../styled'

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

const ReservoirParameters = ({showParameters, setShowParameters}) => {
    const modalRef = useRef();

    const closeModal = e => {
        if( modalRef.current === e.target ) {
            setShowParameters(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showParameters){
            setShowParameters(false)
        }
    }, [setShowParameters, showParameters]);

    useEffect(()=>{
        document.addEventListener('keydown', keyPress);
        return() => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <AnimatePresence>
            { showParameters && (
                <motion.div className="backdrop"
                            variants={backdrop}
                            initial="hidden"
                            animate="visible"
                            ref={modalRef}
                            onClick={closeModal}
                >
                    <motion.div className="modalParameters"
                                variants={modal}
                    >
                        <AddGasNavbarModalDiv>
                            <form>
                                <ParametersDiv>
                                    <ParametersCard>
                                        <ParametersP>Коэффицент фильтрационного сопротивления - a</ParametersP>
                                        <ParametersInput type="number" name="number"/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersP>Коэффицент фильтрационного сопротивления - b</ParametersP>
                                        <ParametersInput type="number" name="number"/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersP>Начальное пластовое давление Р.н.пл [кгс/см²]</ParametersP>
                                        <ParametersInput type="number" name="number"/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersP>Начальная пластовая температура Т.пл. [°C]</ParametersP>
                                        <ParametersInput type="number" name="number"/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersP>Критическое давление газа Р.кр [кгс/см²]</ParametersP>
                                        <ParametersInput type="number" name="number"/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersP>Критическая температура газа Т.кр [°C]</ParametersP>
                                        <ParametersInput type="number" name="number"/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersP>Начальные запасы газа Vo [млн.м³]</ParametersP>
                                        <ParametersInput type="number" name="number"/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersP>Сопротивление жидких компонентов - S</ParametersP>
                                        <ParametersInput type="number" name="number"/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersP>Сопротивление НКТ - θ</ParametersP>
                                        <ParametersInput type="number" name="number"/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersP>Коэффициент сверхсжимаемости газа в начале разработки Zн</ParametersP>
                                        <ParametersInput type="number" name="number"/>
                                    </ParametersCard>
                                </ParametersDiv>
                                <div>
                                    <NavbarModalP>Дата ввода данных</NavbarModalP>
                                    <DataP>2021-06-17 14:49:22</DataP>
                                </div>
                                <ButtonDiv>
                                    <ButtonNavbarSave>Сохранить</ButtonNavbarSave>
                                    <ButtonNavbarCancel onClick={() => setShowParameters(prev => !prev)}>Назад</ButtonNavbarCancel>
                                </ButtonDiv>
                            </form>
                        </AddGasNavbarModalDiv>
                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
    )
}

export default ReservoirParameters
