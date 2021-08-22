

import React, { useState } from 'react';

const GROCERY_ESSENIALS = 'Grocery Essenials';
const UTILITY = 'utility';

export default function Products({ setCart, cart }) {
  const [products] = useState([
    

  {
    category: GROCERY_ESSENIALS,
    name: 'Bread',
    cost:'1.10',
    image:'data:image/jpeg;base64,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',
    quantity:1
  },
  
  {
    category: GROCERY_ESSENIALS,
    name:'Milk',
    cost:'0.50',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSN5DQFiKl69ROfiHjwJQRv-T355uEx18szQ&usqp=CAU',
    quantity:1
  },
  {
    category: GROCERY_ESSENIALS,
    name:'Cheese',
    cost:'0.90',
    image:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQGxlVZBVuCPzcl9Dfqo5I7ytUWEdjnej_EgINAXXNHcTwChhk5wPdoq0mhSKj5Zp54XYrOYtIz2JNMTzolthW7EgvGqaxycdzBZQsqQkL-&usqp=CAc',
    quantity:1
  },
  {
    category: GROCERY_ESSENIALS,
    name:'Soup',
    cost:'0.60',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxg1yGODnMQU47VOxTzUwcEPM2beCrStgG6w&usqp=CAU',
    quantity:1
  },
  {
    category: GROCERY_ESSENIALS,
    name:'Butter',
    cost:'1.20',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBAkpfDEj41uZ3L7C9EWJsjgl7d7fOtHepXw&usqp=CAU',
    quantity:1
  },
]);


  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(GROCERY_ESSENIALS);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };

  return (
    <>
      <h1>Products</h1>
      Select a category
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={GROCERY_ESSENIALS}>{GROCERY_ESSENIALS}</option>
        <option value={UTILITY}>{UTILITY}</option>
      </select>
      <div className="products">
        {getProductsInCategory().map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}