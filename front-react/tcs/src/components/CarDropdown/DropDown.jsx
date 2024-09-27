import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './carDropDown.css';

const CarBrandsDropdown = () => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const navigate = useNavigate(); 

  const carBrands = [
    { label: 'Evento Toyota', path: '/Toyota' },
    { label: 'Evento Ford', path: '/Ford' },
    { label: 'Evento Chevrolet', path: '/Chevrolet' },
    { label: 'Evento BMW', path: '/BMW' },
    { label: 'Evento Mercedes', path: '/Mercedes' }
  ];

  const handleBrandChange = (e) => {
    const selectedOption = carBrands.find((brand) => brand.label === e.target.value);
    setSelectedBrand(selectedOption?.label || '');

    if (selectedOption) {
      navigate(selectedOption.path); // Redirige a la ruta correspondiente
    }
  };

  return (
    <div className="container">
      <select id="carBrands" value={selectedBrand} onChange={handleBrandChange}>
        <option value="">Busca evento por tu marca favorita</option>
        {carBrands.map((brand, index) => (
          <option key={index} value={brand.label}>
            {brand.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CarBrandsDropdown;