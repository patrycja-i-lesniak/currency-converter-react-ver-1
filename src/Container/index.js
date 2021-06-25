import styled from "styled-components";

export const Container = styled.main`
    max-width: 650px;
    margin: 15px auto;
    box-shadow: ${({ theme }) => theme.shadow};
    font-family: "Lato", sans-serif;
    min-width: 280px;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
      margin: 15px;
    }
`;



