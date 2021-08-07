import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: 360px;
`;

export const Content = styled.View`
  padding: 0 50px;
  margin-top: -40px;
`;

export const Title = styled.Text`
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 16px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.rajdhani700};
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  margin-bottom: 64px;

  color: ${theme.colors.heading};
  font-family: ${theme.fonts.rajdhani500};
`;