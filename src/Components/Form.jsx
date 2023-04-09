import React, { useState } from 'react';

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // get inputs from form
    // validate inputs
    if (name === '' || email === '') {
      alert('Complete los campos');
      return;
    }
    // send data to server
    alert(`Gracias ${name}, te contactaremos cuando antes vía mail a ${email}`);
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else {
      setEmail(value);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Nombre'
          name='name'
          onChange={onInputChange}
          value={name}
        />
        <input
          type='text'
          placeholder='Email'
          name='email'
          onChange={onInputChange}
          value={email}
        />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
