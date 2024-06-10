import Collapse from "./collapse";
import JsonData from "../frameworks.json";

export default function Competences() {
    const getFrameworksForLanguage = (language) => {
        const data = JsonData.find(item => item.language === language);
        return data ? data.frameworks : [];
    };

    return (
        <section className="competences">
            <h2>MES COMPÉTENCES</h2>
            <div className="competences_cards">
                <div className="competences_cards_card">
                    <h3>Langages</h3>
                    <div className="competences_cards_card_block">
                        <div className="competences_cards_card_block_individual">
                            <h4>HTML5</h4>
                            <div className="competences_cards_card_block_individual_img">
                                <img src="./html-logo.webp" alt="html logo" />
                            </div>
                        </div>
                        <div className="competences_cards_card_block_individual">
                            <h4>CSS3</h4>
                            <div className="competences_cards_card_block_individual_img">
                                <img src="./css-logo.webp" alt="css logo" />
                            </div>
                            <Collapse frameworks={getFrameworksForLanguage("CSS3")} />
                        </div>
                        <div className="competences_cards_card_block_individual">
                            <h4>JavaScript</h4>
                            <div className="competences_cards_card_block_individual_img">
                                <img src="./javascript-logo.webp" alt="javascript logo" />
                            </div>
                            <Collapse frameworks={getFrameworksForLanguage("JavaScript")} />
                        </div>
                    </div>
                </div>
                <div className="competences_cards_card">
                    <h3>CMS</h3>
                    <div className="competences_cards_card_block">
                        <div className="competences_cards_card_block_individual">
                            <h4>Prismic</h4>
                            <div className="competences_cards_card_block_individual_img">
                                <img src="./icon-prismic.webp" alt="prismic logo" />
                            </div>
                        </div>
                        <div className="competences_cards_card_block_individual">
                            <h4>WordPress</h4>
                            <div className="competences_cards_card_block_individual_img">
                                <img src="./logo-wordpress.webp" alt="wordpress logo" />
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
                                <img src="./logo-notion.webp" alt="notion logo" />
                            </div>
                            <Collapse frameworks={getFrameworksForLanguage("Notion")} />
                        </div>
                        <div className="competences_cards_card_block_individual">
                            <h4>Figma</h4>
                            <div className="competences_cards_card_block_individual_img">
                                <img src="./logo-figma.webp" alt="figma logo" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="competences_cards_card">
                    <h3>Outils</h3>
                    <div className="competences_cards_card_block">
                        <div className="competences_cards_card_block_individual">
                            <h4>Visual Studio Code</h4>
                            <div className="competences_cards_card_block_individual_img">
                                <img src="./vscode-logo.webp" alt="vscode logo" />
                            </div>
                        </div>
                        <div className="competences_cards_card_block_individual">
                            <h4>GitHub</h4>
                            <div className="competences_cards_card_block_individual_img">
                                <img src="./github_logo-2.webp" alt="github logo" />
                            </div>
                        </div>
                        <div className="competences_cards_card_block_individual">
                            <h4>Git</h4>
                            <div className="competences_cards_card_block_individual_img">
                                <img src="./git-logo.webp" alt="git logo" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="competences_cards_card">
                    <h3>SEO</h3>
                    <div className="competences_cards_card_block">
                        <div className="competences_cards_card_block_individual">
                            <h4>Lighthouse</h4>
                            <div className="competences_cards_card_block_individual_img">
                                <img src="./lighthouse-logo.webp" alt="lighthouse logo" />
                            </div>
                        </div>
                        <div className="competences_cards_card_block_individual">
                            <h4>Wave Tool</h4>
                            <div className="competences_cards_card_block_individual_img">
                                <img src="./wave-icon.webp" alt="wave tool logo" />
                            </div>
                        </div>
                        <div className="competences_cards_card_block_individual">
                            <h4>Git</h4>
                            <div className="competences_cards_card_block_individual_img">
                                <img src="./react-dev-tools-icon.webp" alt="react developper tools logo" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="competences_cards_card">
                    <h3>API</h3>
                    <div className="competences_cards_card_block">
                        <div className="competences_cards_card_block_individual">
                            <h4>Swagger</h4>
                            <div className="competences_cards_card_block_individual_img">
                                <img src="./swagger-logo.webp" alt="swagger logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
