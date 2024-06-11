import { useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "./icon_arrow";

export default function Caroussel({ projets }) {
    const [slide, setSlide] = useState(0);

    const slideRight = () => {
        console.log("Slide right clicked"); // Pour déboguer
        setSlide((slide + 1) % projets.length);
    };

    const slideLeft = () => {
        console.log("Slide left clicked"); // Pour déboguer
        setSlide((slide - 1 + projets.length) % projets.length);
    };

    return (
        <div className="caroussel">
            <h3>{projets[slide].title}</h3>
            <div className="caroussel_block">
                <div className="caroussel_block_slide">
                    <Link to={projets[slide].path} className="caroussel_block_slide_link">
                        <img src={projets[slide].picture} alt={projets[slide].title} />
                    </Link>
                    <div className="caroussel_block_slide_buttons">
                        <button onClick={slideLeft} className="caroussel_block_slide_buttons_button arrow_left">
                            <Arrow />
                        </button>
                        <button onClick={slideRight} className="caroussel_block_slide_buttons_button arrow_right">
                            <Arrow />
                        </button>
                    </div>
                    <div className="caroussel_block_slide_tag">
                       <div className="caroussel_block_slide_tag_background">
                            <div className="caroussel_block_slide_tag_background_titre">
                                <p>{projets[slide].subtitle}</p>
                            </div>
                            <div className="caroussel_block_slide_tag_background_annee">
                                <p>{projets[slide].annee}</p>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
