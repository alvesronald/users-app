import React from 'react';

import Typography from '@mui/material/Typography';
import { ButtonSwitchTheme } from 'components/ButtonSwitchTheme';

import * as Styled from './styles';

const Navbar = () => (
  <Styled.Nav>
    <Styled.NavItem>
      <Typography variant="h4" component="div" ml={5}>
        USERS
      </Typography>
    </Styled.NavItem>
    <Styled.NavItem>
      <Typography variant="h4" component="div" mr={5}>
        <ButtonSwitchTheme />
      </Typography>
    </Styled.NavItem>
  </Styled.Nav>
);

export default Navbar;
