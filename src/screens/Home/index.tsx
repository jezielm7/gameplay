import React from 'react';
import { LogBox } from 'react-native';

import Background from '../../components/Background';
import ButtonAdd from '../../components/ButtonAdd';
import Profile from '../../components/Profile';

import { Container, Header } from './styles';

function Home() {
  LogBox.ignoreLogs(['Expected style']);

  return (
    <Background>
      <Container>
        <Header>
          <Profile />

          <ButtonAdd />
        </Header>
      </Container>
    </Background>
  );
};

export default Home;
