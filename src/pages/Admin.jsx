import React, {useContext} from 'react';
import {AppContext} from "../context";
import styled from 'styled-components'
import { ContainerFluid, Container, Img, Input, Button } from '../styled'
import ImgAdmin from '../image/login-image.jpg'
import ImgLogin from '../image/logo.png'

const Admin = () => {
    const {handlerChange, handlerName, handlerPassword, userName, userPassword } = useContext(AppContext);

    return (
        <ContainerFluidFooter>
            <ContainerAdmin>
                <Login>
                    <DivImg>
                        <Img src={ImgLogin} alt="photoLogin" />
                    </DivImg>
                    <div>
                        <Form onSubmit={handlerChange}>
                            <Input type="text" name="name" required placeholder="Логин" value={userName} onChange={handlerName} />
                            <Input type="password" name="password" required placeholder="Пароль" value={userPassword} onChange={handlerPassword} />
                            <Button>Войти в систему </Button>
                        </Form>
                    </div>
                    <P_Admin_Footer>© Все права защищены АО "O'ZLITINEFTGAZ" {new Date().getFullYear()}</P_Admin_Footer>
                </Login>
            </ContainerAdmin>
        </ContainerFluidFooter>
    )
}
const ContainerFluidFooter = styled(ContainerFluid)`
  flex-direction: column;
  justify-content: space-between;
`
const ContainerAdmin = styled(Container)`
    background : url(${ImgAdmin}) no-repeat center center/cover;
    justify-content: flex-end;
    @media(max-width:996px){
        background:none;
    }
`
const Login = styled.div`
    width:55%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0;
    background: #fff;
    padding: 3% 2%;
    position: relative;
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 13% 100%);
    @media(max-width:996px){
        width: 100%;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
`
const P_Admin_Footer = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #000;
  position: absolute;
  bottom: 5px;
`
const DivImg = styled.div`
    width: 250px;
    height: 100%;
    margin-bottom: 50px;
`
const Form = styled.form`
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export default Admin
