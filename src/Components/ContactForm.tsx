interface Props {
    message: string
    buttonText: string
    confirmation: () => void
}

function ContactForm({message, buttonText, confirmation}: Props) {
    return (
        <>
        <div className="contact-form">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name:</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="John Doe" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address:</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number:</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="0123-56789" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{message}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
            </div>
            <button type="button" className="btn btn-success" onClick={confirmation}>{buttonText}</button>
            </div>
        </>
    );
}

export default ContactForm;
