import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  margin-bottom: 12px;

  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.rajdhani700};
`;

export const Category = styled.Text`
  font-size: 14px;
  margin-right: 24px;
  color: ${theme.colors.highlight};
  font-family: ${theme.fonts.inter400};
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const DateInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Date = styled.Text`
  font-size: 14px;
  margin-left: 8px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.inter500};
`;

export const PlayersInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Player = styled.Text`
  font-size: 14px;
  margin-left: 8px;
  margin-right: 24px;
  font-family: ${theme.fonts.inter500};
`;
