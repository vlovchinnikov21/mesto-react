import pencil from '../images/edit-button-image.svg';
import plus from '../images/add-button-image.svg';

function Main() {
    return (
      <>
         <main>
          <section className="profile">
            <div className="profile-info">
              <div className="profile-info__avatar">
                <img src="#" alt="аватарка" className="profile-info__image" />
                <div className="profile-info__avatar-button"></div>
              </div>
              <div className="profile-info__text-box">
                <div className="profile-info__name-box">
                  <h1 className="profile-info__name"></h1>
                  <button type="button" className="profile-info__edit-button">
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
            <button type="button" className="profile__add-button">
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

export default Main