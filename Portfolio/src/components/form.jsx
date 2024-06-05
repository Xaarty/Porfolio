export default function Form () {
    return (
        <form className="form">
            <h3>Écrivez-moi ici : </h3>
            <label htmlFor="email" className="form_label">Email</label>
            <div className="form_input-field">
                <input type="email" id="email" name="email" placeholder="votre email" />
            </div>          
            <label htmlFor="message" className="form_label">Message</label>
            <div className="form_input-field">
                <textarea type="textarea" id="message" name="message" placeholder="votre message" />
            </div>
            <input type="submit" name="button" className="form_input" value="ENVOYER" />
        </form>
    )
}