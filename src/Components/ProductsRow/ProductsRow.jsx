import React from 'react'
import ProductOverview from '../ProductOverview/ProductOverview'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../firebase';
const ProductsRow = () => {

  async function storeDb(){

    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }

  storeDb()


  


  return (
    <div className=' relative' >
        <button className='absolute left-0 top-[40%] scale-150 bg-[#f2f0f096] h-20 w-10' ><ChevronLeftIcon /></button>
        <button className='absolute right-0 top-[40%] scale-150 bg-[#f2f0f096] h-20 w-10' ><ChevronRightIcon /></button>
        <h2 className='ml-2 mb-3'>Men Collection</h2>
        <div className='flex overflow-x-scroll' >
            <ProductOverview />
            <ProductOverview />
            <ProductOverview />
            <ProductOverview />
            <ProductOverview />
            <ProductOverview />
            <ProductOverview /> 
        </div>
    </div>
  )
}

export default ProductsRow