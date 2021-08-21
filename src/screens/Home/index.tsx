import React from 'react';
import { LogBox } from 'react-native';

import Background from '../../components/Background';
import Profile from '../../components/Profile';

import { Container, Header } from './styles';

function Home() {
  LogBox.ignoreLogs(['Expected style']);

  return (
    <Background>
      <Container>
        <Header>
          <Profile />
        </Header>
      </Container>
    </Background>
  );
};

export default Home;
