import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { RectButton } from 'react-native-gesture-handler';

import Avatar from '../Avatar';

import {
  Container,
  User,
  Greeting,
  Username,
  Message
} from './styles';

interface ProfileProps {
  children?: React.ReactNode;
}

function Profile({ children }: ProfileProps) {
  const { navigate } = useNavigation();

  return (
    <Container>
      <RectButton onPress={() => navigate('SignIn')}>
        <Avatar urlImage="https://github.com/jezielm7.png" />
      </RectButton>

      <User>
        <Greeting>Olá, <Username>Jeziel</Username></Greeting>

        <Message>Hoje é dia de vitória!</Message>
      </User>
    </Container>
  );
};

export default Profile;
