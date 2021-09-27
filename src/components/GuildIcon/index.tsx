import React from 'react';

import { Image } from './styles';

interface GuildIconProps {

}

function GuildIcon({ }: GuildIconProps) {
  const uri = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png';

  return (
    <Image
      source={{ uri }}
      resizeMode="cover"
    />
  );
};

export default GuildIcon;
