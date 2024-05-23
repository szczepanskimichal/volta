import React from "react";

const images = [
  {
    src: "path/to/image1.jpg",
    description: "jakas tam instalacja ktora wyjebalo w powietrze",
  },
  { src: "path/to/image2.jpg", description: "Image 2" },
  { src: "path/to/image3.jpg", description: "Image 3" },
  { src: "path/to/image4.jpg", description: "Image 4" },
  { src: "path/to/image5.jpg", description: "Image 5" },
  { src: "path/to/image6.jpg", description: "Image 6" },
  { src: "path/to/image7.jpg", description: "Image 7" },
  { src: "path/to/image8.jpg", description: "Image 8" },
  { src: "path/to/image9.jpg", description: "Image 9" },
  { src: "path/to/image10.jpg", description: "Image 10" },
  { src: "path/to/image11.jpg", description: "Image 11" },
  { src: "path/to/image12.jpg", description: "Image 12" },
  // ...more images
];

const Gallery = () => (
  <div className="flex flex-wrap justify-around">
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
);

export default Gallery;
