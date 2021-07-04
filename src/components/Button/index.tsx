import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import discordImg from '../../assets/images/discord.png';

import {
  Container,
  IconWrapper,
  Icon,
  Label,
} from './styles';

interface ButtonProps extends RectButtonProps {
  label: string;
}

function Button({ label }: ButtonProps) {
  return (
    <Container>
      <IconWrapper>
        <Icon source={discordImg} />
      </IconWrapper>

      <Label>{label}</Label>
    </Container>
  );
};

export default Button;
