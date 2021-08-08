import React from 'react';

import { theme } from '../../global/styles/theme';

import { Container } from './styles';

interface BackgroundProps {
  children: React.ReactNode;
}

function Background({ children }: BackgroundProps) {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <Container colors={[secondary80, secondary100]}>
      {children}
    </Container>
  );
};

export default Background;
