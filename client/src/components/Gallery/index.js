import React from 'react';
import PhotoList from '../Photolist';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
  const { currentCategory } = props;
  return (
    <section className='text-center'>
      <h1 data-testid="">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <PhotoList category={currentCategory.name} />
    </section>
  );
}

export default Gallery;