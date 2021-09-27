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
  hasCheckBox?: boolean;
}

function Category({
  title,
  icon: Icon,
  checked = false,
  hasCheckBox = false,
  ...rest
}: CategoryProps) {
  const { secondary40, secondary50, secondary70, secondary75 } = theme.colors;

  return (
    <RectButton {...rest}>
      <Container colors={[secondary50, secondary70]}>
        <Content
          colors={[checked ? secondary75 : secondary50, secondary40]}
          style={{ opacity: checked ? 1 : 0.5 }}
        >
          {hasCheckBox ?
            checked ? (
              <>
                <CheckedBox />
                <Icon width={48} height={48} />
              </>
            ) : (
              <>
                <UncheckedBox />
                <Icon width={48} height={48} />
              </>
            ) :
            <Icon width={48} height={48} />
          }

          <Title>{title}</Title>
        </Content>
      </Container>
    </RectButton>
  );
};

export default Category;
