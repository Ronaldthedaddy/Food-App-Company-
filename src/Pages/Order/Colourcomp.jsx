import React from 'react';
import './itemcomponent.css'; // Add your CSS styles here
import { useSearchParams } from 'react-router-dom';


function ItemComponent({ filterField, options }) {
    const [searchParams, setSearchParams] = useSearchParams();
  
    const currentFilter = searchParams.get(filterField) || options.at(0).value;
  
    function handleClick(value) {
      searchParams.set(filterField, value);
      setSearchParams(searchParams);
    }




  return (<div className='filter-container'>
    {options.map(({ value, label }) => (
      <button
      className={`item ${value === currentFilter ? 'active': ''}`}
        key={value}
        onClick={() => handleClick(value)}
        active={value === currentFilter}
        disabled={value === currentFilter}
      >
        {label}
      </button>
    ))}
  </div>
)}

export default ItemComponent;
