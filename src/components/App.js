import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
  }

  return (
    <>
      <div className="page">
        <Header />

        <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleEditAddPlaceClick} />

        <Footer />

        <template id="card-template">
          <article className="card">
            <button type="button" className="card__delete-button"></button>
            <img src="#" alt="#" className="card__image" />
            <div className="card__description">
              <h3 className="card__text"></h3>
              <div className="card__like-container">
                <button type="button" className="card__like-button"></button>
                <p className="card__like-counter"></p>
              </div>
            </div>
          </article>
        </template>
      </div>

      <PopupWithForm name="profile-edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
            <div className="popup__input-container">
              <input
                type="text"
                id="user-name"
                name="name"
                className="popup__input popup__input_type_name"
                placeholder="Ваше Имя"
                required
                minLength="2"
                maxLength="40"
              />
              <span className="popup__error popup__error-user-name"></span>
            </div>
            <div className="popup__input-container">
              <input
                type="text"
                id="user-description"
                name="about"
                className="popup__input popup__input_type_description"
                placeholder="Расскажите о себе"
                required
                minLength="2"
                maxLength="200"
              />
              <span className="popup__error popup__error-user-description"></span>
            </div>
      </PopupWithForm>

      <PopupWithForm name="add-card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
            <div className="popup__input-container">
              <input
                type="text"
                id="card-description"
                name="name"
                className="popup__input popup__input_type_title"
                placeholder="Название"
                required
                minLength="2"
                maxLength="30"
              />
              <span className="popup__error popup__error-card-description"></span>
            </div>
            <div className="popup__input-container">
              <input
                type="url"
                id="card-image-link"
                name="link"
                className="popup__input popup__input_type_link"
                placeholder="Ссылка на изображение"
                required
              />
              <span className="popup__error popup__error-card-image-link"></span>
            </div>
      </PopupWithForm>

      <PopupWithForm name="avatar-edit" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
            <div className="popup__input-container">
              <input
                type="url"
                id="avatar"
                name="avatar"
                className="popup__input popup__input_type_avatar"
                placeholder="Ссылка на изображение"
                required
              />
              <span className="popup__error popup__error-avatar"></span>
            </div>
      </PopupWithForm>

      <PopupWithForm name="delete-confirm" title="Вы уверены?" onClose={closeAllPopups} />

      <ImagePopup />
    </>
  );
}

export default App;
