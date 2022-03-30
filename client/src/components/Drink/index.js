import React from 'react';

function Drink() {
  const photos = [
    {
      name: 'Page 1',
      category: 'drinkmenu',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Page 2',
      category: 'drinkmenu',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Page 3',
      category: 'drinkmenu',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Page 4',
      category: 'drinkmenu',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    }
  ];

  return (
    <section className='text-center'>
      <h1>Full bar ready for thirsty guests!</h1>
      <p>Come and find out why people say we have some of the BEST margaritas around!</p>
      <p>
          Margaritas not your style? 
          Try some of our other delicious cocktails shown below, ask for a nice cold beer, or shot of your favorite drink.
          We got it all!
      </p>

      <div className="flex-row justify-content-around">
        {photos.map((image, i) => (
          <img
            src={require(`../../assets/drinkmenu/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </section>
  );
}

export default Drink;
