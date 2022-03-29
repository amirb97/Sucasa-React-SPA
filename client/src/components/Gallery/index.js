import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery() {
  const { name, description } = currentGallery;
  return (
    <section>
      <h1 data-testid="">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList category={currentGallery.name} />
    </section>
  );
}

export default Gallery;