import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Container } from './styles';

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let history = useHistory()

  function handleSubmit(e) {
    e.preventDefault();
    if(email === 'teste@teste.com' && password === '123') {
      localStorage.setItem('token', 'logado')
      history.push('/dragons')
    } else {
      toast.error('Dados incorretos. Por favor revise e tente novamente.')
    }
  }

  return (
    <Container>
      <p>Faça seu login</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder='Digite seu email'
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
        <input
          type="password"
          placeholder='Digite sua senha'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type='submit' >ENTRAR</button>
      </form>
    </Container>
  );
}

export default Login;