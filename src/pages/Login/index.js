import React from 'react';

import { Container } from './styles';

function Login() {

  function handleSubmit(e) {
    e.preventDefault();
    
  }

  return (
    <Container>
      <p>Faça seu login</p>
      <form>
        <input type="text" placeholder='Digite seu email' name="email" />
        <input type="password" placeholder='Digite sua senha' name='password' />
        <button onClick={handleSubmit}>Entrar</button>
      </form>
    </Container>
  );
}

export default Login;