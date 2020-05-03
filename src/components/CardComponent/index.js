import React from "react";
import CardBodyComponent from "../CardBodyComponent";
import CardImageComponent from "../CardImageComponent";
import CardHeadingComponent from "../CardHeadingComponent";


function CardComponent({ img, title, repo, url, description }) {
    return (
        <div>
            <CardImageComponent img={img} />
            <CardHeadingComponent title={title} />
            <CardBodyComponent
                repo={repo}
                url={url}
                description={description}
            />

        </div>
    );
}

export default CardComponent;