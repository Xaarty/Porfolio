import { Link } from "react-router-dom"

export default function Location () {
    return (
        <section className="block">
            <div className="block_title">
                <h1>Création d'une application web de location immobilière avec React</h1>
                <div></div>
            </div>
            <div className="block_imglink">
                <Link to="/location-immobiliere" className="projets_individual_card_ancre"><img src="./immobilier-react.webp" alt="projet immobilier react" className="projets_individual_card_ancre_img" /></Link>
                <div><Link to="" >Projet sur GitHub</Link></div>
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