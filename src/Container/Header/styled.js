
import styled from "styled-components";

export const Title = styled.h1`
    background-color: ${({ theme }) => theme.colors.torchRed};
    color: ${({ theme }) => theme.colors.woodsmoke};
    padding: 30px;
    margin: auto;
    text-transform: uppercase;
    letter-spacing: 5px;
    word-spacing: 15px;
    text-align: center;
`;