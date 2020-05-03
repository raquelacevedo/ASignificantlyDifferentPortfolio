import React, { useState } from "react";
import { Card, CardTitle, CardText, Button, CardImg, Container, Row, Col, CardSubtitle, FormGroup, Label, Input } from 'reactstrap';
import img from '../../assets/RA_profilepic.png'
import axios from 'axios';


const Contact = () => {
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    };
    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: "https://formspree.io/xbjzjlov",
            data: new FormData(form)
        })
            .then(r => {
                handleServerResponse(true, "Thanks!", form);
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error, form);
            });
    };
    return (
        <Container>
            <h1 className="text-success">Contact Me</h1>
            <Card>
                <Row>
                    <Col md="4">
                        <CardImg src={img}></CardImg>

                    </Col>
                    <Col md="6">
                        <form onSubmit={handleOnSubmit}>
                            <CardTitle className="text-success mt-5 ml-5"><h3>Raquel Acevedo</h3></CardTitle>
                            <CardSubtitle className="text-monospace ml-5">Software Engineer</CardSubtitle>
                            <CardText className="ml-5">Contact me with any questions...</CardText>
                            <FormGroup className="mx-5">
                                <Label htmlFor="email">Email:</Label>
                                <Input id="email" type="email" name="email" required />
                            </FormGroup>
                            <FormGroup className="mx-5">
                                <Label htmlFor="message">Message:</Label>
                                <Input type="textarea" id="message" name="message"></Input>
                            </FormGroup>
                            <FormGroup className="ml-5">
                                <Button className="btn btn-lg m-2 btn-success" type="submit" disabled={serverState.submitting}>Submit</Button>
                                {serverState.status && (
                                    <p className={!serverState.status.ok ? "errorMsg" : ""}>
                                        {serverState.status.msg}
                                    </p>
                                )}
                                <a className="btn btn-lg m-2 btn-success" href="mailto:raquel.e.acevedo@gmail.com" target="_blank">Direct Mail</a>
                            </FormGroup>


                        </form>
                    </Col>
                </Row>
            </Card>

        </Container>
    );



    // return (
    //     <Container>
    //         <h1 className="text-success">Contact</h1>
    //         <Row>
    //             <Col md="4">
    //             </Col>
    //             <Col md="6">
    //                 <Card body inverse color="success">
    //                     <Button color="secondary">Contact</Button>
    //                 </Card>
    //             </Col>
    //         </Row>
    //     </Container>
    // )
}

export default Contact;