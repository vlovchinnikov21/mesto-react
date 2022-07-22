import React from 'react';

function ImagePopup() {
  return (
    <>
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

export default ImagePopup;