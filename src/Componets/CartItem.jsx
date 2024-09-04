// src/components/CartItem.js
import React from 'react';

const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>
        Quantity: 
        <input 
          type="number" 
          value={item.quantity} 
          onChange={(e) => updateQuantity(item, parseInt(e.target.value))}
        />
      </p>
      <button onClick={() => removeItem(item)}>Remove from Cart</button>
      <h5>total: ({item.price}*Quantity)</h5>
    </div>
  );
};

export default CartItem;