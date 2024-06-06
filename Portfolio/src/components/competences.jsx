import Collapse from "./collapse";


export default function Competences() {{
    return (
        <section className="competences">
            <h2>Mes compétences</h2>
            <div className="competences_cards">
                <div className="competences_cards_card">
                    <h3>Langages</h3>
                    <div className="competences_cards_card_block">
                        <div className="competences_cards_card_block_individual">
                            <h4>HTML5</h4>
                            <div className="competences_cards_card_block_individual_img">
                                <img src="./html-logo.webp" alt="figma logo" />
                            </div>
                        </div>
                        <div className="competences_cards_card_block_individual">
                            <h4>CSS3</h4>
                            <div className="competences_cards_card_block_individual_img">
                                <img src="./css-logo.webp" alt="figma logo" />
                            </div>
                            <Collapse />
                        </div>
                        <div className="competences_cards_card_block_individual">
                            <h4>JavaScript</h4>
                            <div className="competences_cards_card_block_individual_img">
                                <img src="./javascript-logo.webp" alt="figma logo" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="competences_cards_card">
                    <h3>CMS</h3>
                    <div className="competences_cards_card_block">
                        <div className="competences_cards_card_block_individual">
                            <h4>Prismic</h4>
                            <div className="competences_cards_card_block_individual_img">
                                <img src="./icon-prismic.webp" alt="figma logo" />
                            </div>
                        </div>
                        <div className="competences_cards_card_block_individual">
                            <h4>WordPress</h4>
                            <div className="competences_cards_card_block_individual_img">
                                <img src="./logo-wordpress.webp" alt="figma logo" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="competences_cards_card">
                    <h3>Gestion de projet</h3>
                    <div className="competences_cards_card_block">
                        <div className="competences_cards_card_block_individual">
                            <h4>Notion</h4>
                            <div className="competences_cards_card_block_individual_img">
                                <img src="./logo-notion.webp" alt="figma logo" />
                            </div>
                        </div>
                        <div className="competences_cards_card_block_individual">
                            <h4>Figma</h4>
                            <div className="competences_cards_card_block_individual_img">
                                <img src="./logo-figma.webp" alt="figma logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}}