import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

const MotionPathAnimation = () => {
    const rectRef = useRef(null);
  
    useEffect(() => {
      gsap.registerPlugin(MotionPathPlugin);
  
      gsap.to(".animation #ball", {
        duration: 25,
        repeat: -1,
        repeatDelay: 0,
        yoyo: false,
        ease: "none",
        motionPath: {
          path: ".animation #path", // Changed the path selector
          align: ".animation #path", // Changed the align selector
          autoRotate: true,
          alignOrigin: [0.5, 0.5]
        }
      });
    }, []);
  
    return (
      <div className="animation">
        <svg width="921" height="171" viewBox="0 0 921 171" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="3" />
        <circle cx="300" cy="20" r="3" />
        <path id="path" fillRule="evenodd" clipRule="evenodd" d="M789.961 3.93052L459.98 80.2122L131.934 4.37815C113.69 0.16049 94.384 0.160487 76.1391 4.37815C-24.1161 27.5541 -24.1161 144.428 76.1391 167.604C94.384 171.822 113.69 171.822 131.934 167.604L461.916 91.3223L789.961 167.156C808.206 171.374 827.511 171.374 845.756 167.156C946.012 143.98 946.012 27.1065 845.756 3.93052C827.511 -0.287144 808.206 -0.287141 789.961 3.93052ZM793.405 14.0065L483.949 85.5434L793.405 157.08C809.398 160.777 826.32 160.777 842.312 157.08C930.19 136.766 930.19 34.3212 842.312 14.0065C826.32 10.3095 809.398 10.3095 793.405 14.0065ZM128.49 14.4541L437.947 85.9911L128.49 157.528C112.498 161.225 95.5757 161.225 79.5834 157.528C-8.2943 137.213 -8.2943 34.7688 79.5834 14.4541C95.5757 10.7572 112.498 10.7572 128.49 14.4541Z" fill="url(#paint0_linear_1_20)"/>
        <g id="ball">
        <circle cx="30" cy="6.5" r="5.5" fill="grey" />
            <text x="10" y="19" fontSize="14">SVG &lt;rect&gt;</text>
        </g>
        <defs>
            <linearGradient id="paint0_linear_1_20" x1="0.947693" y1="85.7673" x2="920.948" y2="85.7673" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B3B6B7"/>
            <stop offset="1"/>
            </linearGradient>
        </defs>
        </svg>
      </div>
    );
};

export default MotionPathAnimation;