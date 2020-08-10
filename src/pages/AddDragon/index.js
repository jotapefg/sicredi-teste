import React, { useState } from 'react';
import { toast } from 'react-toastify'
import api from '../../services/api'

import { Container, DragonContainer, DragonForm } from './styles';

import Header from '../../components/Header'

function AddDragon() {

  const [loading, ] = useState(false)
  const [name, setName] = useState('')
  const [type, setType] = useState('')

  async function handleSubmit(event){
    event.preventDefault()
    if(name === '' || type === '') {
      toast.error('Todos os campos devem ser preenchidos.')
    } else {
      const newDragon = {
        name,
        type
      }
      const response = await api.post('/dragon', newDragon)
      if(response.status === 201) {
        toast.success('Dragão criado com sucesso.')
        setName('')
        setType('')
      } else {
        toast.error('Ocorreu algum erro, tente novamente.')
      }
    }
    
  }

  return (
    <>
    {
      loading ? `` : (
        <Container>
          <Header />
          <p>Crie o seu dragão:</p>
          <DragonContainer>
            <DragonForm onSubmit={handleSubmit}>
              <label>
                Nome:
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
              </label>
              <label>
                Tipo:
                <input type="text" id="type" value={type} onChange={(e) => setType(e.target.value)} />
              </label>
              <button type="submit">Salvar</button>
            </DragonForm>
          </DragonContainer>
        </Container>
      )
    }
    </>
  );
}

export default AddDragon;