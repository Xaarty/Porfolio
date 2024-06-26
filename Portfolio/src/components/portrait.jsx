
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Button from "./button";
import CV from "./cv";

import { HashLink } from "react-router-hash-link";

export default function Portrait() {
    const targetRefPortrait = useRef(null);
    const [inViewPortrait, setInViewPortrait] = useState(false);

    useEffect(() => {
        const handleScrollPortrait = () => {
            if (targetRefPortrait.current) {
                const top = targetRefPortrait.current.getBoundingClientRect().top;
                const bottom = targetRefPortrait.current.getBoundingClientRect().bottom;
                const windowHeight = window.innerHeight;
                const percentageGap = 20;
                const pixelGap = (windowHeight * percentageGap) / 100;

                if ((top < windowHeight - pixelGap && window.scrollY > (window.lastScrollTopPortrait || 0)) ||
                    (bottom > windowHeight - pixelGap - pixelGap && window.scrollY < (window.lastScrollTopPortrait || 0))) {
                    setInViewPortrait(true);
                } else {
                    setInViewPortrait(false);
                }

                window.lastScrollTopPortrait = window.scrollY;
            }
        };

        window.addEventListener("scroll", handleScrollPortrait);
        return () => {
            window.removeEventListener("scroll", handleScrollPortrait);
        };
    }, []);

    return (
        <section className="portrait" ref={targetRefPortrait}>
            <motion.div 
                className="portrait_block"
                animate={{
                    y: inViewPortrait ? "0" : "-200%"
                }}
                transition={{
                    duration: 0.3,
                    type: "easeInOut"
                }}
            >
                <div className="portrait_block_txt">
                    <h2 className="portrait_block_txt_title">Mikael Caillaud</h2>
                    <h3 className="portrait_block_txt_subtitle">Développeur web Front-end</h3>
                    <div className="portrait_block_txt_buttons">
                        <HashLink to="/#contact" className="portrait_block_txt_buttons_button">
                            <Button className="portrait_block_txt_buttons_button portrait_block_txt_buttons_buttonancre button" txt="ME CONTACTER" />
                        </HashLink>
                        <CV className="portrait_block_txt_buttons_button button" txt="MON CV" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
