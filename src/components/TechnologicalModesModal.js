import React, {useRef, useEffect, useCallback} from 'react';
import { useSpring, animated } from 'react-spring';
import { Table, Tr, Th, TdFirst, Td, InputModal, H2Div, H2, SaveDiv, PModal, SpanModal, ModalContainerFluid, ModalContainer, SaveBtnModal, CloseBtnModal } from '../styled'

const TechnologicalModesModal = ({showTechnologicalModesModal, setShowTechnologicalModesModal}) => {
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
                        <Tr>
                            <TdFirst>Шуртан</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>Южная Тандирча</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>Бузахур</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>Восточный Бузахур</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>Тарнасой</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>Ойдин</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>Номозбой</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>Ёрмок</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>Туртсари</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>Северный Шуртан</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>Гармистон</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>Совлигор</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>Яккасарай</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>Мезон</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>Феруза</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>Тошли</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>Зафар</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>Коратепа</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>Ширкент</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>Рубойи</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>Янги Коратепа</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
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
