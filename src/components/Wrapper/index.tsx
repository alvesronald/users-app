import React from 'react';

import Navbar from 'components/NavBar';

import * as Styled from './styles';

type Props = { children: React.ReactNode };

const Wrapper = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <Styled.Container>{children}</Styled.Container>
    </>
  );
};
export default Wrapper;
