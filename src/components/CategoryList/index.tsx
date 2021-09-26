import React from 'react';

import Category from '../Category';

import { categories } from '../../utils/categories';

import { Container } from './styles';

interface Props {
  categorySelected: number;
  setCategory: (categoryId: number) => void;
}

function CategoryList({ categorySelected, setCategory }: Props) {
  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map(category => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </Container>
  );
};

export default CategoryList;
