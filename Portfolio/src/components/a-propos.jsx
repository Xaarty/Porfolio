
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Propos() {
    const targetRefPropos = useRef(null);
    const [inViewPropos, setInViewPropos] = useState(false);

    useEffect(() => {
        const handleScrollPropos = () => {
            if (targetRefPropos.current) {
                const top = targetRefPropos.current.getBoundingClientRect().top;
                const bottom = targetRefPropos.current.getBoundingClientRect().bottom;
                const windowHeight = window.innerHeight;
                const percentageGap = 50;
                const pixelGap = (windowHeight * percentageGap) / 100;

                if ((top < windowHeight - pixelGap && window.scrollY > (window.lastScrollTop || 0)) ||
                    (bottom > windowHeight - pixelGap && window.scrollY < (window.lastScrollTop || 0))) {
                    setInViewPropos(true);
                } else {
                    setInViewPropos(false);
                }

                window.lastScrollTop = window.scrollY;
            }
        };

        window.addEventListener("scroll", handleScrollPropos);
        return () => {
            window.removeEventListener("scroll", handleScrollPropos);
        };
    }, []);

    return (
        <section ref={targetRefPropos}>
            <motion.div
                className="propos"
                animate={{
                    x: inViewPropos ? "0" : "-100%"
                }}
                transition={{
                    duration: 0.3,
                    type: "easeInOut"
                }}
            >
                <div className="propos_container">
                    <div className="propos_container_1"></div>
                    <div className="propos_container_2"></div>
                    <div className="propos_container_3"></div>
                    <div className="propos_container_4"></div>
                    <div className="propos_container_5"></div>
                </div>
                <div className="propos_txt">
                    <h2 className="propos_txt_title">À propos de moi</h2>
                    <p className="propos_txt_paragraph">
                        Je suis détenteur d'une certification professionnelle de développeur informatique (équivalent BAC+2).
                    </p>
                    <p>Je me suis reconverti professionnellement en 2023 après avoir été intérimaire depuis 2019.</p>
                    <p>Je suis passionné par l'informatique depuis longtemps, et ce n'est que très récemment que le développement informatique s'est avéré, pour moi, une révélation.</p>
                </div>
            </motion.div>
        </section>
    );
}
