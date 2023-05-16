import React from 'react';
import {Card} from "services/types";
import {likeOutline, likeFilled} from "assets/images";

import './styles.scss';

interface CardItem extends Card {
    onToggleLike: (cardId: string, like: boolean) => void;
}

export const CardItem: React.FC<CardItem> = ({id, title, description, image_url, like, onToggleLike}) => {

    return (
        <section className="card" role="article">
            <figure className="card__image-wrapper">
                <img src={image_url} alt={title}/>
                <figcaption hidden>{title}</figcaption>
            </figure>
            <div className="card__content">
                <h1 className="card__title">{title}</h1>
                <p className="card__description">{description}</p>
            </div>
            <figure className="card__like-wrapper" onClick={() => onToggleLike(id, !like)}>
                <img src={like ? likeFilled : likeOutline} alt={'like'}/>
                <figcaption hidden>like {like ? 'filled' : 'outline'}</figcaption>
            </figure>
        </section>
    );
};
