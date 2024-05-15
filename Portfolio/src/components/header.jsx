import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Header() {
    return (
      <header> 
        <div className="header">
          <NavLink to="/" ><img src="./Logo.webp" alt="Logo du site" /></NavLink>
          <NavLink to="https://github.com/Xaarty" className="header_git"><img src="./Github-logo.webp" alt="Logo de Github" /></NavLink>
          <nav className="header_nav">
            <HashLink to="/#propos" className="header_nav_link"><p>A propos</p></HashLink>
            <HashLink to="/#projets" className="header_nav_link"><p>Mes projets</p></HashLink>
            <HashLink to="/#propos" className="header_nav_link"><p>Skills</p></HashLink>
            <HashLink to="/#propos" className="header_nav_link"><p>GitHub</p></HashLink>
          </nav>
        </div>
      </header>
    );
  }
  