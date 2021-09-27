import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  padding: 0 24px;
  
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 42px;
  margin-top: ${getStatusBarHeight() + 26};
`;

export const Content = styled.View``;

export const Matches = styled.FlatList`
  margin-top: 24px;
  margin-left: 24px;
`;