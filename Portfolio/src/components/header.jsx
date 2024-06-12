import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [openState, setOpenState] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    if (panelRef.current) {
      if (openState) {
        panelRef.current.style.maxHeight = panelRef.current.scrollHeight + "px";
      } else {
        panelRef.current.style.maxHeight = "0px";
      }
    }
  }, [openState]);

  const togglePanel = () => {
    setOpenState(!openState);
  };

  return (
    <header>
      <div className="header_background">
        <div className="header">
          <NavLink to="/"><img src="./Logo.webp" alt="Logo du site" /></NavLink>
          <nav className="header_nav">
            <NavLink to="https://github.com/Xaarty" className="header_nav_git"><img src="./Github-logo.webp" alt="Logo de Github" /></NavLink>
            <div className="header_nav_block">
              <button className="header_nav_block_button" onClick={togglePanel}>
                <p>Menu</p>
                <div className="header_nav_block_button_dots">
                  <div className="header_nav_block_button_dots_circle"></div>
                  <div className="header_nav_block_button_dots_circle"></div>
                  <div className="header_nav_block_button_dots_circle"></div>
                </div>
              </button>
            </div>
          </nav>
        </div>
        <div className="bar">
          <div className="bar_bar"></div>
          <div className="bar_bar"></div>
        </div>
      </div>
      <div ref={panelRef} className={`menu ${openState ? 'open' : ''}`}>
        <div className="menu_block">
          <div className="menu_block_bar"></div>
          <HashLink to="/#propos" className="menu_block_link"><p>A propos</p></HashLink>
          <HashLink to="/#projets" className="menu_block_link"><p>Mes projets</p></HashLink>
          <HashLink to="/#skills" className="menu_block_link"><p>Skills</p></HashLink>
          <HashLink to="/#github" className="menu_block_link"><p>GitHub</p></HashLink>
        </div>
      </div>
      
    </header>
  );
}
