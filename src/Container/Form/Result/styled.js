import styled, {css} from "styled-components"

export const Wrapped = styled.div`
    text-align: center;
    margin: 20px;
    color: hsl(221, 51%, 25%);
`;

export const Paragraph = styled.p`
    font-size: larger;

    ${({ bolder }) => bolder && css`
        font-weight: 900;
`}
`;