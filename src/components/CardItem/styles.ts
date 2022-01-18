import styled, { css } from 'styled-components';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import { Typography as TypographyMaterial } from '@mui/material';

export const Container = styled(Card)`
  height: 400px;
  width: 300px;
  margin: 10px;
`;

export const CardContentArea = styled(CardActionArea)`
  ${({ theme }) => css`
    && {
      background-color: ${theme.colors.terciary};
      color: ${theme.colors.colorText};
    }
  `}
`;

export const Typography = styled(TypographyMaterial)`
  ${({ theme }) => css`
    && {
      color: ${theme.colors.colorText};
    }
  `}
`;
