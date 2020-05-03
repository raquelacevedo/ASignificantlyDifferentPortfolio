import React from "react";
import CardTitleComponent from "../CardTitleComponent";


function CardHeadingComponent({ title }) {
    return (
        <div>
            <CardTitleComponent title={title} />
        </div>
    );
}

export default CardHeadingComponent;