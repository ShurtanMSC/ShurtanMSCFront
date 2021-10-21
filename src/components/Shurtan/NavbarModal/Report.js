import React, { useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AddGasNavbarModalDiv, NavbarModalH2, NavbarModalP, NavbarModalInput,
    CurrentMonthDiv, AddFactDiv, DataP, ButtonNavbarCancel,
    ButtonNavbarSave, ButtonDiv } from '../../../styled'

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
const Report = ({showReport, setShowReport}) => {
    const modalRef = useRef();

    const closeModal = e => {
        if( modalRef.current === e.target ) {
            setShowReport(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showReport){
            setShowReport(false)
        }
    }, [setShowReport, showReport]);

    useEffect(()=>{
        document.addEventListener('keydown', keyPress);
        return() => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <AnimatePresence>
            { showReport && (
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
                                <NavbarModalH2>За текущий месяц</NavbarModalH2>
                                <CurrentMonthDiv>
                                    <div>
                                        <NavbarModalP>План добычи</NavbarModalP>
                                        <NavbarModalInput type="number" name="number"/>
                                    </div>
                                    <AddFactDiv>
                                        <NavbarModalP>Факт. добыча</NavbarModalP>
                                        <NavbarModalInput type="number" name="number"/>
                                    </AddFactDiv>
                                </CurrentMonthDiv>
                                <NavbarModalH2>С начала года</NavbarModalH2>
                                <CurrentMonthDiv>
                                    <div>
                                        <NavbarModalP>План добычи</NavbarModalP>
                                        <NavbarModalInput type="number" name="number"/>
                                    </div>
                                    <AddFactDiv>
                                        <NavbarModalP>Факт. добыча</NavbarModalP>
                                        <NavbarModalInput type="number" name="number"/>
                                    </AddFactDiv>
                                </CurrentMonthDiv>
                                <NavbarModalH2>За аналог.период <br/>прошлого года</NavbarModalH2>
                                <CurrentMonthDiv>
                                    <NavbarModalInput type="number" name="number"/>
                                </CurrentMonthDiv>
                                <div>
                                    <NavbarModalP>Дата ввода данных</NavbarModalP>
                                    <DataP>2021-06-17 14:49:22</DataP>
                                </div>
                                <ButtonDiv>
                                    <ButtonNavbarSave>Сохранить</ButtonNavbarSave>
                                    <ButtonNavbarCancel onClick={() => setShowReport(prev => !prev)}>Назад</ButtonNavbarCancel>
                                </ButtonDiv>
                            </form>
                        </AddGasNavbarModalDiv>
                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
    )
}

export default Report