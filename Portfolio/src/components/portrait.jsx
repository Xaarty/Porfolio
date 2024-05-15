export default function Portrait () {
    return (
        <section className="portrait">
            <div className="portrait_block">
                <div className="portrait_block_txt">
                    <h1 className="portrait_block_txt_title">Mikael Caillaud</h1>
                    <h2 className="portrait_block_txt_subtitle">Développeur web Front-end</h2>
                    <button className="portrait_block_txt_button">Contact</button>
                </div>
                <div className="portrait_block_imgcontainer">
                    <img src="./portrait.webp" alt="photo portrait de mikael, créateur du site" className="portrait_block_imgcontainer_img" />
                </div>
            </div>
        </section>
    )
}