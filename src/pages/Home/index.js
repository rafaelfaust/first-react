import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'

import People from '../../images/people.svg'
import Arrow from '../../images/seta.svg'

import Axios from 'axios'
import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button'

import { 
  Container, 
  Image, 
  InputLabel, 
  Input
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const history = useHistory();

  async function addNewUser() {
    const { data: newUser } = await Axios.post("http://localhost:3001/users", {
      name: inputName.current.value, 
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    history.push('/users');
  }

  return (
    <Container>
      <Image alt="logo-image" src={People} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} type="name" placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} type="age" placeholder="Idade"></Input>
 
        <Button type={'submit'} onClick={addNewUser}>
          Cadastrar <img alt="arrow" src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>

  )
}

export default App