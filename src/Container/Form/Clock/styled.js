import styled from "styled-components";

export const Paragraph = styled.p`
    text-align: right;
    font-family: "Source Code Pro", monospace;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.selectiveYellow};
    margin-right: 10px;
    opacity: 50%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mall}px) {
      text-align: center;
    }
`;