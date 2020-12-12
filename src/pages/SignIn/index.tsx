import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SingIn: React.FC = () => (
  <Container>
    <Content>
      <img src={Logo} alt="Gobarber" />

      <form>
        <h1>Faça seu Logon</h1>

        <input type="text" placeholder="E-mail" />

        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <a href="forgot">esqueci minha senha</a>
      </form>

      <a href="forgot">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SingIn;
