import React from "react";
import { Container, Row } from 'reactstrap';
import CardContainerComponent from '../../components/CardContainerComponent';
import portfolios from '../../data/portfolio.json';


const Portfolio = () => {

    return (
        <Container>
            <h1 className="text-success">Portfolio</h1>
            <h3 className="text-success mt-4">Recent Work</h3>
            <Row>
                {portfolios.map((portfolio) => {
                    return (
                        <CardContainerComponent
                            key={portfolio.id}
                            title={portfolio.title}
                            img={portfolio.img}
                            repo={portfolio.repo}
                            url={portfolio.url}
                            description={portfolio.description}
                        />)
                })}
            </Row>
        </Container>
    );
}

export default Portfolio;