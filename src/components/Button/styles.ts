import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';

export const Container = styled(RectButton)`
  height: 56px;
  
  border-radius: 8px;
  align-items: center;
  
  flex-direction: row;
  background-color: ${theme.colors.primary};
`;

export const IconWrapper = styled.View`
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;

  border-right-width: 1px;
  border-color: ${theme.colors.line};
`;

export const Icon = styled.Image`
  width: 24px;
  height: 18px;
`;

export const Label = styled.Text` 
  flex: 1;
  font-size: 15px;
  text-align: center;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.inter500};
`;