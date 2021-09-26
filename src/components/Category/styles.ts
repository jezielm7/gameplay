import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';

interface StyledCategoryProps {
  checked?: boolean;
}

export const Container = styled(LinearGradient)`
  width: 104px;
  height: 120px;
  align-items: center;
  justify-content: center;

  margin-right: 8px;
  border-radius: 8px;
`;

export const Content = styled.View<StyledCategoryProps>`
  width: 100px;
  height: 116px;
  padding: 8px 0;
  border-radius: 8px;

  align-items: center;
  justify-content: space-between;

  background-color: ${theme.colors.secondary40};
`;

export const CheckedBox = styled.View`
  width: 12px;
  height: 12px;
  margin-right: 8px;
  align-self: flex-end;
  
  border-radius: 3px;
  background-color: ${theme.colors.primary};
`;

export const UncheckedBox = styled.View`
  width: 12px;
  height: 12px;
  margin-right: 8px;
  align-self: flex-end;
  
  border-radius: 3px;
  border: 1px solid ${theme.colors.secondary50};
  background-color: ${theme.colors.secondary100};
`;

export const Title = styled.Text`
  font-size: 15px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.rajdhani500};
`;