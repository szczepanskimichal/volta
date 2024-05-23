import React from "react";

const images = [
  {
    src: "/1.jpg",
    description: "jakas tam instalacja ktora wyjebalo w powietrze",
  },
  { src: "/2.jpg", description: "Image 2" },
  { src: "./3.jpg", description: "Image 3" },
  { src: "./4.jpg", description: "Image 4" },
  { src: "./5.jpg", description: "Image 5" },
  { src: "./6.jpg", description: "Image 6" },
  { src: "./7.jpg", description: "Image 7" },
  { src: "./8.jpg", description: "Image 8" },
  { src: "./9.jpg", description: "Image 9" },
  { src: "./10.jpg", description: "Image 10" },
  { src: "./11.jpg", description: "Image 11" },
  { src: "./12.jpg", description: "Image 12" },
  // ...more images
];

const Gallery = () => (
  <section>
    <div className="pt-32 flex flex-wrap justify-around">
      {images.map((image, index) => (
        <div
          className="flex flex-col m-2 bg-white rounded shadow-md w-1/4"
          key={index}
        >
          <img className="rounded-t" src={image.src} alt={image.description} />
          <p className="p-4">{image.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;
