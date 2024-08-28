
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
    <div className='shadow-md border-[1px] mt-5 m-auto p-5' >
    <form onSubmit={handleSubmit}>
    <div className='mt-4' m-auto p-5  >
      <label htmlFor="pn" className='font-bold' >Product name</label>
      <input
        id="pn"
        type="text" 
        name="name" 
        placeholder="Product Name" 
        value={product.name} 
        onChange={handleChange} 
        required 
      />
      </div>
      <div className='mt-4'  >
      <label htmlFor="pn" className='font-bold' >Product Description</label>
      <input 
        id="pd"
        type="text" 
        name="description" 
        placeholder="Product Description" 
        value={product.description} 
        onChange={handleChange} 
        required 
      />
      </div>
      <div className='mt-4'  >
      <label htmlFor="pn" className='font-bold' >Product Price</label>
      <input 
        type="number" 
        name="price" 
        placeholder="Price" 
        value={product.price} 
        onChange={handleChange} 
        required 
      />
      </div>
      <div className='mt-4'  >
      <label htmlFor="pn" className='font-bold' >Product Quantity</label>
      <input 
        type="number" 
        name="quantity" 
        placeholder="Quantity" 
        value={product.quantity} 
        onChange={handleChange} 
        required 
      />
      </div>
      <div className='mt-4'  >
      <label htmlFor="pn" className='font-bold' >Date of Mfg</label>
      <input 
        type="date" 
        name="dateOfMfg" 
        value={product.dateOfMfg} 
        onChange={handleChange} 
        required 
      />
      </div>
      <div className='mt-4'>
      <label htmlFor="pn" className='font-bold' >Image url</label>
      <input 
        type="text" 
        name="image" 
        placeholder="Image URL" 
        value={product.image} 
        onChange={handleChange} 
      />
      </div>
      <button type="submit" className='mt-4 block p-1 rounded-md border-[1px] shadow-md text-sm' >Add Product</button>
    </form>
    </div>
  );
}

export default AddProduct;
