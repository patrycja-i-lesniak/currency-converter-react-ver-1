import styled from "styled-components";

export const FormButton = styled.button`
    background-color: hsl(221, 51%, 25%);
    border: none;
    margin: 50px 30px 0px;
    padding: 20px;
    color: white;
    box-shadow: 3px 3px 5px hsl(0, 0%, 50%);


    &:hover {
        background-color: hsl(221, 51%, 30%);
        transition: 1s;
    }

    &:active {
        background-color: hsl(221, 51%, 45%);
        transition: 1s;
    }
`;