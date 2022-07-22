import React from 'react';
import pencil from '../images/edit-button-image.svg';
import plus from '../images/add-button-image.svg';

function Main() {
  function handleEditProfileClick() {
    document.querySelector('.popup_profile-edit').classList.add('popup_opened');
  }

  function handleEditAvatarClick() {
    document.querySelector('.popup_avatar-edit').classList.add('popup_opened');
  }

  function handleEditAddPlaceClick() {
    document.querySelector('.popup_add-card').classList.add('popup_opened');
  }
  return (
    <>
      <main>
        <section className="profile">
          <div className="profile-info">
            <div className="profile-info__avatar">
              <img src="#" alt="аватарка" className="profile-info__image" />
              <div className="profile-info__avatar-button" onClick={handleEditAvatarClick}></div>
            </div>
            <div className="profile-info__text-box">
              <div className="profile-info__name-box">
                <h1 className="profile-info__name"></h1>
                <button
                  type="button"
                  className="profile-info__edit-button"
                  onClick={handleEditProfileClick}
                >
                  <img
                    src={pencil}
                    alt="карандаш"
                    className="profile-info__edit-button-image"
                  />
                </button>
              </div>
              <p className="profile-info__description"></p>
            </div>
          </div>
          <button type="button" className="profile__add-button" onClick={handleEditAddPlaceClick}>
            <img
              src={plus}
              alt="плюсик"
              className="profile__add-button-image"
            />
          </button>
        </section>

        <section className="places">
          <ul className="cards"></ul>
        </section>
      </main>
    </>
  );
}

export default Main;
