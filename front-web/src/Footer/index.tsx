import "./styles.css";
import { ReactComponent as Youtube } from "./youtube.svg";
import { ReactComponent as Linkedin } from "./linkedin.svg";
import { ReactComponent as Instagram } from "./instagram.svg";

function Footer(){
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g" target="_new">
                    <Youtube/>
                </a>
                <a href="https://www.linkedin.com/in/ot%C3%A1vio-augusto-04b408169/" target="_new">
                    <Linkedin/>
                </a>
                <a href="https://www.instagram.com/otavio.a.s.cavalcanti/?hl=pt-br" target="_new">
                    <Instagram/>
                </a>
            </div>
            
        </footer>
    )
}

export default Footer;