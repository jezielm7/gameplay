import React, { useState } from 'react';
import { LogBox } from 'react-native';

import Background from '../../components/Background';
import ButtonAdd from '../../components/ButtonAdd';
import CategoryList from '../../components/CategoryList';
import Profile from '../../components/Profile';

import { Container, Header, Category } from './styles';

function Home() {
  LogBox.ignoreLogs(['Expected style']);

  const [category, setCategory] = useState(0);

  function handleCategorySelect(categoryId: number) {
    categoryId === category ? setCategory(0) : setCategory(categoryId);
  }
  return (
    <Background>
      <Container>
        <Header>
          <Profile />
          <ButtonAdd />
        </Header>

        <Category>
          <CategoryList
            categorySelected={category}
            setCategory={handleCategorySelect}
          />
        </Category>
      </Container>
    </Background>
  );
};

export default Home;
