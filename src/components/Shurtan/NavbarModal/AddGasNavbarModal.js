import React, { useRef, useEffect, useCallback, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AddGasNavbarModalDiv, NavbarModalH2, NavbarModalP, NavbarModalInput,
        CurrentMonthDiv, AddFactDiv, DataP, ButtonNavbarCancel,
        ButtonNavbarSave, ButtonDiv } from '../../../styled'
import {AppContext} from "../../../context";

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

const AddGasNavbarModal = ({showModal, setShowModal}) => {
    const {analysisGet, handlerAnalysisPut, handlerAnalysisPlan, handlerAnalysisFact, handlerAnalysisPlanYear, handlerAnalysisFactYear,
            handlerAnalysisLastYear} = useContext(AppContext);

    const modalRef = useRef();

    const closeModal = e => {
        if( modalRef.current === e.target ) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showModal){
            setShowModal(false)
        }
    }, [setShowModal, showModal]);

    useEffect(()=>{
        document.addEventListener('keydown', keyPress);
        return() => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <AnimatePresence>
            { showModal && (
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
                            <form onSubmit={handlerAnalysisPut}>
                                <NavbarModalH2>За текущий месяц</NavbarModalH2>
                                <CurrentMonthDiv>
                                    <div>
                                        <NavbarModalP>План добычи</NavbarModalP>
                                        <NavbarModalInput
                                            type="number"
                                            name="number"
                                            defaultValue={analysisGet[0].objectActionDto ? analysisGet[0].objectActionDto.planThisMonth : ""}
                                            onChange={handlerAnalysisPlan}/>
                                    </div>
                                    <AddFactDiv>
                                        <NavbarModalP>Факт. добыча</NavbarModalP>
                                        <NavbarModalInput
                                            type="number"
                                            name="number"
                                            defaultValue={analysisGet[0].objectActionDto ? analysisGet[0].objectActionDto.thisMonthExpend : ""}
                                            disabled
                                            onChange={handlerAnalysisFact}/>
                                    </AddFactDiv>
                                </CurrentMonthDiv>
                                <NavbarModalH2>С начала года</NavbarModalH2>
                                <CurrentMonthDiv>
                                    <div>
                                        <NavbarModalP>План добычи</NavbarModalP>
                                        <NavbarModalInput
                                            type="number"
                                            name="number"
                                            defaultValue={analysisGet[0].objectActionDto ? analysisGet[0].objectActionDto.planThisYear : ""}
                                            onChange={handlerAnalysisPlanYear}/>
                                    </div>
                                    <AddFactDiv>
                                        <NavbarModalP>Факт. добыча</NavbarModalP>
                                        <NavbarModalInput
                                            type="number"
                                            name="number"
                                            defaultValue={analysisGet[0].objectActionDto ? analysisGet[0].objectActionDto.expend : ""}
                                            disabled
                                            onChange={handlerAnalysisFactYear}/>
                                    </AddFactDiv>
                                </CurrentMonthDiv>
                                <NavbarModalH2>За аналог.период <br/>прошлого года</NavbarModalH2>
                                    <CurrentMonthDiv>
                                        <NavbarModalInput
                                            type="number"
                                            name="number"
                                            defaultValue={analysisGet[0].objectActionDto ? analysisGet[0].objectActionDto.lastYearExpend : ""}
                                            disabled
                                            onChange={handlerAnalysisLastYear}/>
                                    </CurrentMonthDiv>
                                <div>
                                    <NavbarModalP>Дата ввода данных</NavbarModalP>
                                    <DataP>
                                        {analysisGet[0].objectActionDto ? analysisGet[0].objectActionDto.createdAt.slice(0, 10) : ""} {analysisGet[0].objectActionDto ? analysisGet[0].objectActionDto.createdAt.slice(11, 19) : ""}
                                    </DataP>
                                </div>
                                <ButtonDiv>
                                    <ButtonNavbarSave>Сохранить</ButtonNavbarSave>
                                    <ButtonNavbarCancel onClick={() => setShowModal(prev => !prev)}>Назад</ButtonNavbarCancel>
                                </ButtonDiv>
                            </form>
                        </AddGasNavbarModalDiv>
                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
    )
}

export default AddGasNavbarModal
