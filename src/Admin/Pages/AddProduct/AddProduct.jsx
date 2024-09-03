import React, { useState } from 'react';
import AdminNavbar from '../../Components/AdminNavbar/AdminNavbar';
import { storage } from '../../../firebase'; 
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function AddProduct({ addProduct }) {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    dateOfMfg: '',
    image: ''
  });

  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);
  const [imageThree, setImageThree] = useState(null);
  const [imageFour, setImageFour] = useState(null);
  const [imageFive, setImageFive] = useState(null);

  const [progress, setProgress] = useState(0);
  const [downloadURL, setDownloadURL] = useState("");

  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({ name: '', description: '', price: '', quantity: '', dateOfMfg: '', image: '' });
  };

  // Handle file selection with file type validation
  const handleFileChange = (event) => {
    console.log(event.target.name)
    const selectedFile = event.target.files[0];
    if (selectedFile && !allowedTypes.includes(selectedFile.type)) {
      alert('Please select a valid image file (jpg, jpeg, png).');
      return;
    }

    let ctrlName = event.target.name;
    if(ctrlName=='thumbnailImage') {
      if (selectedFile) {
        setThumbnailImage(selectedFile);
      } 
    } else if(ctrlName=='image1') {
      if (selectedFile) {
        setImageOne(selectedFile);
      } 
    } else if(ctrlName=='image2'){
      if (selectedFile) {
        setImageTwo(selectedFile);
      } 
    } else if(ctrlName=='image3'){
      if (selectedFile) {
        setImageThree(selectedFile);
      } 
    } else if(ctrlName=='image4'){
      if (selectedFile) {
        setImageFour(selectedFile);
      } 
    } else if(ctrlName=='image5'){
      if (selectedFile) {
        setImageFive(selectedFile);
      } 
    }
};

  // Handle file upload to Firebase Storage
  const handleUpload = (event) => {
    let btnName = event.target.name;
    console.log(btnName);
    let file = null;
    if(btnName=='btnThumbnail') {
      file = thumbnailImage;
    } else if (btnName=='btnImage1'){
      file = imageOne;
    } else if (btnName=='btnImage2'){
      file = imageTwo;
    } else if (btnName=='btnImage3'){
      file = imageThree;
    } else if (btnName=='btnImage4'){
      file = imageFour;
    } else if (btnName=='btnImage5'){
      file = imageFive;
    }
   
     const storageRef = ref(storage, `uploads/${file.name}`); // Create a reference to the file
     const uploadTask = uploadBytesResumable(storageRef, file); // Upload file

    // Monitor the upload process
    uploadTask.on(
      "state_changed",
      (snapshot) => {
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
        <div className='mt-4' m-auto p-5>
          <label htmlFor="pn" className='font-bold mr-2 w-48 inline-block'>Product name</label>
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
        <div className='mt-4'>
          <label htmlFor="pd" className='font-bold mr-2 w-48 inline-block'>Product Description</label>
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
        <div className='mt-4'>
          <label htmlFor="pn" className='font-bold mr-2 w-48 inline-block'>Product Price</label>
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
        <div className='mt-4'>
          <label htmlFor="pn" className='font-bold mr-2 w-48 inline-block'>Product Quantity</label>
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
        <div className='mt-4'>
          <label htmlFor="pn" className='font-bold w-48 inline-block'>Date of Mfg</label>
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
          <label htmlFor="pn" className='font-bold w-48 inline-block'>Product Thumbnail</label>
          <input type="file" name="thumbnailImage" onChange={handleFileChange} />
          { thumbnailImage && (
            <div>
              <button className="border-red-800" name="btnThumbnail" type="button" onClick={handleUpload}>Upload File</button>
              <p>File Name: {thumbnailImage.name}</p>
            </div>
          )}
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
          <label htmlFor="pn" className='font-bold w-48 inline-block'>Product Image 1</label>
          <input type="file" name="image1" onChange={handleFileChange} />
          { imageOne && (
            <div>
              <button className="border-red-800" name="btnImage1" type="button" onClick={handleUpload}>Upload File</button>
              <p>File Name: {imageOne.name}</p>
            </div>
          )}
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
          <label htmlFor="pn" className='font-bold w-48 inline-block'>Product Image 2</label>
          <input type="file" name="image2" onChange={handleFileChange} />
          { imageTwo && (
            <div>
              <button className="border-red-800" name="btnImage2" type="button" onClick={handleUpload}>Upload File</button>
              <p>File Name: {imageTwo.name}</p>
            </div>
          )}
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
          <label htmlFor="pn" className='font-bold w-48 inline-block'>Product Image 3</label>
          <input type="file" name="image3" onChange={handleFileChange} />
          { imageThree && (
            <div>
              <button className="border-red-800" type="button" name="btnImage3" onClick={handleUpload}>Upload File</button>
              <p>File Name: {imageThree.name}</p>
            </div>
          )}
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
          <label htmlFor="pn" className='font-bold w-48 inline-block'>Product Image 4</label>
          <input type="file" name="image4" onChange={handleFileChange} />
          { imageFour && (
            <div>
              <button className="border-red-800" type="button" name="btnImage4" onClick={handleUpload}>Upload File</button>
              <p>File Name: {imageFour.name}</p>
            </div>
          )}
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
          <label htmlFor="pn" className='font-bold w-48 inline-block'>Product Image 5</label>
          <input type="file" name="image5" onChange={handleFileChange} />
          { imageFive && (
            <div>
              <button className="border-red-800" type="button" name="btnImage5" onClick={handleUpload}>Upload File</button>
              <p>File Name: {imageFive.name}</p>
            </div>
          )}
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
        <button type="submit" className='mt-4 block p-1 rounded-md border-[1px] shadow-md text-sm'>Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
