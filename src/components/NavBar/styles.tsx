import styled, { css } from 'styled-components';

export const Nav = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    width: 100vw;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const NavItem = styled.div``;
