import styled from "styled-components";

export const InputBody = styled.input`
    padding: 20px;
    margin: 0 30px;
    border: 1px solid #ddd;
    color: hsl(0, 0%, 60%);
    box-shadow: ${({ theme }) => theme.shadow};
`;
