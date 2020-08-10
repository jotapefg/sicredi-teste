import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api'

 import { Container, DragonContainer, Dragon } from './styles';

 import Header from '../../components/Header'

function List() {

  const [dragons, setDragons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadDragons() {
      const { data } = await api.get(`/dragon`);

      
      const dragonsSerialized = data.map(dragon => {
        return {
          id: dragon.id,
          name: dragon.name
        }
      })

      setDragons(dragonsSerialized.sort(sortDragonsByName));
      setLoading(false);
    }
    loadDragons();
  }, [])

  function sortDragonsByName(dragonA, dragonB) {
    let comparison = 0
    if(dragonA.name.toLowerCase() > dragonB.name.toLowerCase()) {
      comparison = 1
    } else {
      comparison = -1
    }
    return comparison
  }

  return (
    <>
    {
      loading ? `` : (
        <Container>
          <Header />
          <p>Escolha o seu dragão:</p>
          <DragonContainer>
            {
              dragons.map(dragon => (
                <Dragon key={dragon.id}>
                  <Link to={`dragons/${dragon.id}`}>{dragon.name}</Link>
                </Dragon>
              ))
            }
          </DragonContainer>
        </Container>
      )
    }
    </>
  );
}

export default List;