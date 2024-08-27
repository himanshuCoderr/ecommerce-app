
import React, { useState } from 'react';

function AddProduct({ addProduct }) {
  const [product, setProduct] = useState({
    name: '',
    description:'',
    price: '',
    quantity: '',
    dateOfMfg: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({ name: '', description:'', price: '', quantity:'', dateOfMfg: '', image: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        placeholder="Product Name" 
        value={product.name} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="text" 
        name="description" 
        placeholder="Product Description" 
        value={product.description} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="number" 
        name="price" 
        placeholder="Price" 
        value={product.price} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="number" 
        name="quantity" 
        placeholder="Quantity" 
        value={product.quantity} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="date" 
        name="dateOfMfg" 
        value={product.dateOfMfg} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="text" 
        name="image" 
        placeholder="Image URL" 
        value={product.image} 
        onChange={handleChange} 
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;
