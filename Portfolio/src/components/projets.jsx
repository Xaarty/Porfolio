import { Link } from "react-router-dom"
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion, useScroll,useTransform } from "framer-motion";
import { useRef } from "react";

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
                    <motion.div style={{y: textY2}} className="projets_parallax_block_project1">
                        <h3 className="projets_parallax_block_projet1_h3">Création d'une application web de location immobilière avec React</h3>
                        <div className="projets_parallax_block_projet1_block">
                            <Link to="/location-immobiliere" className="projets_parallax_block_projet1_block_ancre"><img src="./immobilier-react.webp" alt="projet immobilier react" className="projets_parallax_block_projet1_block_ancre_img" /></Link>
                            <div className="projets_parallax_block_projet1_block_txt">
                                <div className="projets_parallax_block_projet1_block_txt_titre"><p>Application de location immobilière</p></div>
                                <div className="projets_parallax_block_projet1_block_txt_annee"><p>2024</p></div>
                            </div>
                        </div>
                    </motion.div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={10} className="projets_parallax_block">
                    <motion.div style={{y: textY2}} className="projets_parallax_block_project1">
                    <h3 className="projets_parallax_block_projet1_h3">Implémentation du front-end d'une application bancaire avec React</h3>
                    <div className="projets_parallax_block_projet1_block">
                        <Link to="/bank" className="projets_parallax_block_projet1_block_ancre"><img src="./bank.webp" alt="projet bancaire react" className="projets_individual_card_ancre_img" /></Link>
                        <div className="projets_parallax_block_projet1_block_txt">
                            <div className="projets_parallax_block_projet1_block_txt_titre"><p>Application Bancaire</p></div>
                            <div className="projets_parallax_block_projet1_block_txt_annee"><p>2024</p></div>
                        </div>
                    </div>
                    </motion.div>
                </ParallaxLayer>
            </Parallax>
            {/* <h2></h2>
            <div className="projets_individual">
                <h3></h3>
                
                <div className="projets_individual_tags"></div>
            </div>
            <div className="projets_individual">
                <h3></h3>
                <div className="projets_individual_card">
                    <Link to="/bank" className="projets_individual_card_ancre"><img src="./bank.webp" alt="projet bancaire react" className="projets_individual_card_ancre_img" /></Link>
                    <div className="projets_individual_card_txt">
                        <div className="projets_individual_card_txt_titre"><p>Application Bancaire</p></div>
                        <div className="projets_individual_card_txt_annee"><p>2024</p></div>
                    </div>
                </div>
                <div className="projets_individual_tags"></div>
            </div> */}
        </section>
    )
}

{/* <section className="intro" ref={ref}>
                
           </section> */}