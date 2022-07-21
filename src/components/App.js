import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <div className="page">
        <Header />

        <Main />

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

      <section className="popup popup_profile-edit">
        <div className="popup__container">
          <button type="button" className="popup__close-button"></button>
          <h2 className="popup__heading">Редактировать профиль</h2>
          <form name="popup-profile" className="popup__form" noValidate>
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
            <button type="submit" className="popup__submit-button">
              Сохранить
            </button>
          </form>
        </div>
      </section>

      <section className="popup popup_add-card">
        <div className="popup__container">
          <button type="button" className="popup__close-button"></button>
          <h2 className="popup__heading">Новое место</h2>
          <form name="popup-add-card" className="popup__form" noValidate>
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
            <button type="submit" className="popup__submit-button">
              Создать
            </button>
          </form>
        </div>
      </section>

      <section className="popup popup_avatar-edit">
        <div className="popup__container">
          <button type="button" className="popup__close-button"></button>
          <h2 className="popup__heading">Обновить аватар</h2>
          <form name="popup-avatar-edit" className="popup__form" noValidate>
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
            <button type="submit" className="popup__submit-button">
              Сохранить
            </button>
          </form>
        </div>
      </section>

      <section className="popup popup_delete-confirm">
        <div className="popup__container">
          <button type="button" className="popup__close-button"></button>
          <h2 className="popup__heading popup__heading_position">
            Вы уверены?
          </h2>
          <form name="popup-delete-confirm" className="popup__form" noValidate>
            <button
              type="submit"
              className="popup__submit-button popup__submit-button_position"
            >
              Да
            </button>
          </form>
        </div>
      </section>

      <section className="popup popup_picture">
        <div className="popup__picture-container">
          <button type="button" className="popup__close-button"></button>
          <figure className="popup__figure">
            <img alt="#" className="popup__image" src="#" />
            <figcaption className="popup__caption"></figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}

export default App;
