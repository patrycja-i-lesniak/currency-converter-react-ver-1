import { FooterElement } from "./styled.js";
import Paragraph from "../Paragraph";

const Footer = ({ text }) => (
    <FooterElement>
        <Paragraph text={text} />
    </FooterElement>
);

export default Footer;