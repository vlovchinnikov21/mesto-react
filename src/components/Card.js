import React from 'react';

function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
      <article className="card">
        <button type="button" className="card__delete-button"></button>
        <img src={props.link} alt={props.name} className="card__image" onClick={handleCardClick} />
        <div className="card__description">
          <h3 className="card__text">{props.name}</h3>
          <div className="card__like-container">
            <button type="button" className="card__like-button"></button>
            <p className="card__like-counter">{props.likes.length}</p>
          </div>
        </div>
      </article>
  );
}

export default Card;
