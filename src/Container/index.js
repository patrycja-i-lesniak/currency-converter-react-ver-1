import styled from "styled-components";

export const Container = styled.main`
    max-width: 450px;
    margin: 15px auto;
    box-shadow: ${({ theme }) => theme.shadow};
    font-family: "Lato", sans-serif;
    min-width: 280px;
    background-color: ${({ theme }) => theme.colors.selectiveYellow};

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
      margin: 15px;
    }
`;



