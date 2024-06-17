import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export default function Intro() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Define media queries
    const isDesktop = useMediaQuery({ query: '(min-width: 1080px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1080px)' });
    

    // State to store textY values based on media query
    const [textYRange, setTextYRange] = useState(["0%", "80%"]);

    useEffect(() => {
        if (isDesktop) {
            setTextYRange(["0%", "60%"]);
        } else if (isTablet) {
            setTextYRange(["0%", "70%"]);
        }
    }, [isDesktop, isTablet]);

    const textY = useTransform(scrollYProgress, [0, 1], textYRange);

    return (
        <section className="intro" id="intro" ref={ref}>
            <Parallax pages={1} style={{ top: '0', left: '0' }} className="intro_parallax">
                <ParallaxLayer offset={0} speed={2.5} className="intro_parallax_block">
                    <img src="./cloud.webp" alt="" className="intro_parallax_block_img" />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={10} className="intro_parallax_block">
                    <motion.div style={{ y: textY }} className="intro_parallax_block_img intro_parallax_block_txt">
                        <h1 className="title">P O R T F O L I O</h1>
                        <h2 className="subtitle">Développeur Web</h2>
                    </motion.div>
                </ParallaxLayer>
            </Parallax>
        </section>
    )
}
