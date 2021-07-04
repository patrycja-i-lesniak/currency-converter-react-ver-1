import styled, { css } from "styled-components"

export const Wrapped = styled.div`
    text-align: center;
    margin: 20px;
    color:  ${({ theme }) => theme.colors.torchRed};
`;

export const Paragraph = styled.p`
    font-size: 16px;

    ${({ bolder }) => bolder && css`
        font-weight: 900;
    `}
`;