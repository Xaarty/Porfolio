import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion, useScroll,useTransform } from "framer-motion";
import { useRef } from "react";


export default function Intro() {
    const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "75%"]);
  
    return (
           <section className="intro" ref={ref}>
                <Parallax pages={1} style={{ top: '0', left: '0' }} className="intro_parallax">
                    <ParallaxLayer offset={0} speed={2.5} className="intro_parallax_block">
                        <img src="./cloud.webp" alt="" className="intro_parallax_block_img"  />
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={10} className="intro_parallax_block">
                        <motion.div style={{y: textY}} className="intro_parallax_block_img intro_parallax_block_txt">
                            <h1 className="title">P O R T F O L I O</h1>
                            <h2 className="subtitle">Développer Web</h2>
                        </motion.div>
                    </ParallaxLayer>
                </Parallax>
           </section>
    )
}