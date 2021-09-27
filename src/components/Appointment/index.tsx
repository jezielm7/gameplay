import React from 'react';
import { RectButton } from 'react-native-gesture-handler';

import GuildIcon from '../GuildIcon';

import PlayerSvg from '../../assets/icons/player.svg';
import CalendarSvg from '../../assets/icons/calendar.svg';

import { categories } from '../../utils/categories';

import { Props } from './types';

import {
  Container,
  Content,
  Header,
  Footer,
  DateInfo,
  Date,
  Title,
  Category,
  PlayersInfo,
  Player,
} from './styles';
import { theme } from '../../global/styles/theme';

function Appointment({ data, ...rest }: Props) {
  const [category] = categories.filter(item => `${item.id}` === data.category);

  const { owner } = data.guild;

  const { primary, on } = theme.colors;

  return (
    <RectButton {...rest}>
      <Container>
        <GuildIcon />

        <Content>
          <Header>
            <Title>{data.guild.name}</Title>

            <Category>{category.title}</Category>
          </Header>

          <Footer>
            <DateInfo>
              <CalendarSvg />

              <Date>{data.date}</Date>
            </DateInfo>

            <PlayersInfo>
              <PlayerSvg fill={owner ? primary : on} />

              <Player
                style={{ color: owner ? primary : on }}
              >
                {owner ? 'Anfitrião' : 'Visitante'}
              </Player>
            </PlayersInfo>
          </Footer>
        </Content>
      </Container>
    </RectButton>
  );
};

export default Appointment;
