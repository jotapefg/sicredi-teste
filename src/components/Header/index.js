import React from 'react';
import { Link } from 'react-router-dom'

 import { Container } from './styles';

function Header() {
  return (
    <>
      <Container>
        <Link to='/dragons'>Listar</Link>
        <Link to='/dragons/add'>Criar Dragão</Link>
      </Container>
    </>
  );
}

export default Header;