import Form from "./form";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
      <footer>
        <h2>Pour me contacter</h2> 
        <div className="contact" id="contact">
          < Form />
          <div className="contact_perso">
            <div className="contact_perso_detail">
            <h3>Envoyez moi un mail :</h3>
            <div className="contact_perso_detail_box"><p>caillaud.mikael.pro@gmail.com</p></div>
            </div>
            <div className="contact_perso_detail">
              <h3>Téléphonez moi :</h3>
              <div className="contact_perso_detail_box"><p>06.45.21.49.57</p></div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer_links">
            <HashLink to="/#intro" className="footer_links_arrow"><img src="./arrow_top.webp" alt="flèche de retour en haut de page" /></HashLink>
            <NavLink to="https://github.com/Xaarty" className="footer_links_github"><img src="./Github-logo.webp" alt="Logo de Github" /></NavLink>
          </div>
          <div className="footer_bar">
            <div className="footer_bar_bar"></div>
            <div className="footer_bar_bar"></div>
          </div>
          <p>Caillaud Mikael © 2024</p>
        </div>
        
      </footer>
    );
  }
  