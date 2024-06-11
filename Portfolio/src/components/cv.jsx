import React from 'react';

export default function CV({txt, className}) {
    return (
        <button className={className}>
            <a href="/CV-Mikael-Caillaud.pdf" download="CV-Mikael-Caillaud.pdf" className="portrait_block_txt_buttons_button_ancre">
                {txt}
            </a>
        </button>
    );
}
