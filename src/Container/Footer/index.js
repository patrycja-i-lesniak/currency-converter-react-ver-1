import { Wrapper } from "./styled.js";
import Paragraph from "../Paragraph";

const Footer = ({ text }) => (
    <Wrapper>
        <Paragraph text={text} />
    </Wrapper>
);

export default Footer;