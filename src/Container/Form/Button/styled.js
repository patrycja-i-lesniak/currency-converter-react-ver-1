import styled from "styled-components";

export const FormButton = styled.button`
    background-color: ${({ theme }) => theme.colors.BigStone};
    border: none;
    margin: 50px 30px 0px;
    padding: 20px;
    color: white;
    box-shadow: ${({ theme }) => theme.shadow};


    &:hover {
        background-color: ${({ theme }) => theme.colors.Astronaut};
        transition: 1s;
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.SanMarino};
        transition: 1s;
    }
`;