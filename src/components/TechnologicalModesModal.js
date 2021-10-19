import React, {useRef, useEffect, useCallback} from 'react';
import { useSpring, animated } from 'react-spring';
import { Table, Tr, Th, TdFirst, Td, InputModal, H2Div, H2, SaveDiv, PModal, SpanModal, ModalContainerFluid, ModalContainer, SaveBtnModal, CloseBtnModal } from '../styled'

const TechnologicalModesModal = ({showTechnologicalModesModal, setShowTechnologicalModesModal, nameAllMining}) => {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showTechnologicalModesModal ? 1 : 0,
        transform: showTechnologicalModesModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowTechnologicalModesModal(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showTechnologicalModesModal){
            setShowTechnologicalModesModal(false)
        }
    }, [setShowTechnologicalModesModal, showTechnologicalModesModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <>
        { showTechnologicalModesModal ? (
            <ModalContainerFluid ref={modalRef} onClick={closeModal}>
            <animated.div style={{animation}}>
            <ModalContainer showTechnologicalModesModal={showTechnologicalModesModal}>
                <H2Div>
                    <H2>Технологические режимы эксплуатации</H2>
                </H2Div>
                <Table>
                    <thead>
                        <Tr>
                            <Th style={{padding:'1rem'}}>Наименование</Th>
                            <Th>Текущее пластовое давление</Th>
                            <Th>Среднее устьевое давление на скважине</Th>
                            <Th>Давление на БВН</Th>
                            <Th>Давление на входе в ГТС/ДКС</Th>
                        </Tr>
                    </thead>
                    <tbody>
                    {nameAllMining.map((mining, key) =>
                        <Tr key={key}>
                            <TdFirst>{mining.name}</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                    )}
                    </tbody>
                </Table>
                <SaveDiv>
                    <div>
                        <PModal>Дата изменения: <SpanModal> 03.08.2021 </SpanModal> <SpanModal> 13:45:48 </SpanModal> </PModal>
                    </div>
                    <div>
                        <SaveBtnModal>Сохранит</SaveBtnModal>
                        <CloseBtnModal 
                            aria-label='Close modal' 
                            onClick={()=> setShowTechnologicalModesModal(prev => !prev)}>Закрыт
                        </CloseBtnModal>
                    </div>
                </SaveDiv>
            </ModalContainer>
            </animated.div>
        </ModalContainerFluid> 
        ) : null}
        </>
    );
};

export default TechnologicalModesModal
