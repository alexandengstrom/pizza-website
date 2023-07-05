function BookingPolicy() {
    return (
        <>
        <div className="booking-policy">
            <h3>Booking policy:</h3>
            <p>
            At Super Mario's Pizza, we strive to provide our customers with a seamless and enjoyable dining experience. To ensure fairness and optimal service for all our guests, we have implemented the following booking policies:
            </p>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <strong>Booking Cancellation Policy:</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            We understand that plans can change, so we offer a convenient cancellation policy. You can cancel your reservation up to 24 hours before your scheduled dining time, and we'll be more than happy to accommodate your request.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Duration of Each Sitting:</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            To ensure that every guest enjoys their meal to the fullest, we allocate a generous two-hour time slot for each sitting. This allows you to savor our delicious pizzas, appetizers, and desserts at a leisurely pace without feeling rushed.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Reservation Extensions:</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            If you're enjoying your time at Super Mario's Pizza and wish to extend your stay beyond the initial two-hour sitting, we'll do our best to accommodate your request, depending on table availability. Please inquire with our friendly staff, and we'll be happy to assist you.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <strong>Booking Confirmation:</strong>
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Once you've successfully made a reservation, you'll receive a confirmation email or SMS with the details of your booking. Please ensure that you bring this confirmation with you, either in digital or printed form, as it will help us provide you with a seamless dining experience.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            <strong>Group Bookings:</strong>
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            For larger groups or special occasions, we recommend making a reservation in advance to guarantee seating availability. Our staff will be glad to assist you in making arrangements to accommodate your party comfortably.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BookingPolicy