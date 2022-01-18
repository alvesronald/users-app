import React from 'react';

import ReplayIcon from '@mui/icons-material/Replay';
import { Tooltip } from '@mui/material';
import { Button } from '@mui/material';

import * as Styled from './styles';

const style = { width: 35, height: 35, color: '#ff5959' };

interface ErrorInfoCardProps {
  reloadButton: () => void;
}

const ErrorInfoCard = ({ reloadButton }: ErrorInfoCardProps) => (
  <Styled.Container>
    <Styled.Text variant="h4">Erro ao obter informações</Styled.Text>
    <Tooltip title="Recarregar" arrow>
      <Button color="inherit" onClick={reloadButton}>
        <ReplayIcon fontSize="large" style={style} />
      </Button>
    </Tooltip>
  </Styled.Container>
);

export default ErrorInfoCard;
