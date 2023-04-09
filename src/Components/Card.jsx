import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ name, username, id }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    // add fav into localstorage
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    const newFav = { name, username, id };
    const newFavs = [...favs, newFav];
    localStorage.setItem('favs', JSON.stringify(newFavs));
  };

  return (
    <div className='card'>
      {/* En cada card deberan mostrar en name - username y el id */}

      <img
        src='images/doctor.jpg'
        alt={name}
        style={{ objectFit: 'cover', width: '200px' }}
      />

      <h3>{name}</h3>
      <p>{username}</p>
      <p>{id}</p>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link to={`/details/${id}`}>...mas informacion</Link>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      
      <button
        onClick={addFav}
        className='favButton'
        style={{ marginTop: '5px' }}
      >
        Add fav 
      </button>
    </div>
  );
};

export default Card;
