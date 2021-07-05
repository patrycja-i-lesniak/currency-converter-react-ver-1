import styled from "styled-components";
import LoadingGif from "./loading.gif";
import NoInternetGif from "./nointernet.gif";

export const FormBody = styled.form`
    background-color: ${({ theme }) => theme.colors.woodsmoke};
    justify-content: center;
`;

export const Fieldset = styled.fieldset`
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border: none ;
    background-color: ${({ theme }) => theme.colors.woodsmoke};
    min-width: 280px;
`;

export const Input = styled.input`
    padding: 10px;
    margin: 0 30px;
    border: 1px solid ${({ theme }) => theme.colors.alto};
    box-shadow: ${({ theme }) => theme.shadow};
    color: hsl(0, 0%, 60%);
    border-radius: 5px;
`;

export const Loading = styled.img.attrs({
    src: LoadingGif,
})`
        align-self: center;
        width: 300px;
        margin-bottom: 60px;
`;

export const NoInternet = styled.img.attrs({
    src: NoInternetGif,
})`
        align-self: center;
        width: 300px;
        margin-bottom: 60px;
`;