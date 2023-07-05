import 'bootstrap/dist/js/bootstrap.bundle';

function AllergiesWarning() {
    return (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>
                Customer Allergies: Your Safety is Our Priority!
            </strong> 
            <br></br>
            We understand the importance of catering to our customers' dietary needs and allergies. If you or anyone in your group has any food allergies or specific dietary requirements, please inform our friendly staff, and we will be more than happy to accommodate your requests. Your satisfaction and safety are of utmost importance to us.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )

}

export default AllergiesWarning