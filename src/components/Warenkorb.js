import React from 'react';
import './Warenkorb.css';

const Warenkorb = ({ items, totalAmount, totalTax }) => {
  return (
    <div className="warenkorb-container">
      <h2>Warenkorb</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="item">
            {item.article} - Tax: {item.tax.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total Amount: {totalAmount}</p>
      <p>Total Tax: {totalTax}</p>
    </div>
  );
};

export default Warenkorb;
