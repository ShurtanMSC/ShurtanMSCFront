import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ContainerFluid, Container, Img, Input, Button } from '../styled'
import ImgAdmin from '../image/login-image.jpg'
import ImgLogin from '../image/login-logo.png'
import axios from 'axios'

const Admin = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handlerChange = e => {
        e.preventDefault()
        axios.post('https://shurtan.herokuapp.com/api/auth/login', 
        {
            username: name,
            password: password,
        }
        ).then(res=>console.log(res)
        ).catch(error=>{
            console.log(error)
            alert('Неверный логин или пароль')
        })
        setName('')
        setPassword('')
    }

    const handlerName = e => {
        setName(e.target.value)
    }
    
    const handlerPassword = e => {
        setPassword(e.target.value)
    }
    
    return (
        <ContainerFluid>
            <ContainerAdmin>
                <Login>
                    <DivImg>
                        <Img src={ImgLogin} alt="photoLogin" />
                    </DivImg>
                    <div>
                        <Form >
                            <Input type="text" name="name" required placeholder="Логин" value={name} onChange={handlerName} />
                            <Input type="password" name="password" required placeholder="Пароль" value={password} onChange={handlerPassword} />
                            <Button type="submit" onClick={(e)=>handlerChange(e)}> <Link to="/mainPage"> Войти в систему </Link> </Button>
                        </Form>
                    </div>
                </Login>
            </ContainerAdmin>
        </ContainerFluid>
    )
}
const ContainerAdmin = styled(Container)`
    background : url(${ImgAdmin}) no-repeat center center/cover;
    justify-content: flex-end;
    @media(max-width:996px){
        background:none;
    }
`
const Login = styled.form`
    width:55%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0;
    background: #fff;
    padding: 3% 2%;
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 13% 100%);
    @media(max-width:996px){
        width: 100%;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
`
const DivImg = styled.div`
    width: 250px;
    height: 100%;
    margin-bottom: 50px;
`
const Form = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export default Admin
