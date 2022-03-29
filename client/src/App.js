import React, { useState } from 'react';
// import Nav from './components/Nav';
// import About from './components/About';
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([
    {
      name: 'menu',
      description: 'Menu',
    },
    { name: 'gallery', description: 'Enjoy images of our food, drinks, and dining area!' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
            <Gallery currentCategory={currentCategory}></Gallery>

      </main>
    </div>
  );
}

export default App;
