import styled, { css } from "styled-components";

export const BaseFormField = css`
    padding: 20px;
    margin: 0 30px;
    border: 1px solid #ddd;
    box-shadow: ${({ theme }) => theme.shadow};
`;

export const InputBody = styled.input`
    ${BaseFormField}
    color: hsl(0, 0%, 60%);
`;

