import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginIMG from '../assets/img/undraw_Login_re_4vu2.png'

export default function Login () {
    return (
        <div className="login-form">
            <img className="login-img" src={LoginIMG} />
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <div className="button-group">
                <Button variant="flat" size="xxl" type="submit">
                    Submit
                </Button>
                <Button variant="flat" size="xxl" as={Link} to="/" style={{ textDecoration: 'none' }}>
                    Cancel
                </Button>
            </div>
            </Form>
        </div>
    )
  }