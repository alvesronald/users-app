import styled, { css } from 'styled-components';
import { DivProps } from 'interface/DivProps';

export const Container = styled.div<DivProps>`
  ${({ theme, display, flexDirection, mt, mb, ml, mr }) => css`
    background-color: ${theme.colors.background};
    height: auto;
    width: 100vw;
    display: ${display || 'inline'};
    flex-direction: ${flexDirection || 'row'};
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: ${mb || 0};
    margin-left: ${ml || 0};
    margin-top: ${mt || 0};
    margin-right: ${mr || 0};
  `}
`;
