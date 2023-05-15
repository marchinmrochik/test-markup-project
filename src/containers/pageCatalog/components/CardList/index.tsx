import React from "react";
import {useAppDispatch} from "store/hooks";
import {toggleLike} from "store/reducers/cardsReducer";
import {Card} from "services/types";
import {CardItem} from "../CardItem";

import './styles.scss';


interface CardListProps {
    items: Card[];
}

export const CardList: React.FC<CardListProps> = ({items}) => {
    const dispatch = useAppDispatch();

    const onToggleLike = (cardId: string, like: boolean) => {
        dispatch(toggleLike({cardId, like}));
    };

    return (
        <div className='card-list'>
            {items.map((item, index) =>
                <CardItem key={item.title + index} {...item} onToggleLike={onToggleLike}/>
            )}
        </div>
    )
}
