import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `card__delete-button ${
    isOwn ? '' : 'card__delete-button_hidden'
  }`;

  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? 'card__like-button_active' : ''
  }`;

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  function handleCardClick() {
    props.onCardLike(props.card);
  }

  return (
    <article className="card">
      <button type="button" className={cardDeleteButtonClassName}></button>
      <img
        src={props.link}
        alt={props.name}
        className="card__image"
        onClick={handleCardClick}
      />
      <div className="card__description">
        <h3 className="card__text">{props.name}</h3>
        <div className="card__like-container">
          <button type="button" className={cardLikeButtonClassName}></button>
          <p className="card__like-counter">{props.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
