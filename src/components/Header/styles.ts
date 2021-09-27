import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled(LinearGradient)`
  width: 100%;
  height: 104px;
  padding: 0 24px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: ${getStatusBarHeight()};
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 20px;
  text-align: center;

  color: ${theme.colors.heading};
  font-family: ${theme.fonts.rajdhani700};
`;
