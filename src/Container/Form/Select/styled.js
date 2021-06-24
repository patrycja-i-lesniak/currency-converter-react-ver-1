import styled from "styled-components";

export const Wrapped = styled.select`
    margin: 0 30px;
    border: 1px solid #ddd;
    padding: 20px;
    box-shadow: ${({ theme }) => theme.shadow};
    height: 60px;
`;
