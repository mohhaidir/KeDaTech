import React from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Contact () {
    return (
        <>
            <Form className="contact-form">
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="+628xxx" />
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>
                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Form.Row>
                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div className="button-group">
                    <Button variant="flat" type="submit" size="xxl">
                        Submit
                    </Button>
                    <Button variant="flat" size="xxl" as={Link} to="/" style={{ textDecoration: 'none' }}>
                        Cancel
                    </Button>
                </div>          
            </Form>
        </>
    )
}