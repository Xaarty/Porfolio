import { useState, useRef, useEffect } from "react";

export default function Collapse ({frameworks}) {
    const [openState, setOpenState] = useState(false);
    const panel = useRef();

    useEffect(() => {
        if (panel.current) {
            if (openState) {
                panel.current.style.maxHeight = panel.current.scrollHeight + "px";
            } else {
                panel.current.style.maxHeight = "0px";
            }
        }
    }, [openState]);
    let textContent = null;
    if (Array.isArray(frameworks)) {
        textContent = frameworks.map((framework, index) => <p key={index}>{framework}</p>);
    } else {
        textContent = <p>{frameworks}</p>;
    }
    return (
        <div className="collapse">
            <button className="collapse_button" onClick={() => setOpenState(!openState)}>
                <img className="collapse_button_img" src="./icon-plus.webp" alt="expand collapse" />
            </button>
            <div ref={panel} className={`collapse_text ${openState ? "is_open" : ""}`} >
                {textContent}
            </div>
        </div>
    )
}


// import "../styles/layout/collapse.scss";
// import vectorup from "../assets/vectorup.png";


// export default function Collapse(props) {
//   const [openstate, isOpen] = useState(false);
//   const panel = useRef();
//   useEffect(() => {
//     if (panel.current.style.maxHeight) {
//       panel.current.style.maxHeight = null;
//     } else {
//       panel.current.style.maxHeight = panel.current.scrollHeight + 40 + "px";
//     }
//   }, [openstate]);
//   let textContent = null;
//   if (Array.isArray(props.text)) {
//     textContent = props.text.map((item, index) => <p key={index}>{item}</p>);
//   } else {
//     textContent = <p>{props.text}</p>;
//   }
//   return (
//     <div className="collapse_box">
//       <div className="collapse_box_bar">
//         <h2>{props.title}</h2>
//         <button className="button_collapse" onClick={() => isOpen(!openstate)}>
//           <img
//             src={vectorup}
//             alt=""
//             className={`${openstate ? "rotate" : ""}`}
//           />
//         </button>
//       </div>
//       <div
//         ref={panel}
//         className={`collapse_box_text ${openstate ? "is_open" : ""}`}
//       >
//         {textContent}
//       </div>
//     </div>
//   );
// }
