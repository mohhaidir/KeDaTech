import React from 'react'
import { Carousel, Accordion, Card, Button, ListGroup } from 'react-bootstrap'
import Price1 from '../assets/img/startup.png'

export default function Pricing () {
    return (
        <>
            <h3 className="pricing-wrapper-top">How's the price ?</h3>
            <p className="pricing-wrapper-detail">We also provides a TIER System, where you can buy your own products per category / level</p>
            <Carousel className="pricing-wrapper">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Price1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="pricing-wrapper-title" style={{color: "black"}}>TIER 1</h3>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="flat" eventKey="0">
                                    Click for detail!
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body style={{color: "black"}}>
                                    <h3 style={{color: "black"}}>Basic</h3>
                                    <Card.Title>$ 399</Card.Title>
                                    <ListGroup>
                                        <ListGroup.Item>✅ Tracking incoming items</ListGroup.Item>
                                        <ListGroup.Item>✅ Tracking outcoming items</ListGroup.Item>
                                        <ListGroup.Item>✅ Tracking the profit</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Price1}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3 className="pricing-wrapper-title" style={{color: "black"}}>TIER 2</h3>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="flat" eventKey="0">
                                    Click for detail!
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body style={{color: "black"}}>
                                    <h3 style={{color: "black"}}>Business</h3>
                                    <Card.Title>$ 599</Card.Title>
                                    <ListGroup>
                                        <ListGroup.Item>✅ Tracking incoming and outcoming items</ListGroup.Item>
                                        <ListGroup.Item>✅ Tracking the profit</ListGroup.Item>
                                        <ListGroup.Item>✅ Analyze sales results with CHART</ListGroup.Item>
                                        <ListGroup.Item>✅ Support 7 x 24 Hours</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Price1}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3 className="pricing-wrapper-title" style={{color: "black"}}>TIER 3</h3>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="flat" eventKey="0">
                                    Click for detail!
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body style={{color: "black"}}>
                                    <h3 style={{color: "black"}}>Entrepreneur</h3>
                                    <Card.Title>$ 899</Card.Title>
                                    <ListGroup>
                                        <ListGroup.Item>✅ Tracking incoming and outcoming items</ListGroup.Item>
                                        <ListGroup.Item>✅ Tracking the profit</ListGroup.Item>
                                        <ListGroup.Item>✅ Analyze sales results with CHART</ListGroup.Item>
                                        <ListGroup.Item>✅ Support 7 x 24 Hours</ListGroup.Item>
                                        <ListGroup.Item>✅ Export data to Excel</ListGroup.Item>
                                        <ListGroup.Item>✅ AI Earnings prediction</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}