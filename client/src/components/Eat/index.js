import React from 'react';

function Eat() {
  const photos = [
    {
      name: 'Page 1',
      category: 'foodmenu',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Page 2',
      category: 'foodmenu',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Page 3',
      category: 'foodmenu',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Page 4',
      category: 'foodmenu',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    }
  ];

  return (
    <section className='text-center'>
      <h1>What you come for... Our Food!</h1>
      <p>Latin inspired food with a modern twist. We take inspiration from all parts of South America to bring you our unique take on latin food!</p>
      <div className="flex-row justify-content-around">
        {photos.map((image, i) => (
          <img
            src={require(`../../assets/eat/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </section>
  );
}

export default Eat;