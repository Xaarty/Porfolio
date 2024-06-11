import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion, useScroll,useTransform } from "framer-motion";
import { useRef } from "react";
import Caroussel from "./caroussel";
import JsonData from "../caroussel.json"


export default function Projets() {
    
    const ref = useRef(null);   
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
    const textY2 = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

    return (
        <section className="projets" ref={ref}>
            <Parallax pages={1} style={{ top: '0', left: '0' }} className="projets_parallax">
                <ParallaxLayer offset={0} speed={2.5} className="projets_parallax_block">
                    <img src="./cloud2.webp" alt="" className="projets_parallax_block_background"  />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={10} className="projets_parallax_block">
                    <motion.div style={{y: textY}} className="projets_parallax_block_title">
                        <h2 className="projets_parallax_block_title_h2">Mes projets</h2>
                    </motion.div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={10} className="projets_parallax_block">
                    <motion.div style={{y: textY2}} className="projets_parallax_block_projet">
                        <Caroussel projets={JsonData} />
                    </motion.div>
                </ParallaxLayer>
               
            </Parallax>
        </section>
    )
}
