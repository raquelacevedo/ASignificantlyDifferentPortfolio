import React from "react";
import { Container, Row, Col } from 'reactstrap';
import SkillCard from '../../components/SkillCard';
import BioCard from '../../components/BioCard';
import './style.css'
import data from '../../data/skills.json';



const About = () => {
    return (
        < Container className="about-container" >
            <h1 className="text-success">About</h1>

            <Row className="mt-5">
                <Col>
                    <BioCard />
                </Col>
            </Row>

            <h1 className="text-success mt-4">Skill Sets</h1>

            <SkillCard data={data} />

        </Container >

    );
}

export default About;