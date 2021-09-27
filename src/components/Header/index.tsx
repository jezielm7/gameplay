import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { BorderlessButton as Button } from 'react-native-gesture-handler';

import { theme } from '../../global/styles/theme';

import { Container, Title, } from './styles';

interface HeaderProps {
  title: string;
  action?: React.ReactNode;
}

function Header({ title, action }: HeaderProps) {
  const { secondary100, secondary40, heading } = theme.colors;

  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  return (
    <Container colors={[secondary100, secondary40]}>
      <Button onPress={handleGoBack}>
        <Feather
          name="arrow-left"
          size={24}
          color={heading}
        />
      </Button>

      <Title>{title}</Title>

      {
        action ? (
          <View>{action}</View>
        ) : (
          <View style={{ width: 24 }} />
        )
      }
    </Container>
  );
};

export default Header;
