import React from 'react';
import { Link } from "react-router-dom";

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Container, Row, Col
} from 'reactstrap';
import image from '../../assets/RA_profilepic.png'
import './style.css';

const BioCard = () => {

    return (
        <>
            <Container>


                <Card className="mx-auto">
                    <Row>
                        <Col md="2">
                            <CardImg className="image m-2" top width="100%" src={image} alt="Card image cap" />
                        </Col>
                        <Col md="10">
                            <CardBody>
                                <CardTitle className="text-success font-weight-bold" ><h1>Raquel Acevedo</h1></CardTitle>
                                <CardSubtitle className="text-monospace">Software Engineer</CardSubtitle>
                                <CardText className="mt-3">
                                Hello, I'm Raquel. I am a software engineer from Washington, DC. Currently, I am working as a contractor on a Geospatial project with the USDA. My primary focus is database development, scripting and database architecture.  Recently, I have completed a full stack developer coding course so that I can be a better asset to my team and to my company.
                                    </CardText>
                                <Link to="/portfolio" className="btn btn-success">View Portfolio</Link>
                                <Link to="/resume" className="btn btn-success">View Resume</Link>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>

            </Container>
        </>
    );
};
export default BioCard;