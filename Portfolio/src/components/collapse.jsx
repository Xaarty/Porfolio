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

