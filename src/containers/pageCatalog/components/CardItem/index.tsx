import React from "react";
import {Card} from "services/types";
import {ImageContainer} from "components";
import {likeOutline, likeFilled} from "assets/images";

import "./styles.scss";

interface CardItem extends Card {
    onToggleLike: (cardId: string, like: boolean) => void;
}

export const CardItem: React.FC<CardItem> = ({id, title, description, image_url, like, onToggleLike}) => {

    return (
        <section className="card" role="article">
            <ImageContainer title={title}
                            imageUrl={image_url}
                            figcaption={title}
                            className="card__image-wrapper"
            />
            <div className="card__content">
                <h1 className="card__title">{title}</h1>
                <p className="card__description">{description}</p>
            </div>
            <ImageContainer
                className="card__like-wrapper"
                onClick={() => onToggleLike(id, !like)}
                imageUrl={like ? likeFilled : likeOutline}
                title="like"
                figcaption={`like ${like ? "filled" : "outline"}`}
            />
        </section>
    );
};
