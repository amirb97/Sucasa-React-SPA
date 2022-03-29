import React from 'react';
import MenuList from '../Menulist';

function Menu() {
  const { name, description } = currentMenu;
  return (
    <section>
      <MenuList category={currentMenu.name} />
    </section>
  );
}

export default Menu;