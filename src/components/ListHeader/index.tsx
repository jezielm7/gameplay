import React from 'react';

import { Container, Title, SubTitle } from './styles';

interface ListHeaderProps {
  title: string;
  subtitle: string;
}

function ListHeader({ title, subtitle }: ListHeaderProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
};

export default ListHeader;
