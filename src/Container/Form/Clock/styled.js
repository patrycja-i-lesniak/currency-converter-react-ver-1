import styled from "styled-components";

export const Paragraph = styled.p`
    text-align: right;
    font-family: "Source Code Pro", monospace;
    font-size: smaller;
    color: hsla(221, 51%, 25%, 0.749);
    margin-right: 10px;

    @media (max-width: 498px) {
      text-align: center;
    }
`;

