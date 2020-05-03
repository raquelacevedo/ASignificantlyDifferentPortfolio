import React from "react";
import { CardImg } from 'reactstrap';


function CardImageComponent({ img }) {

    let imagePath = require(`../../assets/${img}`)

    return (
        <div>
            <CardImg src={imagePath} alt="project thumbnail" style={{ width: "100%", height: "200px" }} />
        </div>
    );
}

export default CardImageComponent;