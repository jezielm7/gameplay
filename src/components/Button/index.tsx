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
  onPress?: () => void;
}

function Button({ label, onPress }: ButtonProps) {
  return (
    <Container onPress={onPress}>
      <IconWrapper>
        <Icon source={discordImg} />
      </IconWrapper>

      <Label>{label}</Label>
    </Container>
  );
};

export default Button;
