import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { theme } from '../../global/styles/theme';


export const Container = styled(RectButton)`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primary};
`;
