import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";

export default function Bank () {
    return (
        <section className="block">
            <div className="block_title">
                <h1>Implémentation du front-end d'une application bancaire avec React</h1>
                <h2>Projet OpenClassrooms</h2>
                <div className="block_title_bar"></div>
                <div className="block_title_cards">
                    <div className="block_title_cards_individual">React</div>
                    <div className="block_title_cards_individual">React Router</div>
                    <div className="block_title_cards_individual">Redux</div>
                </div>
            </div>
            <div className="block_imglink">
                <img src="./bank.webp" alt="projet bancaire react" className="projets_individual_card_ancre_img" />
                <div className="block_imglink_card"><NavLink to="https://github.com/Xaarty/Projet8" className="block_imglink_card_git">Projet sur GitHub</NavLink></div>
            </div>
            <div className="block_resume">
                <h2>Quel est la nature de ce projet ?</h2>
                <div className="block_resume_def">
                    <p>Ce projet a lieu dans le cadre de la formation OpenClassrooms de développeur web. Il requiert d'implémenter le front-end de ARGENTBANK à l'aide de <span className="bold">React</span>, <span className="bold">React Router</span> et <span className="bold">Redux</span>.</p>
                </div>
                <h3>Détails du projet</h3>
                <div className="block_resume_def">                  
                    <p>ArgentBank est un site bancaire ou un utilisateur pourra se connecter à son profile pour consulter ses comptes.</p>
                    <p> Il comporte une page d'accueil statique, une page de connection et une page utilisateur lorsque celui ci est connecté.</p>
                    <div className="block_resume_def_imgblock"><img src="./immobilier-react-logement.webp" alt="exemple de logement sur le site kasa" className="block_resume_def_imgblock_img"></img></div>
                    <div className="block_resume_def_list">
                        <p>La fiche logement comporte les détails de la location, à savoir :</p>
                        <ul>
                            <li>Où elle se situe</li>
                            <li>Un caroussel avec toutes les photos de l'appartement</li>
                            <li>Une photo du bailleur</li>
                            <li>Une note de la location</li>
                            <li>Un descriptif de l'appartement</li>
                            <li>Les équipements disponibles</li>
                        </ul>
                    </div>
                    <p>Il y a également une page "À propos". Elle comporte la charte du site, à savoir les quatre notions du site : fiabilité, respect, service et sécurité.</p>
                    <div className="block_resume_def_imgblock"><img src="./immobilier-react-propos.webp" alt="exemple de logement sur le site kasa" className="block_resume_def_imgblock_img"></img></div>
                </div>
            </div>
            <div className="block_stacks">
                <h2>Quels stacks et compétences ai-je pu développer ?</h2>
                <p>Ce projet est le huitième de la formation développeur web. Il est le premier projet où j'ai utilisé <span className="bold">React</span> et <span className="bold">React Router</span>.</p>
                <p>Il m'a permis de comprendre et de mettre en place des routes, et de construire une application en suivant uniquement des instructions et des maquettes.</p>
                <p>J'ai également appris les bonnes pratiques en découpant le code en un maximum de composants réutilisables.</p>
                <p>Évidemment, l'application est responsive et utilise <span className="bold">SASS</span>, que j'avais déjà utilisé auparavant, pour appliquer encore davantage les bonnes pratiques.</p>
                <p>Lors de ce projet, j'ai également dû réaliser un carrousel, que j'avais déjà fait avec du <span className="bold">JavaScript</span> pur, mais cette fois-ci en utilisant les states de <span className="bold">React</span>.</p>
                <p>J'ai aussi réalisé des collapses, ce qui m'a permis d'apprendre à utiliser les states encore davantage.</p>
                <p>L'application n'a pas d'<span className="bold">API</span> dans ce projet, seulement des données <span className="bold">JSON</span> brutes.</p>
            </div>
            <div className="block_end"><div className="block_end_bar"></div></div>
        </section>
    )
}