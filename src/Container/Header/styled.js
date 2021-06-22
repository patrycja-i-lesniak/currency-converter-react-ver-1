
import styled from "styled-components";

export const Title = styled.h1`
    background-color: hsl(221, 51%, 25%);
    border: 1px solid hsl(221, 51%, 25%);
    color: white;
    padding: 30px;
    margin: auto;
    text-transform: uppercase;
    letter-spacing: 5px;
    word-spacing: 15px;
    text-align: center;

    @media (max-width: 390px) {
      font-size: 1.7em ;
    }
`;
