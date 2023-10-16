import React, { useState } from 'react';
import ArtikelList from './components/ArtikelList';
import Warenkorb from './components/Warenkorb';

const App = () => {
  const initialArticles = [
    '1 book at 12.49',
    '1 music CD at 14.99',
    '1 chocolate bar at 0.85',
    '1 imported box of chocolates at 10.00',
    '1 imported bottle of perfume at 47.50',
    '1 imported bottle of perfume at 27.99',
    '1 bottle of perfume at 18.99',
    '1 packet of headache pills at 9.75',
    '1 box of imported chocolates at 11.25',
  ];

  const [articles, setArticles] = useState(initialArticles);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const calculateTax = (price, isTaxable, isImported) => {
    let tax = 0.1;
    if (isImported) {
      tax += 0.05;
    }
    return Math.round(price * tax * 20) / 20;
  };

  let totalAmount = 0;
  let totalTax = 0;

  cartItems.forEach((item) => {
    const { article, taxable, imported } = item;
    const [quantity, itemDetails] = article.split(' ')[0];
    const price = parseFloat(article.split(' at ')[1]);
    const itemPrice = price * quantity;
    const tax = calculateTax(price, taxable, imported);
    totalTax += tax * quantity;
    totalAmount += (itemPrice + tax) * quantity;
  });

  return (
    <div>
      <ArtikelList articles={articles} handleAddToCart={handleAddToCart} />
      <Warenkorb items={cartItems} totalAmount={totalAmount.toFixed(2)} totalTax={totalTax.toFixed(2)} />
    </div>
  );
};

export default App;
