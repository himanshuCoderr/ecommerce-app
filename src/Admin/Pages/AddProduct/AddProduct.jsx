
import React, { useState } from 'react';
import AdminNavbar from '../../Components/AdminNavbar/AdminNavbar';
import {storage} from '../../../firebase' 
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function AddProduct({ addProduct }) {
  const [product, setProduct] = useState({
    name: '',
    description:'',
    price: '',
    quantity: '',
    dateOfMfg: '',
    image: ''
  });

  // Create a child reference
  const imagesRef = ref(storage, 'productThumbnail');
  // imagesRef now points to 'images'

  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [downloadURL, setDownloadURL] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({ name: '', description:'', price: '', quantity:'', dateOfMfg: '', image: '' });
  };

  // Handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  // Handle file upload to Firebase Storage
  const handleUpload = () => {
    if (!file) return;

    const storageRef = ref(storage, `uploads/{file.name}`); // Create a reference to the file
    const uploadTask = uploadBytesResumable(storageRef, file); // Upload file

    // Monitor the upload process
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Calculate upload progress
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.error("Upload failed:", error);
      },
      () => {
        // Get the download URL once the upload is complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setDownloadURL(downloadURL);
          console.log("File available at:", downloadURL);
        });
      }
    );
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
          <input type="file" name="image" onChange={handleFileChange} />
          { file && (
            <div>
              <button className="border-red-800" onClick={handleUpload}>Upload File</button>
              <p>File Name: {file.name}</p>
            </div>
          ) }
          
          {progress > 0 && <p>Upload Progress: {Math.round(progress)}%</p>}
          {downloadURL && (
            <div>
              <p>File uploaded successfully! You can access it here:</p>
              <a href={downloadURL} target="_blank" rel="noopener noreferrer">
                {downloadURL}
              </a>
            </div>
          )}
          </div>
          <div className='mt-4'> 
            <label htmlFor="Image1" className='font-bold w-48 inline-block'>Image 1</label>
            <input type="file" name="Image1"></input>
            <button>Upload</button>
          </div>
          <div className='mt-4'> 
            <label htmlFor="Image2" className='font-bold w-48 inline-block'>Image 2</label>
            <input type="file" name="Image2"></input>
            <button>Upload</button>
          </div>
          <div className='mt-4'> 
            <label htmlFor="Image3" className='font-bold w-48 inline-block'>Image 3</label>
            <input type="file" name="Image3"></input>
            <button>Upload</button>
          </div>
          <div className='mt-4'> 
            <label htmlFor="Image4" className='font-bold w-48 inline-block'>Image 4</label>
            <input type="file" name="Image4"></input>
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
