import React from 'react';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SingIn: React.FC = () => (
  <Container>
    <Content>
      <img src={Logo} alt="Gobarber" />

      <form>
        <h1>Faça seu Logon</h1>

        <Input name="email" type="text" placeholder="E-mail" icon={FiMail} />

        <Input
          name="password"
          type="password"
          placeholder="Senha"
          icon={FiLock}
        />

        <Button type="submit">Entrar</Button>

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
