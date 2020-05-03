import React from "react";
import CardTitleTextComponent from "../CardTitleTextComponent";
import { CardTitle } from 'reactstrap';



function CardTitleComponent({ title }) {
    return (
        <CardTitle className="mx-2 mt-2">
            <CardTitleTextComponent className="CardTitle" title={title} />
        </CardTitle>
    );
}

export default CardTitleComponent;