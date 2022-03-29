import React, { useState } from 'react';
import Modal from 'react-modal';

const MenuList = () => {

  const [photos] = useState([
    {
      name: '',
      description: '',
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {photos.map((image, i) => (
          <img
            src={require(`../../assets/menu/${i}.jpg`)}
            alt={image.name}
            className=""
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuList;