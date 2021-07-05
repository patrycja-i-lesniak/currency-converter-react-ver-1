import styled from "styled-components";

export const Footer = styled.footer`
    text-align: center;
    font-size: smaller;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.woodsmoke};
    font-weight: 700;
    padding: 15px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.selectiveYellow};
`;
