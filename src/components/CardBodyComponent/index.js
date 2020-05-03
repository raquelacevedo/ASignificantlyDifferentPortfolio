import React from "react";
import { CardText, CardLink } from 'reactstrap';


function CardBodyComponent({ repo, url, description }) {
    return (
        <CardText className="mx-2">
            <CardLink className="text-success" target="blank" href={repo}>GitHub Repo</CardLink>
            <CardLink className="text-success" target="blank" href={url}>Webpage</CardLink>
            <br></br>
            {description}
        </CardText>
    );
}

export default CardBodyComponent;