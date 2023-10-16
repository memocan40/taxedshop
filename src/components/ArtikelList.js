import React from 'react';

const ArticleList = ({ articles, handleAddToCart }) => {

  const isTaxable = (item) => {
    const nonTaxableItems = ['book', 'chocolate', 'pills'];
    for (let i = 0; i < nonTaxableItems.length; i++) {
      if (item.toLowerCase().includes(nonTaxableItems[i])) {
        return false;
      }
    }
    return true;
  };

  const isImported = (item) => {
    return item.toLowerCase().includes('imported');
  };

  return (
    <div>
      <h2>Article List</h2>
      <ul>
        {articles.map((article, index) => {
          const taxable = isTaxable(article);
          const imported = isImported(article);
          return (
            <li key={index}>
              {article} - {taxable ? "Taxable" : "Non-taxable"} - {imported ? "Imported" : "Not Imported"}
              <button onClick={() => handleAddToCart({ article, taxable, imported })}>Add to Cart</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleList;
