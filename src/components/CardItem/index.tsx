import React from 'react';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from 'components/Avatar';
import { UserProps } from 'interface/UserProps';

import * as Styled from './styles';

type CardComponentProps = Pick<UserProps, 'name' | 'username' | 'email'>;

const CardComponent = ({ name, email, username }: CardComponentProps) => {
  return (
    <Styled.Container>
      <Styled.CardContentArea>
        <Avatar />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="h6">E-mail: {email}</Typography>
          <Typography variant="h6">User: {username}</Typography>
        </CardContent>
      </Styled.CardContentArea>
    </Styled.Container>
  );
};

export default CardComponent;
