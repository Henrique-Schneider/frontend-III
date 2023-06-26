import React, { useState, useReducer, useEffect } from 'react';
import './App.css';

import Form from './components/Form';
import ServiceCard from './components/ServiceCard';

import ServiceContext from './contexts/ServiceContext';

function servicesReducer(state, action) {
  switch (action.type) {
    case 'ADD_SERVICE':
      return action.payload;
    case 'REMOVE_SERVICE':
      const updatedServices = state.filter(
        (service) => service.id !== action.payload
      );
      return updatedServices;
    default:
      return state;
  }
}

function App() {
  const serviceDefaultValues = {
    id: 3423345,
    type: 'Triagem',
    time: '40 minutos',
  };

  const [services, dispatch] = useReducer(servicesReducer, []);

  const handleRemoveService = (id) => {
    dispatch({
      type: 'REMOVE_SERVICE',
      payload: id,
    });
  };

  useEffect(() => {
    const storedServices = JSON.parse(localStorage.getItem('services'));
    if (storedServices) {
      dispatch({
        type: 'ADD_SERVICE',
        payload: storedServices,
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('services', JSON.stringify(services));
  }, [services]);

  return (
    <ServiceContext.Provider value={{ services, dispatch }}>
      <div className="card">
        <h1>Novo atendimento</h1>
        <Form />
        <h1>Seus atendimentos</h1>
        {services.length > 0 ? (
          services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              handleRemoveService={handleRemoveService}
            />
          ))
        ) : (
          <h3>A lista de atendimentos está vazia</h3>
        )}
      </div>
    </ServiceContext.Provider>
  );
}

export default App;
