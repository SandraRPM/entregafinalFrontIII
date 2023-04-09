import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();

  const { obtenerDetalle, detalle, theme } = useAppContext();

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    obtenerDetalle(id);
  }, [id]);

  return (
    <div
      className={theme}
      style={{ paddingTop: '10px', paddingBottom: '30px' }}
    >
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className='card' style={{ margin: '0 auto' }}>
        <img
          src='/images/doctor.jpg'
          alt={detalle && detalle.name}
          className='doctor-img'
        />
        <h3>{detalle && detalle.name}</h3>
        <p>{detalle && detalle.email}</p>
        <p>{detalle && detalle.phone}</p>
        <p>{detalle && detalle.website}</p>
      </div>
    </div>
  );
};

export default Detail;
