import React from 'react';
import pencil from '../images/edit-button-image.svg';
import plus from '../images/add-button-image.svg';
import { api } from '../utils/api';
import Card from './Card';

function Main({ onEditProfile, onEditAvatar, onAddPlace }) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserProfile().then((item) => {
      setUserName(item.name);
      setUserDescription(item.about);
      setUserAvatar(item.avatar);
    })
  }, []);

  React.useEffect(() => {
    api.getInitialCards().then((items) => {
      setCards(items.map((item) => ({
        id: item._id,
        name: item.name,
        link: item.link,
        likes: item.likes
      })))
    })
  })

  return (
    <>
      <main>
        <section className="profile">
          <div className="profile-info">
            <div className="profile-info__avatar">
              <img src={userAvatar} alt="аватарка" className="profile-info__image" />
              <div
                className="profile-info__avatar-button"
                onClick={onEditAvatar}
              ></div>
            </div>
            <div className="profile-info__text-box">
              <div className="profile-info__name-box">
                <h1 className="profile-info__name">{userName}</h1>
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
              <p className="profile-info__description">{userDescription}</p>
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
          {
            cards.map(({id, ...props}) => <Card key={id} {...props} />)
          }
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;
