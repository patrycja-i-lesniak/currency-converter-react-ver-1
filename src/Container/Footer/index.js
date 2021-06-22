import "./style.css";
import Paragraph from "../Paragraph";

const Footer = ({ text }) => (
    <footer className="footer">
        <Paragraph text={text} />
    </footer>
);

export default Footer;