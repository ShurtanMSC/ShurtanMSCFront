import React, {useRef, useEffect, useCallback} from 'react';
import { useSpring, animated } from 'react-spring';
import { Table, Tr, Th, TdFirst, Td, InputModal, H2Div, H2, SaveDiv, PModal, SpanModal, ModalContainerFluid, ModalContainer,
    // SaveBtnModal,
    CloseBtnModal } from '../styled'

const AddGasModal = ({showAddGassModal, setShowAddGassModal, addGas, date}) => {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showAddGassModal ? 1 : 0,
        transform: showAddGassModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowAddGassModal(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showAddGassModal){
            setShowAddGassModal(false)
        }
    }, [setShowAddGassModal, showAddGassModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <>
        { showAddGassModal ? (
            <ModalContainerFluid ref={modalRef} onClick={closeModal}>
            <animated.div style={{animation}}>
            <ModalContainer showAddGassModal={showAddGassModal}>
                <H2Div>
                    <H2>Добыча газа, тыс.м<sup>3</sup></H2>
                </H2Div>
                <Table>
                    <thead>
                        <Tr>
                            <Th style={{padding:'1rem'}}>Наименование</Th>
                            <Th>2-х часовая</Th>
                            <Th>С начала суток</Th>
                            <Th>За текущий месяц</Th>
                        </Tr>
                    </thead>
                    <tbody>
                    {addGas.map((mining, key) =>
                        <Tr key={key}>
                            <TdFirst>{mining.objectDto !== null ? mining.objectDto.name : ""}</TdFirst>
                            <Td> <InputModal type="number"  name="name" value={mining.objectActionDto !==null ? Math.round(mining.objectActionDto.expend/1000*10)/10 : 0} disabled/> </Td>
                            <Td> <InputModal type="number"  name="name" value={mining.objectActionDto !==null ? Math.round(mining.objectActionDto.todayExpend/1000*10)/10 : 0} disabled/> </Td>
                            <Td> <InputModal type="number"  name="name" value={mining.objectActionDto !==null ? Math.round(mining.objectActionDto.yesterdayExpend/1000*10)/10 : 0} disabled/> </Td>
                        </Tr>
                    )}
                    </tbody>
                </Table>
                <SaveDiv>
                    <div>
                        <PModal>Дата изменения: <SpanModal> {date} </SpanModal> </PModal>
                    </div>
                    <div>
                        {/*<SaveBtnModal>Сохранит</SaveBtnModal>*/}
                        <CloseBtnModal 
                            aria-label='Close modal' 
                            onClick={()=> setShowAddGassModal(prev => !prev)}>Закрыт
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

export default AddGasModal
