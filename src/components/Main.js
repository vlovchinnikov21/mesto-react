import React from 'react';
import pencil from '../images/edit-button-image.svg';
import plus from '../images/add-button-image.svg';
import { api } from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick }) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((items) => {
        setCards(
          items.map((item) => ({
            id: item._id,
            name: item.name,
            link: item.link,
            likes: item.likes,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  return (
    <>
      <main>
        <section className="profile">
          <div className="profile-info">
            <div className="profile-info__avatar">
              <img
                src={currentUser.avatar}
                alt="аватарка"
                className="profile-info__image"
              />
              <div
                className="profile-info__avatar-button"
                onClick={onEditAvatar}
              ></div>
            </div>
            <div className="profile-info__text-box">
              <div className="profile-info__name-box">
                <h1 className="profile-info__name">{currentUser.name}</h1>
                <button
                  type="button"
                  className="profile-info__edit-button"
                  onClick={onEditProfile}
                >
                  <img
                    src={pencil}
                    alt="карандаш"
                    className="profile-info__edit-button-image"
                  />
                </button>
              </div>
              <p className="profile-info__description">{currentUser.about}</p>
            </div>
          </div>
          <button
            type="button"
            className="profile__add-button"
            onClick={onAddPlace}
          >
            <img
              src={plus}
              alt="плюсик"
              className="profile__add-button-image"
            />
          </button>
        </section>

        <section className="places">
          <ul className="cards">
            {cards.map(({ id, ...props }) => (
              <Card
                key={id}
                {...props}
                card={{ id, ...props }}
                onCardClick={onCardClick}
                onCardLike={handleCardLike}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;
