import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { cambiarTheme, theme } = useAppContext();

  const cambiarTema = () => {
    if (theme === 'dark') {
      cambiarTheme('light');
    } else {
      cambiarTheme('dark');
    }
  };

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={cambiarTema}>Change theme</button>
      <Link to='/'>Home</Link>
      <Link to='/favs'>Favs</Link>
      <Link to='/contact'>Contact</Link>
    </nav>
  );
};

export default Navbar;
