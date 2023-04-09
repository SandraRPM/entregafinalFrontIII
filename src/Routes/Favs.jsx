import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import { useAppContext } from '../context/AppContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favs, setFavs] = useState([]);
  const { theme } = useAppContext();

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    setFavs(favs);
  }, []);

  return (
    <div
      className={theme}
      style={{ paddingTop: '10px', paddingBottom: '30px' }}
    >
      <h1>Dentists Favs</h1>
      <div className='card-grid'>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.map((fav) => (
          <Card key={fav.id} {...fav} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
