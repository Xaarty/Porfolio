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
                <img src="./bank.webp" alt="projet bancaire react" className="projets_individual_card_ancre_img block_imglink_img" />
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
                    <p>La page de connexion comporte un formulaire de connection, qui communique avec l'<span className="bold">API</span> grâce à un formData.</p>
                    <div className="block_resume_def_imgblock"><img src="./bank_log.webp" alt="page de connexion du projet ArgentBank" className="block_resume_def_imgblock_img"></img></div>
                    <p>Pour la page utilisateur, les informations bancaire sont en brut, les données bancaires ne sont pas encore disponible via un back-end.</p>
                    <div className="block_resume_def_imgblock"><img src="./bank_user.webp" alt="page user du projet ArgentBank" className="block_resume_def_imgblock_img"></img></div>
                    <p>Cette page utilisateur est sécurisée en utilisant les states <span className="bold">redux</span>, qui vérifie la conformité du token. Pour affiché le message de bienvenue et le nom de l'utilisateur au niveau du header, on récupère les données utilisateur avec un appel à l'<span className="bold">API</span>.</p>
                    <p>On peut changer le username dans les données utilisateur, grâce à la modale qui s'ouvre via le bouton "edit name".</p>
                    <div className="block_resume_def_imgblock"><img src="./bank_user_modale.webp" alt="page user du projet ArgentBank avec la modale de changement d'username ouvert" className="block_resume_def_imgblock_img"></img></div>
                    <div className="block_resume_def_sub">
                        <p>Les données sont envoyé à l'<span className="bold">API</span> grâce à une fonction asynchrone PUT et un formulaire. Puis on va actualiser la donnée user avec le nouveau username et l'afficher.</p>
                    </div>
                    <p>Le projet demandait également d'écrire trois nouvelles routes pour consulter un mois de transactions, consulter une transaction spécifique et ajouter, supprimer,modifier des informations sous-jacente à une transaction.</p>
                    <div className="block_resume_def_imgblock"><img src="./bank_new_routes.webp" alt="nouvelles routes du projet ArgentBank" className="block_resume_def_imgblock_img"></img></div>
                </div>
            </div>
            <div className="block_stacks">
                <h2>Quels stacks et compétences ai-je pu développer ?</h2>
                <p>Ce projet est le onzième de la formation développeur web. Je dois utiliser <span className="bold">React</span> et <span className="bold">React Router</span> que j'ai déjà utilisé auparavant, ainsi qu'utiliser <span className="bold">Redux</span> pour la première fois.</p>
                <p>J'ai pu approfondir mes connaissances de <span className="bold">React</span> et <span className="bold">React Router</span> qui sont nécessaires pour un développeur front-end.</p>
                <p>J'ai continué les bonnes pratiques de découpe du code en un maximum de composants réutilisables, avec <span className="bold">SASS</span>, un maximum de components, de fichiers différents en fonction des appels <span className="bold">API</span>.</p>
                <p>Évidemment, l'application est responsive et utilise <span className="bold">SASS</span>, que j'avais déjà utilisé auparavant, pour appliquer encore davantage les bonnes pratiques.</p>
                <p>Ce projet est comme un rappel des différentes connaissances que j'ai pu acquerir:</p>
                <ul>
                    <li>Mise en place d'une applications <span className="bold">React</span> avec <span className="bold">React Router</span>, à partir d'une page statique.</li>
                    <li>Gérer des appels <span className="bold">API</span> pour les connexions et actualisations de données.</li>
                    <li>Sécuriser la connexion utilisateur.</li>
                    <li>Mettre en place une application responsive.</li>
                    <li>Mettre en place les bonnes pratiques.</li>
                </ul>
                <p>De plus, j'ai pu me former à l'utilisation de <span className="bold">React-Redux</span>, pour gérer les states de l'application de manière globale.</p>
            </div>
            <div className="block_end"><div className="block_end_bar"></div></div>
        </section>
    )
}