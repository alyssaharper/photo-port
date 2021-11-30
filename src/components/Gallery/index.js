import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../PhotoList';

function Gallery( {currentCategory} ) {
  const { name, description} = currentCategory;
  return (
    <section>
      <h1>{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <div>
        <PhotoList category={currentCategory.name} />
      </div>
    </section>
  );
}

export default Gallery;