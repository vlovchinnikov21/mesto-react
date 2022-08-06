import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile-edit"
      title="Редактировать профиль"
      btnText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
          onChange={handleNameChange}
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
          onChange={handleDescriptionChange}
        />
        <span className="popup__error popup__error-user-description"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
