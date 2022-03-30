import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

//<img src={require("../../assets/logo/logo.jpg").default} />

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
 
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="col-12 text-white">
      <div className="col-2 p-3">
        <a href="/">
        <img src={require("../../assets/logo/logo_transparent.png").default} className='logo'/>
        </a>
      </div>
      <nav className='col-8 nav justify-content-around p-3'>
        <ul className='flex-row navbar-nav nav-fill w-100'>
          {categories.map((category) => (
            <li
              className={`mx-4 nav-item ${
                currentCategory.name === category.name && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
      <div className='col-2 text-center'>
        <button id="logout" className='btn btn-outline-light me-2 login'>logout</button>
      </div>
    </header>
  );
}

export default Nav;
