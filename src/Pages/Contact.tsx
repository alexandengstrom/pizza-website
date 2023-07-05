import ContactForm from "../Components/ContactForm"

function Contact() {
    return (
        <>
            <div className="contact-container">
            <h1>Contact</h1>
            <p>If you have any questions, comments, or would like to make a reservation, please don't hesitate to reach out to us. Our team is here to assist you!</p>
            <ContactForm 
                message="Message:"
                buttonText="Send message"
                confirmation={() => {confirm("Message sent!")}}
            />
            </div>
        </>
    )
}

export default Contact