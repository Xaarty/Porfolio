import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Caroussel from "./caroussel";
import JsonData from "../caroussel.json";
import { useMediaQuery } from "react-responsive";

export default function Projets() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const isDesktop = useMediaQuery({ query: '(min-width: 1080px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1079px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const [textYRange, setTextYRange] = useState(["0%", "60%"]);
    const [textY2Range, setTextY2Range] = useState(["0%", "55%"]);

    useEffect(() => {
        if (isDesktop) {
            setTextYRange(["0%", "30%"]);
            setTextY2Range(["0%", "25%"]);
        } else if (isTablet) {
            setTextYRange(["0%", "60%"]);
            setTextY2Range(["0%", "55%"]);
        } else if (isMobile) {
            setTextYRange(["0%", "70%"]);
            setTextY2Range(["0%", "65%"]);
        }
    }, [isDesktop, isTablet, isMobile]);

    const textY = useTransform(scrollYProgress, [0, 1], textYRange);
    const textY2 = useTransform(scrollYProgress, [0, 1], textY2Range);

    return (
        <section className="projets" ref={ref}>
            <Parallax pages={1} style={{ top: '0', left: '0' }} className="projets_parallax">
                <ParallaxLayer offset={0} speed={2.5} className="projets_parallax_block">
                    <img src="./cloud2.webp" alt="" className="projets_parallax_block_background" />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={10} className="projets_parallax_block">
                    <motion.div style={{ y: textY }} className="projets_parallax_block_title">
                        <h2 className="projets_parallax_block_title_h2">MES PROJETS</h2>
                    </motion.div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={10} className="projets_parallax_block">
                    <motion.div style={{ y: textY2 }} className="projets_parallax_block_projet">
                        <Caroussel projets={JsonData} />
                    </motion.div>
                </ParallaxLayer>
            </Parallax>
        </section>
    );
}
