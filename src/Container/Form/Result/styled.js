import styled, { css } from "styled-components"

export const Wrapped = styled.div`
    text-align: center;
    margin: 20px;
    color:  ${({ theme }) => theme.colors.bigStone};
`;

export const Paragraph = styled.p`
    font-size: larger;

    ${({ bolder }) => bolder && css`
        font-weight: 900;
    `}
`;