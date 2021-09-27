import React from 'react';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton as Button } from 'react-native-gesture-handler';

import Background from '../../components/Background';
import Header from '../../components/Header';

import Banner from '../../assets/images/banner.png';

import { theme } from '../../global/styles/theme';

import {
  Image,
  BannerContent,
  Title,
  SubTitle,
} from './styles';
import ListHeader from '../../components/ListHeader';

function AppointmentDetails() {
  function handleShareInvitation() {

  }

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <Button onPress={handleShareInvitation}>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </Button>
        }
      />

      <Image source={Banner}>
        <BannerContent>
          <Title>COD Warzone</Title>

          <SubTitle>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10.
          </SubTitle>
        </BannerContent>
      </Image>

      <ListHeader title="Jogadores" subtitle="Total 3" />
    </Background>
  );
};

export default AppointmentDetails;
