import React, { useState } from 'react';
import { LogBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Background from '../../components/Background';
import Profile from '../../components/Profile';
import ButtonAdd from '../../components/ButtonAdd';
import CategoryList from '../../components/CategoryList';
import ListHeader from '../../components/ListHeader';
import Appointment from '../../components/Appointment';
import ListDivider from '../../components/ListDivider';

import Appointments from './mock';

import {
  Container,
  Header,
  Content,
  Matches,
} from './styles';

function Home() {
  LogBox.ignoreLogs(['Expected style']);

  const { navigate } = useNavigation();

  const [category, setCategory] = useState('');

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function AppointmentDetailsNavigate() {
    navigate('Details');
  }

  return (
    <Background>
      <Container>
        <Header>
          <Profile />
          <ButtonAdd />
        </Header>

        <CategoryList
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <Content>
          <ListHeader title="Partidas Agendadas" subtitle="Total 6" />

          <Matches
            data={Appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment
                data={item}
                onPress={AppointmentDetailsNavigate}
              />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={ListDivider}
          />
        </Content>
      </Container>
    </Background>
  );
};

export default Home;
