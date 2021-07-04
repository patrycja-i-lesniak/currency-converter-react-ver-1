import styled from "styled-components";

export const FormButton = styled.button`
    background-color: ${({ theme }) => theme.colors.robinsEggBlue};
    border: none;
    margin: 50px 30px 0px;
    padding: 15px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.woodsmoke};
    box-shadow: ${({ theme }) => theme.shadow};
    transition: filter 0.5s;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;