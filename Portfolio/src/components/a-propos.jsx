// import { motion, useInView } from "framer-motion";
// import { useRef, useEffect } from "react";

// export default function Propos() {
//     const targetRef = useRef(null);
//     const { ref, inView } = useInView({
//         rootMargin: "0px 0px",
//     });

//     useEffect(() => {
//         console.log("InView:", inView);
//     }, [inView]);

//     return (
//         <section ref={targetRef}>
//             <motion.div
//                 ref={targetRef}
//                 className="propos" 
//                 animate={{
//                     x: inView ? "0" : "-100%"
//                 }}
//             >
//                 <div className="propos_container">
//                     <div className="propos_container_1"></div>
//                     <div className="propos_container_2"></div>
//                     <div className="propos_container_3"></div>
//                     <div className="propos_container_4"></div>
//                     <div className="propos_container_5"></div>
//                 </div>
//                 <div className="propos_txt">
//                     <h2 className="propos_txt_title">À propos de moi</h2>
//                     <p className="propos_txt_paragraph">
//                         Je suis détenteur d'une certification professionnelle de développeur informatique (équivalent BAC+2).
//                     </p>
//                     <p>Je me suis reconverti professionnellement en 2023 après avoir été intérimaire depuis 2019.</p>
//                     <p>Je suis passionné par l'informatique depuis longtemps, et ce n'est que très récemment que le développement informatique s'est avéré, pour moi, une révélation.</p>
//                 </div>
//             </motion.div>
//         </section>
//     );
// }
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Propos() {
    const targetRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (targetRef.current) {
                const top = targetRef.current.getBoundingClientRect().top;
                const bottom = targetRef.current.getBoundingClientRect().bottom;
                const windowHeight = window.innerHeight;
                const percentageGap = 50;
                const pixelGap = (windowHeight * percentageGap) / 100;

                // Vérifier si l'élément est dans la vue et que la fenêtre est en train de défiler vers le bas
                if (top < windowHeight - pixelGap && window.scrollY > (window.lastScrollTop || 0)) {
                    setInView(true);
                }
                else if (bottom > windowHeight - pixelGap && window.scrollY < (window.lastScrollTop || 0)) {
                    setInView(true)
                }
                // Réinitialiser l'animation lorsque l'élément sort de la vue
                else {
                    setInView(false);
                }
                window.lastScrollTop = window.scrollY;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section ref={targetRef}>
            <motion.div
                className="propos"
                animate={{
                    x: inView ? "0" : "-100%"
                }}
                transition={{
                    duration: 0.3,
                    type: "easeOut"
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
