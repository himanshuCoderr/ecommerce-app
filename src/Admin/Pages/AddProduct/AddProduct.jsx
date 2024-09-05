import React, { useState } from 'react';
import AdminNavbar from '../../Components/AdminNavbar/AdminNavbar';
import { storage } from '../../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db } from '../../../firebase';
import { collection, addDoc } from "firebase/firestore";
import { useRef } from 'react';
function AddProduct({ addProduct }) {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    dateOfMfg: '',
    productThumbnailUrl: '',
    productImagesArrUrl: []
  });


  const [selectedCollection, setSelectedCollection] = useState("")

  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);
  const [imageThree, setImageThree] = useState(null);
  const [imageFour, setImageFour] = useState(null);
  const [imageFive, setImageFive] = useState(null);

  const [thumbnailImageUrl, setThumbnailImageUrl] = useState('');
  const [imageOneUrl, setImageOneUrl] = useState('');
  const [imageTwoUrl, setImageTwoUrl] = useState('');
  const [imageThreeUrl, setImageThreeUrl] = useState('');
  const [imageFourUrl, setImageFourUrl] = useState('');
  const [imageFiveUrl, setImageFiveUrl] = useState('');

  const [progress, setProgress] = useState(0);
  const [downloadURL, setDownloadURL] = useState("");

  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const handleSelectCollectionChange = (event) => {

    setSelectedCollection(event.target.value)

  }
  async function addToCollectionDb(collectioName) {
    try {
      const docRef = await addDoc(collection(db, collectioName), product);
      console.log("Document written with ID: ", docRef.id);
      setProduct({
        name: '',
        description: '',
        price: '',
        quantity: '',
        dateOfMfg: '',
        productThumbnailUrl: '',
        productImagesArrUrl: []
      });
      setThumbnailImage(null);
      setImageOne(null);
      setImageTwo(null);
      setImageThree(null);
      setImageFour(null); 
      setImageFive(null);
      setThumbnailImageUrl('');
      setImageOneUrl('');
      setImageTwoUrl('');
      setImageThreeUrl('');
      setImageFourUrl('');
      setImageFiveUrl('');

    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(product)
    console.log(selectedCollection)
    if(thumbnailImageUrl=='' || imageOneUrl=='' || imageTwoUrl=='' 
      || imageThreeUrl=='' || imageFourUrl=='' || imageFiveUrl=='')
    {
        alert('Please upload all images before adding the product.');
        return;
    }
    if (selectedCollection == "Men") {
      addToCollectionDb("Men")
    } else if (selectedCollection == "Women") {
      addToCollectionDb("Women")
    } else if (selectedCollection == "Kids") {
      addToCollectionDb("Kids")
    } else if (selectedCollection == "Pets") {
      addToCollectionDb("Pets")
    } else if (selectedCollection == "HomeCare") {
      addToCollectionDb("HomeCare")
    } else if (selectedCollection == "AutoMobile") {
      addToCollectionDb("AutoMobile")
    } else if (selectedCollection == "MobileCare") {
      addToCollectionDb("MobileCare")
    }
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
    if (ctrlName == 'thumbnailImage') {
      if (selectedFile) {
        setThumbnailImage(selectedFile);
      }
    } else if (ctrlName == 'image1') {
      if (selectedFile) {
        setImageOne(selectedFile);
      }
    } else if (ctrlName == 'image2') {
      if (selectedFile) {
        setImageTwo(selectedFile);
      }
    } else if (ctrlName == 'image3') {
      if (selectedFile) {
        setImageThree(selectedFile);
      }
    } else if (ctrlName == 'image4') {
      if (selectedFile) {
        setImageFour(selectedFile);
      }
    } else if (ctrlName == 'image5') {
      if (selectedFile) {
        setImageFive(selectedFile);
      }
    }
  };

  // Handle file upload to Firebase Storage
  function uploadFile(file, imageType) {
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
          switch (imageType)
          {
            case 'thumbnail':
              product.productThumbnailUrl=downloadURL;
              setThumbnailImageUrl(downloadURL);
            break;
            case 'image1':
              product.productImagesArrUrl.push(downloadURL)
              setImageOneUrl(downloadURL);
            break;
            case 'image2':
              product.productImagesArrUrl.push(downloadURL)
              setImageTwoUrl(downloadURL);
            break;
            case 'image3':
              product.productImagesArrUrl.push(downloadURL)
              setImageThreeUrl(downloadURL);
            break;
            case 'image4':
              product.productImagesArrUrl.push(downloadURL)
              setImageFourUrl(downloadURL);
            break;
            case 'image5':
              product.productImagesArrUrl.push(downloadURL)
              setImageFiveUrl(downloadURL);
            break;
          }
          console.log("File available at:", downloadURL);
        });
      }
    );
  }

  const handleUpload = (event) => {
    let btnName = event.target.name;
    console.log(btnName);
    let file = null;
    if (btnName == 'btnThumbnail') {
      file = thumbnailImage;
      uploadFile(file,'thumbnail')
    } else if (btnName == 'btnImage1') {
      file = imageOne;
      uploadFile(file,'image1')
    } else if (btnName == 'btnImage2') {
      file = imageTwo;
      uploadFile(file,'image2')
    } else if (btnName == 'btnImage3') {
      file = imageThree;
      uploadFile(file,'image3')
    } else if (btnName == 'btnImage4') {
      file = imageFour;
      uploadFile(file,'image4')
    } else if (btnName == 'btnImage5') {
      file = imageFive;
      uploadFile(file,'image5')
    }
  };

  return (
    <div className='' >
      <AdminNavbar />
      <form onSubmit={handleSubmit} className='border-black border-2 p-5 m-5'>
        <div>
          <label htmlFor="" className='mr-5'>Select Collection</label>
          <select name="" id="" className='bg-gray-200 text-black p-2' onChange={handleSelectCollectionChange}>
            <option value="Men">Select Collection</option>
            <option value="Men">Men Collection</option>
            <option value="Women">Women Collection</option>
            <option value="Kids">Kids Collection</option>
            <option value="Pets">Pets Collection</option>
            <option value="HomeCare">HomeCare Collection</option>
            <option value="AutoMobile">AutoMobileCare Collection</option>
            <option value="MobileCare">MobileCare Collection</option>
          </select>
          <p className='text-sm mt-2 text-red-400' >* By Default it will be added into All Products</p>
        </div>
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
          {thumbnailImage && (
            <div>
              <button className="bg-gray-400 p-1 border-black rounded-md " name="btnThumbnail" type="button" onClick={handleUpload}>Upload File</button>
              <p>File Name: {thumbnailImage.name}</p>
            </div>
          )}
          {progress > 0 && <p>Upload Progress: {Math.round(progress)}%</p>}
          {thumbnailImageUrl && (
            <div>
              <p>File uploaded successfully! You can access it here:</p>
              <a href={thumbnailImageUrl} target="_blank" rel="noopener noreferrer">
                {thumbnailImageUrl}
              </a>
            </div>
          )}
        </div>
        <div className='mt-4'>
          <label htmlFor="pn" className='font-bold w-48 inline-block'>Product Image 1</label>
          <input type="file" name="image1" onChange={handleFileChange} />
          {imageOne && (
            <div>
              <button className="bg-gray-400 p-1 border-black rounded-md " name="btnImage1" type="button" onClick={handleUpload}>Upload File</button>
              <p>File Name: {imageOne.name}</p>
            </div>
          )}
          {progress > 0 && <p>Upload Progress: {Math.round(progress)}%</p>}
          {imageOneUrl && (
            <div>
              <p>File uploaded successfully! You can access it here:</p>
              <a href={imageOneUrl} target="_blank" rel="noopener noreferrer">
                {imageOneUrl}
              </a>
            </div>
          )}
        </div>
        <div className='mt-4'>
          <label htmlFor="pn" className='font-bold w-48 inline-block'>Product Image 2</label>
          <input type="file" name="image2" onChange={handleFileChange} />
          {imageTwo && (
            <div>
              <button className="bg-gray-400 p-1 border-black rounded-md " name="btnImage2" type="button" onClick={handleUpload}>Upload File</button>
              <p>File Name: {imageTwo.name}</p>
            </div>
          )}
          {progress > 0 && <p>Upload Progress: {Math.round(progress)}%</p>}
          {imageTwoUrl && (
            <div>
              <p>File uploaded successfully! You can access it here:</p>
              <a href={imageTwoUrl} target="_blank" rel="noopener noreferrer">
                {imageTwoUrl}
              </a>
            </div>
          )}
        </div>
        <div className='mt-4'>
          <label htmlFor="pn" className='font-bold w-48 inline-block'>Product Image 3</label>
          <input type="file" name="image3" onChange={handleFileChange} />
          {imageThree && (
            <div>
              <button className="bg-gray-400 p-1 border-black rounded-md " type="button" name="btnImage3" onClick={handleUpload}>Upload File</button>
              <p>File Name: {imageThree.name}</p>
            </div>
          )}
          {progress > 0 && <p>Upload Progress: {Math.round(progress)}%</p>}
          {imageThreeUrl && (
            <div>
              <p>File uploaded successfully! You can access it here:</p>
              <a href={imageThreeUrl} target="_blank" rel="noopener noreferrer">
                {imageThreeUrl}
              </a>
            </div>
          )}
        </div>
        <div className='mt-4'>
          <label htmlFor="pn" className='font-bold w-48 inline-block'>Product Image 4</label>
          <input type="file" name="image4" onChange={handleFileChange} />
          {imageFour && (
            <div>
              <button className="bg-gray-400 p-1 border-black rounded-md " type="button" name="btnImage4" onClick={handleUpload}>Upload File</button>
              <p>File Name: {imageFour.name}</p>
            </div>
          )}
          {progress > 0 && <p>Upload Progress: {Math.round(progress)}%</p>}
          {imageFourUrl && (
            <div>
              <p>File uploaded successfully! You can access it here:</p>
              <a href={imageFourUrl} target="_blank" rel="noopener noreferrer">
                {imageFourUrl}
              </a>
            </div>
          )}
        </div>
        <div className='mt-4'>
          <label htmlFor="pn" className='font-bold w-48 inline-block'>Product Image 5</label>
          <input type="file" name="image5" onChange={handleFileChange} />
          {imageFive && (
            <div>
              <button className="bg-gray-400 p-1 border-black rounded-md " type="button" name="btnImage5" onClick={handleUpload}>Upload File</button>
              <p>File Name: {imageFive.name}</p>
            </div>
          )}
          {progress > 0 && <p>Upload Progress: {Math.round(progress)}%</p>}
          {imageFiveUrl && (
            <div>
              <p>File uploaded successfully! You can access it here:</p>
              <a href={imageFiveUrl} target="_blank" rel="noopener noreferrer">
                {imageFiveUrl}
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
