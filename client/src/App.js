import React, { useState } from 'react';
import Nav from './components/Nav';
// import About from './components/About';
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([
    {
      name: 'foodmenu',
      description: 'Food Menu',
    },
    {
      name: 'drinkmenu',
      description: 'Drink Menu',
    },
    { name: 'gallery', description: 'Enjoy images of our food, drinks, and dining area!' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        
        
      ></Nav>
      <main>
            <Gallery currentCategory={currentCategory}></Gallery>
      </main>
    </div>
  );
}

export default App;
