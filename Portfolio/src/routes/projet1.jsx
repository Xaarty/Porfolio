import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";

export default function Location () {
    return (
        <section className="block">
            <div className="block_title">
                <h1>Création d'une application web de location immobilière avec React</h1>
                <h2>Projet OpenClassrooms</h2>
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
                <div className="block_resume_def">
                    <p>Ce projet a lieu dans le cadre de la formation OpenClassrooms de développeur web. Il requiert d'implémenter le front-end de KASA à l'aide de React et React Router.</p>
                    <p>Kasa est un site de location immobilier. Il à une page d'acceuil avec des logements en photo, lorsque l'utilisateur clique sur la photo du logement, il est redirigé vers la fiche du logement.</p>
                    <div className="block_resume_def_imgblock"><img src="./immobilier-react-logement.webp" alt="exemple de logement sur le site kasa" className="block_resume_def_imgblock_img"></img></div>
                    <p className="before_list">La fiche logement comporte les détails de la location, à savoir :</p>
                    <ul>
                        <li>Ou elle se situe</li>
                        <li>Un caroussel avec toutes les photos de l'appartement</li>
                        <li>Une photo du bailleur</li>
                        <li>Une note</li>
                        <li>Un descriptif de l'appartement</li>
                        <li>Les équipements disponible</li>
                    </ul>
                </div>
            </div>
            <div className="block_stacks">
                <h3>Quels stacks et compétences j'ai pu développer ?</h3>
                <p></p>
            </div>
        </section>
    )
}