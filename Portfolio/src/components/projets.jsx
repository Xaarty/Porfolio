import { Link } from "react-router-dom"

export default function Projets() {
    return (
        <section className="projets">
            <div className="projets_bars">
            <div className="projets_bars_bar"></div>
            <div className="projets_bars_bar2"></div>
            </div>
            <h2>Mes projets</h2>
            <div className="projets_individual">
                <h3>Création d'une application web de location immobilière avec React</h3>
                <div className="projets_individual_card">
                    <Link to="/location-immobiliere" className="projets_individual_card_ancre"><img src="./immobilier-react.webp" alt="projet immobilier react" className="projets_individual_card_ancre_img" /></Link>
                    <div className="projets_individual_card_txt">
                        <div className="projets_individual_card_txt_titre"><p>Application de location immobilière</p></div>
                        <div className="projets_individual_card_txt_annee"><p>2024</p></div>
                    </div>
                </div>
                <div className="projets_individual_tags"></div>
            </div>
            <div className="projets_individual">
                <h3>Implémentation du front-end d'une application bancaire avec React</h3>
                <div className="projets_individual_card"></div>
                <div className="projets_individual_tags"></div>
            </div>
        </section>
    )
}