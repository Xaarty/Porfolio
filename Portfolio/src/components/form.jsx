export default function Form () {
    return (
        <form>
            <label htmlFor="email">Email</label>
            <div className="input-field">
            <input type="email" id="email" name="email" placeholder="caillaud.mikael.pro@gmail.com" />
            </div>          
            <label htmlFor="message">Message</label>
            <div className="input-field">
                <input type="textarea" id="message" name="message" placeholder="votre message" />
            </div>
        </form>
    )
}