
import React, { useState } from 'react';
import AdminNavbar from '../../Components/AdminNavbar/AdminNavbar';
// function ImageUrl(){
//   return <div>
//     <label htmlFor="pn" className='font-bold w-48 inline-block' >Product Image Url</label>
//     <input 
//       type="file" 
//       name="imageFile" 
//       placeholder="Image File" 
//       value={product.image.file} 
//       onChange={handleChange} 
//       className='border-2 border-black p-1 rounded-sm' 
//     />
//   </div>
// }

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
    <div className='' >
      <AdminNavbar />
        <form onSubmit={handleSubmit} className='border-black border-2 p-5 m-5'>
        <div className='mt-4' m-auto p-5  >
          <label htmlFor="pn" className='font-bold mr-2 w-48 inline-block' >Product name</label>
          <input
            id="pn"
            type="text" 
            name="name" 
            placeholder="Product Name" 
            value={product.name} 
            onChange={handleChange} 
            required 
            className='border-2 border-black p-1 rounded-sm' 
          />
          </div>
          <div className='mt-4'  >
          <label htmlFor="pn" className='font-bold mr-2 w-48 inline-block' >Product Description</label>
          <input 
            id="pd"
            type="text" 
            name="description" 
            placeholder="Product Description" 
            value={product.description} 
            onChange={handleChange} 
            required 
            className='border-2 border-black p-1 rounded-sm' 
          />
          </div>
          <div className='mt-4'  >
          <label htmlFor="pn" className='font-bold mr-2 w-48 inline-block' >Product Price</label>
          <input 
            type="number" 
            name="price" 
            placeholder="Price" 
            value={product.price} 
            onChange={handleChange} 
            required 
            className='border-2 border-black p-1 rounded-sm' 
          />
          </div>
          <div className='mt-4'  >
          <label htmlFor="pn" className='font-bold mr-2 w-48 inline-block' >Product Quantity</label>
          <input 
            type="number" 
            name="quantity" 
            placeholder="Quantity" 
            value={product.quantity} 
            onChange={handleChange} 
            required 
            className='border-2 border-black p-1 rounded-sm' 
          />
          </div>
          <div className='mt-4'  >
          <label htmlFor="pn" className='font-bold w-48 inline-block' >Date of Mfg</label>
          <input 
            type="date" 
            name="dateOfMfg" 
            value={product.dateOfMfg} 
            onChange={handleChange} 
            required 
            className='border-2 border-black p-1 rounded-sm' 
          />
          </div>
          <div className='mt-4'>
          <label htmlFor="pn" className='font-bold w-48 inline-block' >Product Thumbnail </label>
          <input 
            type="file" 
            name="image" 
           
          />

          <button>Upload</button>
          </div>
          <div className='mt-4'>
            {/* <ImageUrl/> */}
          </div>

          <button type="submit" className='mt-4 block p-1 rounded-md border-[1px] shadow-md text-sm' >Add Product</button>
        </form>
    </div>
  );
}

export default AddProduct;
