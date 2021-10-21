import React, {useRef, useEffect, useCallback} from 'react';
import { useSpring, animated } from 'react-spring';
import { Table, Tr, Th, TdFirst, Td, InputModal, H2Div, H2, SaveDiv,
    // PModal, SpanModal,
    ModalContainerFluid, ModalContainer,
    // SaveBtnModal,
    CloseBtnModal } from '../styled'

const WellStockModal = ({showWellStockModal, setShowWellStockModal, statStatus}) => {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showWellStockModal ? 1 : 0,
        transform: showWellStockModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowWellStockModal(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showWellStockModal){
            setShowWellStockModal(false)
        }
    }, [setShowWellStockModal, showWellStockModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <>
        { showWellStockModal ? (
            <ModalContainerFluid ref={modalRef} onClick={closeModal}>
            <animated.div style={{animation}}>
            <ModalContainer showWellStockModal={showWellStockModal}>
                <H2Div>
                    <H2>Состояние скважин по месторождениям</H2>
                </H2Div>
                <Table>
                    <thead>
                        <Tr>
                            <Th style={{padding:'1rem'}}>Наименование</Th>
                            <Th>В работе</Th>
                            <Th>В простое</Th>
                            <Th>В ремонте</Th>
                            <Th>В консервации</Th>
                            <Th>В ликвидации</Th>
                        </Tr>
                    </thead>
                    <tbody>
                    {statStatus.map((mining, index) =>
                        <Tr key={index}>
                            <TdFirst>{mining.name}</TdFirst>
                            <Td> <InputModal type="number"  name="name" defaultValue={statStatus.IN_WORK} disabled/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={statStatus.IN_IDLE} disabled/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={statStatus.IN_REPAIR} disabled/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={statStatus.IN_CONSERVATION} disabled/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={statStatus.IN_LIQUIDATION} disabled/> </Td>
                        </Tr>
                    )}
                    </tbody>
                </Table>
                <SaveDiv>
                    <div>
                        {/*<PModal>Дата изменения: <SpanModal> 03.08.2021 </SpanModal> <SpanModal> 13:45:48 </SpanModal> </PModal>*/}
                    </div>
                    <div>
                        {/*<SaveBtnModal>Сохранит</SaveBtnModal>*/}
                        <CloseBtnModal 
                            aria-label='Close modal' 
                            onClick={()=> setShowWellStockModal(prev => !prev)}>Закрыт
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

export default WellStockModal
