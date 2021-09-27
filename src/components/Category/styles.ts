import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';

export const Container = styled(LinearGradient)`
  width: 104px;
  height: 120px;
  align-items: center;
  justify-content: center;

  margin-right: 8px;
  border-radius: 8px;
`;

export const Content = styled(LinearGradient)`
  width: 100px;
  height: 116px;
  padding: 20px 0;
  border-radius: 8px;

  align-items: center;
  justify-content: space-between;
`;

export const CheckedBox = styled.View`
  top: 8px;
  right: 8px;
  
  width: 12px;
  height: 12px;
  border-radius: 3px;
  
  position: absolute;
  background-color: ${theme.colors.primary};
`;

export const UncheckedBox = styled.View`
  top: 8px;
  right: 8px;

  width: 12px;
  height: 12px;
  border-radius: 3px;
  position: absolute;
  
  border: 1px solid ${theme.colors.secondary50};
  background-color: ${theme.colors.secondary100};
`;

export const Title = styled.Text`
  font-size: 15px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.rajdhani700};
`;