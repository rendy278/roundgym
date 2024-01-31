import React from "react";
import HeaderImage from "../../images/header_bg_3.jpg";
import MainHeader from "../../components/MainHeader";
import "./Gallery.css";
const Gallery = () => {
  const galleryLength = 15;
  const Images = [];

  for (let i = 1; i < galleryLength; i++) {
    Images.push(require(`../../images/gallery${i}.jpg`));
  }
  return (
    <div>
      <MainHeader title="My Gallery" image={HeaderImage}>
        Ini adalah kumpulan gallery kami
      </MainHeader>
      <section className="gallery">
        <div className="container gallery__container">
          {Images.map((Image, index) => {
            return (
              <article key={index}>
                <img src={Image} alt={`Gallery Images ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
