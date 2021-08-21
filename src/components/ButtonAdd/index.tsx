import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';

import { Container } from './styles';

function ButtonAdd({ ...rest }: RectButtonProps) {
  return (
    <Container {...rest}>
      <MaterialCommunityIcons
        name="plus"
        size={24}
        color={theme.colors.heading}
      />
    </Container>
  );
};

export default ButtonAdd;
