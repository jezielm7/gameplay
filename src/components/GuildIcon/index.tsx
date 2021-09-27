import React from 'react';

import { Image } from './styles';

interface GuildIconProps {

}

function GuildIcon({ }: GuildIconProps) {
  const uri = 'https://www.citypng.com/public/uploads/preview/-41606476138orpfh1ws3t.png';

  return (
    <Image
      source={{ uri }}
      resizeMode="cover"
    />
  );
};

export default GuildIcon;
