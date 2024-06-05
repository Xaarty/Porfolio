import Form from "./form";

export default function Footer() {
    return (
      <footer>
        <h2>Pour me contacter</h2> 
        <div className="contact">
          < Form />
          <div className="contact_perso">
            <div className="contact_perso_detail">
            <h3>Envoyez moi un mail:</h3>
            <div className="contact_perso_detail_box"><p>caillaud.mikael.pro@gmail.com</p></div>
            </div>
            <div className="contact_perso_detail">
              <h3>Téléphonez moi:</h3>
              <div className="contact_perso_detail_box"><p>06.45.21.49.57</p></div>
            </div>
          </div>
        </div>
        
        
      </footer>
    );
  }
  