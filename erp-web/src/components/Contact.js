import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Contact () {
    return (
        <>
            <h3 className="contact-wrapper-top">Contact Us</h3>
            <div className="contact-wrapper-detail">
                <p className="contact-wrapper-detail-text">
                    <p className="contact-wrapper-detail-text-ask">Want to get in touch?</p>
                    <br/>
                    We'd love to hear from you. Here's how you can reach us...
                        <br/>
                        <Button variant="flat" size="xxl" as={Link} to="/contact">
                            Click here!
                        </Button>
                    </p>
            </div>
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=keda%20tech&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    <a href="https://www.embedgooglemap.net"></a>
                </div>
            </div>
        </>
    )
}