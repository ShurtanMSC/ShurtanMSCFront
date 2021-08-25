import React, { useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AddGasNavbarModalDiv, NavbarModalH2, NavbarModalP, NavbarModalInput,
    CurrentMonthDiv, DataP, ButtonNavbarCancel,
    ButtonNavbarSave, ButtonDiv} from '../../../styled';
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

const ProductionIndicators = ({showProduction, setShowProduction}) => {
    const modalRef = useRef();

    const closeModal = e => {
        if( modalRef.current === e.target ) {
            setShowProduction(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showProduction){
            setShowProduction(false)
        }
    }, [setShowProduction, showProduction]);

    useEffect(()=>{
        document.addEventListener('keydown', keyPress);
        return() => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <AnimatePresence>
            { showProduction && (
                <motion.div className="backdrop"
                            variants={backdrop}
                            initial="hidden"
                            animate="visible"
                            ref={modalRef}
                            onClick={closeModal}
                >
                    <motion.div className="modalProduction"
                                variants={modal}
                    >
                        <AddGasNavbarModalDiv>
                            <form>
                                <NavbarModalH2>Газ</NavbarModalH2>
                                <CurrentMonthDiv>
                                    <ProductionDiv>
                                        <ProductionNavbarModalP>Часовая</ProductionNavbarModalP>
                                        <NavbarModalInput type="number" name="number"/>
                                    </ProductionDiv>
                                    <ProductionDiv>
                                        <ProductionNavbarModalP>За текущие сутки</ProductionNavbarModalP>
                                        <NavbarModalInput type="number" name="number"/>
                                    </ProductionDiv>
                                    <ProductionDiv>
                                        <ProductionNavbarModalP>За текущий месяц</ProductionNavbarModalP>
                                        <NavbarModalInput type="number" name="number"/>
                                    </ProductionDiv>
                                    <ProductionDiv>
                                        <ProductionNavbarModalP>С начала года</ProductionNavbarModalP>
                                        <NavbarModalInput type="number" name="number"/>
                                    </ProductionDiv>
                                    <ProductionDiv>
                                        <ProductionNavbarModalP>С начала эксп.</ProductionNavbarModalP>
                                        <NavbarModalInput type="number" name="number"/>
                                    </ProductionDiv>
                                </CurrentMonthDiv>
                                <NavbarModalH2>Конденсат</NavbarModalH2>
                                <CurrentMonthDiv>
                                    <ProductionDiv>
                                        <ProductionNavbarModalP>Часовая</ProductionNavbarModalP>
                                        <NavbarModalInput type="number" name="number"/>
                                    </ProductionDiv>
                                    <ProductionDiv>
                                        <ProductionNavbarModalP>За текущие сутки</ProductionNavbarModalP>
                                        <NavbarModalInput type="number" name="number"/>
                                    </ProductionDiv>
                                    <ProductionDiv>
                                        <ProductionNavbarModalP>За текущий месяц</ProductionNavbarModalP>
                                        <NavbarModalInput type="number" name="number"/>
                                    </ProductionDiv>
                                    <ProductionDiv>
                                        <ProductionNavbarModalP>С начала года</ProductionNavbarModalP>
                                        <NavbarModalInput type="number" name="number"/>
                                    </ProductionDiv>
                                    <ProductionDiv>
                                        <ProductionNavbarModalP>С начала эксп.</ProductionNavbarModalP>
                                        <NavbarModalInput type="number" name="number"/>
                                    </ProductionDiv>
                                </CurrentMonthDiv>
                                <NavbarModalH2>Вода</NavbarModalH2>
                                <CurrentMonthDiv>
                                    <ProductionDiv>
                                        <ProductionNavbarModalP>Часовая</ProductionNavbarModalP>
                                        <NavbarModalInput type="number" name="number"/>
                                    </ProductionDiv>
                                    <ProductionDiv>
                                        <ProductionNavbarModalP>За текущие сутки</ProductionNavbarModalP>
                                        <NavbarModalInput type="number" name="number"/>
                                    </ProductionDiv>
                                    <ProductionDiv>
                                        <ProductionNavbarModalP>За текущий месяц</ProductionNavbarModalP>
                                        <NavbarModalInput type="number" name="number"/>
                                    </ProductionDiv>
                                    <ProductionDiv>
                                        <ProductionNavbarModalP>С начала года</ProductionNavbarModalP>
                                        <NavbarModalInput type="number" name="number"/>
                                    </ProductionDiv>
                                    <ProductionDiv>
                                        <ProductionNavbarModalP>С начала эксп.</ProductionNavbarModalP>
                                        <NavbarModalInput type="number" name="number"/>
                                    </ProductionDiv>
                                </CurrentMonthDiv>
                                <div>
                                    <NavbarModalP>Дата ввода данных</NavbarModalP>
                                    <DataP>2021-06-17 14:49:22</DataP>
                                </div>
                                <ButtonDiv>
                                    <ButtonNavbarCancel onClick={() => setShowProduction(prev => !prev)}>Назад</ButtonNavbarCancel>
                                    <ButtonNavbarSave>Сохранить</ButtonNavbarSave>
                                </ButtonDiv>
                            </form>
                        </AddGasNavbarModalDiv>
                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
    )
}
const ProductionNavbarModalP = styled(NavbarModalP)`
  font-size:12px;
`
const ProductionDiv = styled.div`
  min-height: 75px;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  align-items: center;
  padding: 0 5px;
`
export default ProductionIndicators
