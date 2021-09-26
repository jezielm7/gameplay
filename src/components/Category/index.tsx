import React from 'react';

import { SvgProps } from 'react-native-svg';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { theme } from '../../global/styles/theme';

import {
  Container,
  Content,
  CheckedBox,
  UncheckedBox,
  Title,
} from './styles';

interface CategoryProps extends RectButtonProps {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}

function Category({ title, icon: Icon, checked = false, ...rest }: CategoryProps) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <RectButton {...rest}>
      <Container colors={[secondary50, secondary70]}>
        <Content
          style={{ opacity: checked ? 1 : 0.5 }}
        >
          {checked ? (
            <>
              <CheckedBox />
              <Icon width={48} height={48} />
            </>
          ) : (
            <>
              <UncheckedBox />
              <Icon width={48} height={48} />
            </>
          )}

          <Title>{title}</Title>
        </Content>
      </Container>
    </RectButton>
  );
};

export default Category;
