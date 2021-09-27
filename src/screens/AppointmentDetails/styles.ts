import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
`;

export const Image = styled.ImageBackground`
  width: 100%;
  height: 234px;
`;

export const BannerContent = styled.View`
  flex: 1;
  padding: 0 14px;
  margin-bottom: 30px;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.rajdhani700};
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.inter400};
`;
