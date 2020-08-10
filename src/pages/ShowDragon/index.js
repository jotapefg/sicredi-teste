import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import api from '../../services/api'
import { toast } from 'react-toastify'

import { Container, DragonContainer, DragonForm, InputGroup } from './styles';
import { MdEdit } from 'react-icons/md'

import Header from '../../components/Header'

function ShowDragon() {

  const [dragon, setDragon] = useState([])
  const [loading, setLoading] = useState(true)
  const [edit, setEdit] = useState(false)

  const { id } = useParams()
  let history = useHistory()

  useEffect(() => {
    async function loadDragons() {
      const { data } = await api.get(`/dragon/${id}`);


      const dragonSerialized = {
        id: data.id,
        name: data.name,
        type: data.type,
        createdAt: data.createdAt.toString().split(`T`)[0].split(`-`).reverse().join(`-`)
      }
      
      setDragon(dragonSerialized);
      setLoading(false);
    }
    loadDragons();
  }, [id])

  function handleChange(event){
    setDragon({
      ...dragon,
      [event.target.name]: event.target.value
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if(!edit) {
      toast.error('Nenhum campo foi alterado.')
      return
    }
    if(dragon.name === '' || dragon.type === '') {
      toast.error('Todos os campos devem estar preenchidos.')
    } else {
      const response = await api.put(`/dragon/${id}`);
      if(response.status === 200) {
        toast.success('Dragão editado com sucesso')
      }
    }
  }

  function handleEdit(event, inputName) {
    event.preventDefault();
    const inputSelected = document.querySelector(`input[name=${inputName}]`)
    inputSelected.disabled = false;
    inputSelected.focus()
    setEdit(true)
  }

  async function handleDelete() {
    const response = await api.delete(`dragon/${id}`)
    if(response.status === 200) {
      toast.success('Dragão deletado com sucesso', {
        onClose: () =>  history.push('/dragons')
      })
    }
  }

  return (
    <>
    {
      loading ? `` : (
        <Container>
          <Header />
          <DragonContainer>
            <DragonForm onSubmit={handleSubmit}>
              <label htmlFor="name">
                  Nome:
              </label>
              <InputGroup>
                <input type="text" name="name" value={dragon.name} disabled onChange={handleChange} />
                <button type="button" onClick={(e) => handleEdit(e, 'name')} className="button_edit" ><MdEdit /></button>
              </InputGroup>
              <label htmlFor="type">
                Tipo:
              </label> 
              <InputGroup>
                <input type="text" name="type" value={dragon.type} disabled onChange={handleChange}/>
                <button type="button" onClick={(e) => handleEdit(e, 'type')} className="button_edit"><MdEdit /></button>
              </InputGroup>
                <label>
                  Criado em:
                </label>
                <input type="text" name="createdAt" value={dragon.createdAt} disabled onChange={handleChange}/>
                <button type="submit" className="button_save" onClick={handleSubmit}>Salvar</button>
                <button type="button" className="button_delete" onClick={handleDelete} >Deletar</button>
            </DragonForm>
          </DragonContainer>
        </Container>
      )
    }
    </>
  );
}

export default ShowDragon;