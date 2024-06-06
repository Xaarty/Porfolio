export default function Form () {
    return (
        <form className="form">
            <h3>Écrivez-moi ici : </h3>
            <div className="form_input-field">
                <label htmlFor="email" className="form_input-field_label">Email</label>
                <input type="email" id="email" name="email" placeholder="votre email" />
            </div>          
            <div className="form_input-field">
                <label htmlFor="message" className="form_input-field_label">Message</label>
                <textarea type="textarea" id="message" name="message" placeholder="votre message" />
            </div>
            <input type="submit" name="button" className="form_input" value="ENVOYER" />
        </form>
    )
}