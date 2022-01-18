/* eslint-disable react/require-default-props */
import React from 'react';

import { DivProps } from 'interface/DivProps';

import * as Styled from './styles';

const Div = (props: DivProps) => {
  const {
    children,
    display,
    flexDirection,
    justifyContent,
    alignItems,
    mt,
    mb,
    ml,
    mr,
  } = props;
  return (
    <Styled.Container
      display={display}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
    >
      {children}
    </Styled.Container>
  );
};

export default Div;
