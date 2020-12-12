import React from 'react';
import { FiArrowLeft, FiLock, FiUser, FiMail } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SingUp: React.FC = () => (
  <Container>
    <Background />

    <Content>
      <img src={Logo} alt="Gobarber" />

      <form>
        <h1>Faça seu cadastro</h1>
        <Input name="name" type="text" placeholder="Nome" icon={FiUser} />

        <Input name="email" type="text" placeholder="E-mail" icon={FiMail} />

        <Input
          name="password"
          type="password"
          placeholder="Senha"
          icon={FiLock}
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="forgot">
        <FiArrowLeft />
        Voltar para Logon
      </a>
    </Content>
  </Container>
);

export default SingUp;
