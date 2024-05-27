import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";

export default function Location () {
    return (
        <section className="block">
            <div className="block_title">
                <h1>Création d'une application web de location immobilière avec React</h1>
                <div className="block_title_bar"></div>
                <div className="block_title_cards">
                    <div className="block_title_cards_individual">React</div>
                    <div className="block_title_cards_individual">React Router</div>
                </div>
            </div>
            <div className="block_imglink">
                <img src="./immobilier-react.webp" alt="projet immobilier react" className="projets_individual_card_ancre_img block_imglink_img" />
                <div className="block_imglink_card"><NavLink to="https://github.com/Xaarty/Projet8" className="block_imglink_card_git">Projet sur GitHub</NavLink></div>
            </div>
            <div className="block_resume">
                <h2>Quel est la nature de ce projet ?</h2>
                <p></p>
            </div>
            <div className="block_stacks">
                <h3>Quels stacks et compétences j'ai pu développer ?</h3>
                <p></p>
            </div>
        </section>
    )
}