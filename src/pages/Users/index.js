import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import People from '../../images/avatar.png';
import Arrow from '../../images/seta.svg';
import Trash from '../../images/trash.svg';

import Axios from 'axios';
import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button'

import { Container, Image, User } from "./styles";

function Users() {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  //REACT HOOK => useEffect (Efeito Colateral)
  // A minha aplicação inicia (A pagina carregou, useEffect é chamado!)
  // Quando um estado que está no array de denpendencia do useEffect é alterado

  useEffect(() => {

    async function fetchUsers() {
      const { data: newUsers } = await Axios.get("http://localhost:3001/users")

      setUsers(newUsers);
    }

    fetchUsers()
  }, [])

  function goBack (){
    history.push('/')
  }

  

  async function deleteUser(userId){
    await Axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId)

    setUsers(newUsers);
  }


  return (
    <Container>
      <Image alt="logo-image" src={People} />
      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>
 
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age + ' Anos'}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="trash" />
              </button>
            </User>
          ))}
        </ul>

        <Button isBackground={true} onClick={goBack}>
         <img alt="arrow" src={Arrow} /> Voltar 
        </Button>

      </ContainerItens>
    </Container>

  )
}

export default Users