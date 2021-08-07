import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import Background from '../../components/Background';

import illustrationImg from '../../assets/images/illustration.png';

import {
  Container,
  Image,
  Content,
  Title,
  SubTitle,
} from './styles';

function SignIn() {
  const { navigate } = useNavigation();

  return (
    <Background>
      <Container>
        <Image source={illustrationImg} resizeMode="stretch" />

        <Content>
          <Title>
            Conecte-se {'\n'}
            e organize suas {'\n'}
            jogatinas
          </Title>

          <SubTitle>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </SubTitle>

          <Button
            label="Entrar com o Discord"
            onPress={() => navigate('Home')}
          />
        </Content>
      </Container>
    </Background>
  );
};

export default SignIn;
