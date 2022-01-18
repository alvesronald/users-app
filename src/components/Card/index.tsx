import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Avatar from 'components/Avatar';
import { UserProps } from 'interface/UserProps';

type CardComponentProps = Pick<UserProps, 'name' | 'username' | 'email'>;

const CardComponent = ({ name, email, username }: CardComponentProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Avatar />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            E-mail: {email}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            User: {username}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
