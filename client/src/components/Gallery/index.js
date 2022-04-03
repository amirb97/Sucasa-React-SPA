import React from 'react';

function Gallery() {
  const photos = [
    {
      name: 'Baja Mango Margarita',
      category: 'gallery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Fish Tacos',
      category: 'gallery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Patio',
      category: 'gallery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Restaurant',
      category: 'gallery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Bar',
      category: 'gallery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Beer and Margarita',
      category: 'gallery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Party Platter',
      category: 'gallery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Tortilla Soup',
      category: 'gallery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Cadillac Margarita',
      category: 'gallery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Deep Fried Ice Cream',
      category: 'gallery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Main Lobby',
      category: 'gallery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    }
    ,
    {
      name: 'Mojito',
      category: 'gallery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Patio',
      category: 'gallery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    }
    ,
    {
      name: 'Private Dining',
      category: 'gallery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Tres Leches',
      category: 'gallery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    }
  ];

  return (
    <section className='text-center'>
      <h1>Gallery</h1>
      <p>Enjoy some pictures of our family restaurant's food, drinks, and seating areas!</p>
      <div className="flex-row justify-content-around">
        {photos.map((image, i) => (
          <img
            src={require(`../../assets/gallery/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;