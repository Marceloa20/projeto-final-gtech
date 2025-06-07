import React, { useState } from "react";
import { Galleria } from "primereact/galleria";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // você pode trocar por outro tema
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
// import "./Galeria.css"; // opcional: seu CSS customizado

const Galeria = () => {
  const produtos = [
    {
      itemImageSrc: "../public/imagens/slide-inicio-1.png",
      thumbnailImageSrc: "../public/imagens/slide-inicio-1.png",
      alt: "Nike Air Max",
      title: "Nike Air Max 90",
    },
    {
      itemImageSrc: "../public/imagens/home-slide-3.jpeg",
      thumbnailImageSrc: "../public/imagens/home-slide-3.jpeg",
      alt: "Nike",
      title: "Nike",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const itemTemplate = (item) => (
    <div className="galeria-item">
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        className="w-full rounded-xl"
      />
      <h3 className="mt-2 text-xl font-semibold text-center">{item.title}</h3>
    </div>
  );

  const thumbnailTemplate = (item) => (
    <img
      src={item.thumbnailImageSrc}
      alt={item.alt}
      className="rounded shadow-md"
    />
  );
  return (
    <section className="p-4 bg-white rounded-2xl shadow-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        🔥 Promoções da Semana
      </h2>
      <Galleria
        value={produtos}
        activeIndex={activeIndex}
        onItemChange={(e) => setActiveIndex(e.index)}
        item={itemTemplate}
        thumbnail={thumbnailTemplate}
        showThumbnails
        showItemNavigators
        autoPlay
        circular
        transitio   nInterval={4000}
        numVisible={3}
        style={{ maxWidth: "100%" }}
      />
    </section>
  );
};

export default Galeria;
