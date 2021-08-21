import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const User = styled.View``;

export const Greeting = styled.Text`
  font-size: 24px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.rajdhani500};
`;

export const Username = styled.Text`
  font-size: 24px;
  margin-right: 6px;

  color: ${theme.colors.heading};
  font-family: ${theme.fonts.rajdhani700};
`;

export const Message = styled.Text`
  color: ${theme.colors.highlight};
  font-family: ${theme.fonts.inter400};
`;