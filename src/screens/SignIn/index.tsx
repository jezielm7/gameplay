import React from 'react';

import Button from '../../components/Button';

import illustrationImg from '../../assets/images/illustration.png';

import {
  Container,
  Image,
  Content,
  Title,
  SubTitle,
} from './styles';

function SignIn() {
  return (
    <Container>
      <Image source={illustrationImg} resizeMode="stretch" />

      <Content>
        <Title>
          Organize {'\n'}
          suas jogatinas {'\n'}
          facilmente
        </Title>

        <SubTitle>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </SubTitle>

        <Button label="Entrar com o Discord" />
      </Content>
    </Container>
  );
};

export default SignIn;
