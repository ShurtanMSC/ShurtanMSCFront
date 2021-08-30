import React, {useRef, useEffect, useCallback} from 'react';
import { useSpring, animated } from 'react-spring';
import {
    Table,
    Tr,
    Th,
    TdFirst,
    Td,
    InputModal,
    H2Div,
    H2,
    SaveDiv,
    PModal,
    SpanModal,
    ModalContainerFluid,
    ModalContainer,
    SaveBtnModal,
    CloseBtnModal,
    TdTotal, TdTotalCount, DivDataModal
} from '../styled'
import styled from 'styled-components'

const GasBalanceModal = ({showGasBalanceModal, setShowGasBalanceModal}) => {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showGasBalanceModal ? 1 : 0,
        transform: showGasBalanceModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowGasBalanceModal(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showGasBalanceModal){
            setShowGasBalanceModal(false)
        }
    }, [setShowGasBalanceModal, showGasBalanceModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <>
        { showGasBalanceModal ? (
            <ModalContainerFluid ref={modalRef} onClick={closeModal}>
            <animated.div style={{animation}}>
            <ModalContainerChange showGasBalanceModal={showGasBalanceModal}>
                <SlideCard>
                    <div>
                        <H2DivChange>
                            <H2>Состав газа для выполнения расчетов (сырой газ)</H2>
                        </H2DivChange>
                        <DivDataModal>
                            <InputModalDate type="date" name="date" />
                            <SaveBtnModal>Показать</SaveBtnModal>
                        </DivDataModal>
                        <TableChange>
                            <thead>
                                <Tr>
                                    <Th style={{position:'sticky', top:'0'}}>Наименование</Th>
                                    <Th style={{position:'sticky', top:'0'}}>CH<sub>4</sub></Th>
                                    <Th style={{position:'sticky', top:'0'}}>C<sub>2</sub>H<sub>6</sub></Th>
                                    <Th style={{position:'sticky', top:'0'}}>C<sub>3</sub>H<sub>8</sub></Th>
                                    <Th style={{position:'sticky', top:'0'}}>i-C<sub>4</sub>H<sub>10</sub></Th>
                                    <Th style={{position:'sticky', top:'0'}}>n-C<sub>4</sub>H<sub>10</sub></Th>
                                    <Th style={{position:'sticky', top:'0'}}>C<sub>5</sub>H<sub>12+высш</sub></Th>
                                    <Th style={{position:'sticky', top:'0'}}>N<sub>2</sub></Th>
                                    <Th style={{position:'sticky', top:'0'}}>CO<sub>2</sub></Th>
                                    <Th style={{position:'sticky', top:'0'}}>H<sub>2</sub>C<sub>2</sub></Th>
                                    <Th style={{position:'sticky', top:'0'}}>H<sub>2</sub>O</Th>
                                </Tr>
                            </thead>
                            <tbody>
                                <Tr>
                                    <TdFirst>Шуртан</TdFirst>
                                    <Td> <InputModal type="text"  name="name" value="500" required /> </Td>
                                    <Td> <InputModal type="text"  name="name" value="8000" required disabled/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="9000" required disabled/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="500" required /> </Td>
                                    <Td> <InputModal type="text"  name="name" value="8000" required disabled/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="9000" required disabled/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="500" required /> </Td>
                                    <Td> <InputModal type="text"  name="name" value="8000" required disabled/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="9000" required disabled/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="500" required /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Южная Тандирча</TdFirst>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Бузахур</TdFirst>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Восточный Бузахур</TdFirst>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Тарнасой</TdFirst>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Ойдин</TdFirst>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Номозбой</TdFirst>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Ёрмок</TdFirst>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Туртсари</TdFirst>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Северный Шуртан</TdFirst>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Гармистон</TdFirst>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Совлигор</TdFirst>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Яккасарай</TdFirst>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Мезон</TdFirst>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Феруза</TdFirst>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Тошли</TdFirst>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Зафар</TdFirst>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Коратепа</TdFirst>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Ширкент</TdFirst>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Рубойи</TdFirst>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                </Tr>
                                <Tr>
                                    <TdFirst>Янги Коратепа</TdFirst>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" required/> </Td>
                                    <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                </Tr>
                            </tbody>
                            <tfoot>
                                <Tr>
                                    <TdTotal>Итого</TdTotal>
                                    <TdTotalCount>0</TdTotalCount>
                                    <TdTotalCount>0</TdTotalCount>
                                    <TdTotalCount>0</TdTotalCount>
                                    <TdTotalCount>0</TdTotalCount>
                                    <TdTotalCount>0</TdTotalCount>
                                    <TdTotalCount>0</TdTotalCount>
                                    <TdTotalCount>0</TdTotalCount>
                                    <TdTotalCount>0</TdTotalCount>
                                    <TdTotalCount>0</TdTotalCount>
                                    <TdTotalCount>0</TdTotalCount>
                                </Tr>
                            </tfoot>
                        </TableChange>
                    </div>
                    <div>
                        <H2DivChange>
                            <Form>
                                <Label htmlFor="uppgNumber">Состав газа на выходе УППГ:</Label>
                                <Select htmlFor="uppgNumber" id="uppgNumber">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </Select>
                            </Form>
                        </H2DivChange>
                        <TableChange>
                            <thead>
                            <Tr>
                                <Th style={{position:'sticky', top:'0'}}>Наименование</Th>
                                <Th style={{position:'sticky', top:'0'}}>CH<sub>4</sub></Th>
                                <Th style={{position:'sticky', top:'0'}}>C<sub>2</sub>H<sub>6</sub></Th>
                                <Th style={{position:'sticky', top:'0'}}>C<sub>3</sub>H<sub>8</sub></Th>
                                <Th style={{position:'sticky', top:'0'}}>i-C<sub>4</sub>H<sub>10</sub></Th>
                                <Th style={{position:'sticky', top:'0'}}>n-C<sub>4</sub>H<sub>10</sub></Th>
                                <Th style={{position:'sticky', top:'0'}}>C<sub>5</sub>H<sub>12+высш</sub></Th>
                                <Th style={{position:'sticky', top:'0'}}>N<sub>2</sub></Th>
                                <Th style={{position:'sticky', top:'0'}}>CO<sub>2</sub></Th>
                                <Th style={{position:'sticky', top:'0'}}>H<sub>2</sub>C<sub>2</sub></Th>
                                <Th style={{position:'sticky', top:'0'}}>H<sub>2</sub>O</Th>
                            </Tr>
                            </thead>
                            <tbody>
                            <Tr>
                                <TdFirst>Шуртан</TdFirst>
                                <Td> <InputModal type="text"  name="name" value="500" required /> </Td>
                                <Td> <InputModal type="text"  name="name" value="8000" required disabled/> </Td>
                                <Td> <InputModal type="text"  name="name" value="9000" required disabled/> </Td>
                                <Td> <InputModal type="text"  name="name" value="500" required /> </Td>
                                <Td> <InputModal type="text"  name="name" value="8000" required disabled/> </Td>
                                <Td> <InputModal type="text"  name="name" value="9000" required disabled/> </Td>
                                <Td> <InputModal type="text"  name="name" value="500" required /> </Td>
                                <Td> <InputModal type="text"  name="name" value="8000" required disabled/> </Td>
                                <Td> <InputModal type="text"  name="name" value="9000" required disabled/> </Td>
                                <Td> <InputModal type="text"  name="name" value="500" required /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Южная Тандирча</TdFirst>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Бузахур</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Восточный Бузахур</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Тарнасой</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Ойдин</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Номозбой</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Ёрмок</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Туртсари</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Северный Шуртан</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Гармистон</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Совлигор</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Яккасарай</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Мезон</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Феруза</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Тошли</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Зафар</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Коратепа</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Ширкент</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Рубойи</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Янги Коратепа</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            </tbody>
                            <tfoot>
                            <Tr>
                                <TdTotal>Итого</TdTotal>
                                <TdTotalCount>0</TdTotalCount>
                                <TdTotalCount>0</TdTotalCount>
                                <TdTotalCount>0</TdTotalCount>
                                <TdTotalCount>0</TdTotalCount>
                                <TdTotalCount>0</TdTotalCount>
                                <TdTotalCount>0</TdTotalCount>
                                <TdTotalCount>0</TdTotalCount>
                                <TdTotalCount>0</TdTotalCount>
                                <TdTotalCount>0</TdTotalCount>
                                <TdTotalCount>0</TdTotalCount>
                            </Tr>
                            </tfoot>
                        </TableChange>
                    </div>
                    <div>
                        <H2DivChange>
                            <H2Change>Состав газа на выходе ГС Шуртан</H2Change>
                        </H2DivChange>
                        <TableChange>
                            <thead>
                            <Tr>
                                <Th style={{position:'sticky', top:'0'}}>Наименование</Th>
                                <Th style={{position:'sticky', top:'0'}}>CH<sub>4</sub></Th>
                                <Th style={{position:'sticky', top:'0'}}>C<sub>2</sub>H<sub>6</sub></Th>
                                <Th style={{position:'sticky', top:'0'}}>C<sub>3</sub>H<sub>8</sub></Th>
                                <Th style={{position:'sticky', top:'0'}}>i-C<sub>4</sub>H<sub>10</sub></Th>
                                <Th style={{position:'sticky', top:'0'}}>n-C<sub>4</sub>H<sub>10</sub></Th>
                                <Th style={{position:'sticky', top:'0'}}>C<sub>5</sub>H<sub>12+высш</sub></Th>
                                <Th style={{position:'sticky', top:'0'}}>N<sub>2</sub></Th>
                                <Th style={{position:'sticky', top:'0'}}>CO<sub>2</sub></Th>
                                <Th style={{position:'sticky', top:'0'}}>H<sub>2</sub>C<sub>2</sub></Th>
                                <Th style={{position:'sticky', top:'0'}}>H<sub>2</sub>O</Th>
                            </Tr>
                            </thead>
                            <tbody>
                            <Tr>
                                <TdFirst>Шуртан</TdFirst>
                                <Td> <InputModal type="text"  name="name" value="500" required /> </Td>
                                <Td> <InputModal type="text"  name="name" value="8000" required disabled/> </Td>
                                <Td> <InputModal type="text"  name="name" value="9000" required disabled/> </Td>
                                <Td> <InputModal type="text"  name="name" value="500" required /> </Td>
                                <Td> <InputModal type="text"  name="name" value="8000" required disabled/> </Td>
                                <Td> <InputModal type="text"  name="name" value="9000" required disabled/> </Td>
                                <Td> <InputModal type="text"  name="name" value="500" required /> </Td>
                                <Td> <InputModal type="text"  name="name" value="8000" required disabled/> </Td>
                                <Td> <InputModal type="text"  name="name" value="9000" required disabled/> </Td>
                                <Td> <InputModal type="text"  name="name" value="500" required /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Южная Тандирча</TdFirst>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Бузахур</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Восточный Бузахур</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Тарнасой</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Ойдин</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Номозбой</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Ёрмок</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Туртсари</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Северный Шуртан</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Гармистон</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Совлигор</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Яккасарай</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Мезон</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Феруза</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Тошли</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Зафар</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Коратепа</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Ширкент</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Рубойи</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            <Tr>
                                <TdFirst>Янги Коратепа</TdFirst>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" required/> </Td>
                                <Td> <InputModal type="text"  name="name" value="200" /> </Td>
                            </Tr>
                            </tbody>
                            <tfoot>
                            <Tr>
                                <TdTotal>Итого</TdTotal>
                                <TdTotalCount>0</TdTotalCount>
                                <TdTotalCount>0</TdTotalCount>
                                <TdTotalCount>0</TdTotalCount>
                                <TdTotalCount>0</TdTotalCount>
                                <TdTotalCount>0</TdTotalCount>
                                <TdTotalCount>0</TdTotalCount>
                                <TdTotalCount>0</TdTotalCount>
                                <TdTotalCount>0</TdTotalCount>
                                <TdTotalCount>0</TdTotalCount>
                                <TdTotalCount>0</TdTotalCount>
                            </Tr>
                            </tfoot>
                        </TableChange>
                    </div>
                </SlideCard>
                <SaveDiv>
                    <div>
                        <PModal>Дата изменения: <SpanModal> 03.08.2021 </SpanModal> <SpanModal> 13:45:48 </SpanModal> </PModal>
                    </div>
                    <div>
                        <SaveBtnModal>Сохранит</SaveBtnModal>
                        <CloseBtnModal
                            aria-label='Close modal'
                            onClick={()=> setShowGasBalanceModal(prev => !prev)}>Закрыт
                        </CloseBtnModal>
                    </div>
                </SaveDiv>
            </ModalContainerChange>
            </animated.div>
        </ModalContainerFluid> 
        ) : null}
        </>
    );
};
const ModalContainerChange = styled(ModalContainer)`
  max-width:1880px;
  padding:1%;
`
const SlideCard = styled.div`
  display: flex;
  justify-content: center;
  align-items:flex-start;
`
const H2DivChange = styled(H2Div)`
  margin-bottom: 5px;
`
const H2Change = styled(H2)`
  margin: 5px 0 0 0;
`
const Form = styled.form`
  width: 100%;
  margin-top: 5px;
  display:flex;
  justify-content: center;
  align-items:center;
`
const Label = styled.label`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: #363636;
  padding: 5px;
`
const Select = styled.select`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: #363636;
  padding: 0 1px;
  outline: none;
  border: none
`
const TableChange = styled(Table)`
  padding: 0 2px;
  &:nth-child(2){
    margin-top: 35px;
  }
`
const InputModalDate = styled(InputModal)`
  margin-right: 8px;
  padding: 0.3em;
`
export default GasBalanceModal
