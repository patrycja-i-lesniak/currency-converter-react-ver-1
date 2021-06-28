import styled from "styled-components";

export const FormBody = styled.form`
    background-color: ${({ theme }) => theme.colors.FrenchPass};
    justify-content: center;
`;

export const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    border: none ;
    background-color: rgb(198, 233, 247);
    min-width: 280px;
`;
