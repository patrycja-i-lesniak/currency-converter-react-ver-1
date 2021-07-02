
import styled from "styled-components";

export const Title = styled.h1`
    background-color: ${({ theme }) => theme.colors.bigStone};
    color: ${({ theme }) => theme.colors.white};
    padding: 30px;
    margin: auto;
    text-transform: uppercase;
    letter-spacing: 5px;
    word-spacing: 15px;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.xsmall}px) {
      font-size: 1.7em ;
    }
`;
