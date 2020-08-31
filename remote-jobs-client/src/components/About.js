import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import image from '../images/img-4.jpg'
import img5 from '../images/img-5.jpg'

const About = () => {
    return(
        <div>
            <Container>
                <Row>
                    <Col md= "2">
                        <img src={image} alt="" />
                        <img src={img5} alt="" />
                    </Col>
                    <Col lg={8}>
                        about usabout usabout usabout usabout usabout usabout usabout usabout usabout usabout usabout usabout usabout usabout 
                            usabout usabout usabout usabout usabout usabout usabout usabout usabout usabout usabout usabout usabout
                             usabout usabout usabout usabout usabout usabout usabout usabout usabout usabout usabout usabout usabout us
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About