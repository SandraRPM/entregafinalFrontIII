import React, { useEffect } from 'react';
import Card from '../Components/Card';
import { useAppContext } from '../context/AppContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { obtenerListado, dentistas, theme } = useAppContext();

  useEffect(() => {
    obtenerListado();
  }, []);

  return (
    <main className={theme}>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentistas.map((dentista) => (
          <Card key={dentista.id} {...dentista} />
        ))}
      </div>
    </main>
  );
};

export default Home;
