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
  const [selectedCard, setSelectedCard] = React.useState(null);

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
    setSelectedCard(null);
  }

  function onCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <>
      <div className="page">
        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleEditAddPlaceClick}
          onCardClick={onCardClick}
        />

        <Footer />
      </div>

      <PopupWithForm
        name="profile-edit"
        title="Редактировать профиль"
        btnText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
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

      <PopupWithForm
        name="add-card"
        title="Новое место"
        btnText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
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

      <PopupWithForm
        name="avatar-edit"
        title="Обновить аватар"
        btnText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
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

      <PopupWithForm
        name="delete-confirm"
        title="Вы уверены?"
        btnText="Да"
        onClose={closeAllPopups}
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
