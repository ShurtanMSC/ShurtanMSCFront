import React, { useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AddGasNavbarModalDiv, NavbarModalP, NavbarModalInput,
    CurrentMonthDiv, AddFactDiv, DataP, ButtonNavbarCancel,
    ButtonNavbarSave, ButtonDiv, DateInputDiv, DateInputNavbar, GeneralDiv } from '../../../styled'

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

const PersonnelManagementNavbarModal = ({showPersonnel, setShowPersonnel}) => {
    const modalRef = useRef();

    const closeModal = e => {
        if( modalRef.current === e.target ) {
            setShowPersonnel(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showPersonnel){
            setShowPersonnel(false)
        }
    }, [setShowPersonnel, showPersonnel]);

    useEffect(()=>{
        document.addEventListener('keydown', keyPress);
        return() => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <AnimatePresence>
            { showPersonnel && (
                <motion.div className="backdrop"
                            variants={backdrop}
                            initial="hidden"
                            animate="visible"
                            ref={modalRef}
                            onClick={closeModal}
                >
                    <motion.div className="modal"
                                variants={modal}
                    >
                        <AddGasNavbarModalDiv>
                            <form>
                                <CurrentMonthDiv>
                                    <div>
                                        <NavbarModalP>На работе</NavbarModalP>
                                        <NavbarModalInput type="number" name="number"/>
                                    </div>
                                    <AddFactDiv>
                                        <NavbarModalP>В отпуске</NavbarModalP>
                                        <NavbarModalInput type="number" name="number"/>
                                    </AddFactDiv>
                                </CurrentMonthDiv>
                                <CurrentMonthDiv>
                                    <div>
                                        <NavbarModalP>На больничном</NavbarModalP>
                                        <NavbarModalInput type="number" name="number"/>
                                    </div>
                                    <AddFactDiv>
                                        <NavbarModalP>Б\С</NavbarModalP>
                                        <NavbarModalInput type="number" name="number"/>
                                    </AddFactDiv>
                                </CurrentMonthDiv>
                                <div>
                                    <NavbarModalP>Дата ввода данных</NavbarModalP>
                                    <DataP>2021-06-17 14:49:22</DataP>
                                </div>
                                <ButtonDiv>
                                    <ButtonNavbarSave>Сохранить</ButtonNavbarSave>
                                    <ButtonNavbarCancel onClick={() => setShowPersonnel(prev => !prev)}>Назад</ButtonNavbarCancel>
                                </ButtonDiv>
                            </form>
                            <form>
                                <GeneralDiv>
                                    <NavbarModalP>Генерация отсчета</NavbarModalP>
                                    <DateInputDiv>
                                        <DateInputNavbar type="date" name="date"/>
                                        <DateInputNavbar type="date" name="date"/>
                                    </DateInputDiv>
                                </GeneralDiv>
                                <ButtonDiv>
                                    <ButtonNavbarSave>Сохранить</ButtonNavbarSave>
                                    <ButtonNavbarCancel onClick={() => setShowPersonnel(prev => !prev)}>Назад</ButtonNavbarCancel>
                                </ButtonDiv>
                            </form>
                        </AddGasNavbarModalDiv>
                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
    )
}

export default PersonnelManagementNavbarModal
