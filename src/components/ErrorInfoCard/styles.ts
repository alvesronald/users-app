import styled, { css } from 'styled-components';
import Typography from '@mui/material/Typography';

export const Container = styled.div`
  ${() => css`
    display: flex;
    width: 100vw;
    height: 6rem;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    margin-top: 10px;
  `}
`;

export const Text = styled(Typography)`
  color: #ff5959;
`;
