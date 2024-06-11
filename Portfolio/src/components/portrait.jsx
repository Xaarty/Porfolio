// import MotionPathAnimation from "./infiniteAnimation";
import { motion, useScroll } from "framer-motion"
import { useRef } from "react";
import Button from "./button";
import CV from "./cv";

export default function Portrait () {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
      });
    return (
        <section className="portrait" ref={ref}>
            
            {/* <MotionPathAnimation /> */}
            <motion.div initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }} 
            className="portrait_block">
                <div className="portrait_block_txt">
                    <h1 className="portrait_block_txt_title">Mikael Caillaud</h1>
                    <h2 className="portrait_block_txt_subtitle">Développeur web Front-end</h2>
                    <div className="portrait_block_txt_buttons">
                        <Button className="portrait_block_txt_buttons_button button" txt="ME CONTACTER" />
                        <CV className="portrait_block_txt_buttons_button button" txt="MON CV" />
                    </div>
                </div>
            </motion.div>
        </section>
    )
}