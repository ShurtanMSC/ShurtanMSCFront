import React, {useRef, useEffect, useCallback} from 'react';
import { useSpring, animated } from 'react-spring';
import { Table, Tr, Th, TdFirst, Td, InputModal, H2Div, H2, SaveDiv, PModal, SpanModal, ModalContainerFluid, ModalContainer, SaveBtnModal, CloseBtnModal } from '../styled'

const CurrentOperatingCostsModal = ({showCurrentOperatingCosts, setShowCurrentOperatingCosts, date}) => {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showCurrentOperatingCosts ? 1 : 0,
        transform: showCurrentOperatingCosts ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowCurrentOperatingCosts(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showCurrentOperatingCosts){
            setShowCurrentOperatingCosts(false)
        }
    }, [setShowCurrentOperatingCosts, showCurrentOperatingCosts])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <>
        { showCurrentOperatingCosts ? (
            <ModalContainerFluid ref={modalRef} onClick={closeModal}>
            <animated.div style={{animation}}>
            <ModalContainer showCurrentOperatingCosts={showCurrentOperatingCosts}>
                <H2Div>
                    <H2>Текущие эксплуатационные затраты</H2>
                </H2Div>
                <Table>
                    <thead>
                        <Tr>
                            <Th rowSpan="2" style={{padding:'1rem'}}>Наименование затрат</Th>
                            <Th rowSpan="2">Тариф</Th>
                            <Th rowSpan="2">Количество затрат</Th>
                            <Th colSpan="3">Общие затраты</Th>
                            <Th rowSpan="2">Текущая себестоимость</Th>
                        </Tr>
                        <Tr>
                            <Th>За сутки</Th>
                            <Th>С начала месяца</Th>
                            <Th>С начала года</Th>
                        </Tr>
                    </thead>
                    <tbody>
                        <Tr>
                            <TdFirst>Использование природного газа</TdFirst>
                            <Td> <InputModal type="number"  name="name" value="500" required disabled/> </Td>
                            <Td> <InputModal type="number"  name="name" value="1000" required disabled/> </Td>
                            <Td> <InputModal type="number"  name="name" value="5000" required disabled/> </Td>
                            <Td> <InputModal type="number"  name="name" value="500" required disabled/> </Td>
                            <Td> <InputModal type="number"  name="name" value="1000" required disabled/> </Td>
                            <Td> <InputModal type="number"  name="name" value="5000" required disabled/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>Использование электроэнергии</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>Использование воды</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>Услуги KPC</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>Вспомогательные материалы</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>Пусконаладочные работы</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                    </tbody>
                </Table>
                <SaveDiv>
                    <div>
                        <PModal>Дата изменения: <SpanModal> {date} </SpanModal> </PModal>
                    </div>
                    <div>
                        <SaveBtnModal>Сохранит</SaveBtnModal>
                        <CloseBtnModal 
                            aria-label='Close modal' 
                            onClick={()=> setShowCurrentOperatingCosts(prev => !prev)}>Закрыт
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

export default CurrentOperatingCostsModal
