import styled from "styled-components";

export const FormBody = styled.form`
    background-color: ${({ theme }) => theme.colors.frenchPass};
    justify-content: center;
`;

export const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    border: none ;
    background-color: ${({ theme }) => theme.colors.frenchPass};
    min-width: 280px;
`;

export const Input = styled.input`
    padding: 20px;
    margin: 0 30px;
    border: 1px solid ${({ theme }) => theme.colors.alto};
    box-shadow: ${({ theme }) => theme.shadow};
    color: hsl(0, 0%, 60%);
`;
