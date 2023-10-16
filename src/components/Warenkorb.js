import React from 'react';

const Warenkorb = ({ items, totalAmount, totalTax }) => {
  return (
    <div>
      <h2>Warenkorb</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.article}</li>
        ))}
      </ul>
      <p>Total Amount: {totalAmount}</p>
      <p>Total Tax: {totalTax}</p>
    </div>
  );
};

export default Warenkorb;
