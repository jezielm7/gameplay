import React from 'react';

import Category from '../Category';

import { categories } from '../../utils/categories';

import { Container } from './styles';

interface Props {
  hasCheckBox?: boolean;
  categorySelected: string;
  setCategory: (categoryId: string) => void;
}

function CategoryList({
  categorySelected,
  setCategory,
  hasCheckBox = false,
}: Props) {
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
          hasCheckBox={hasCheckBox}
        />
      ))}
    </Container>
  );
};

export default CategoryList;
