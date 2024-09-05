import AdminNavbar from "../../Components/AdminNavbar/AdminNavbar";
import ProductDetails from "../../Components/ProductDetailsCard/ProductDetails";
import { db } from '../../../firebase';
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";


function ShowProduct() {
    
    const[productArr, setproductArr]=useState([])

    useEffect(() => {
        getData();
      },[]);
    
    async function getData() {
        const querySnapshot = await getDocs(collection(db, "Men"));
            console.log(querySnapshot)
            querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            productArr.push({
                docId:   doc.id,
                docData: doc.data()
            })
            setproductArr(productArr)
        });
    }       

console.log(productArr);
    const product = {
        name: 'Sample Product',
        description: 'This is a sample product description.',
        price: '500',
        quantity: '10',
        dateOfMfg: '2023-09-05',
        productThumbnailUrl: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-pawan.appspot.com/o/uploads%2Falim-o0krZkjroSE-unsplash.jpg?alt=media&token=1ae8948d-a154-4921-8a92-00ca9bcd76fd',
        productImagesArrUrl: [
          'https://firebasestorage.googleapis.com/v0/b/ecommerce-pawan.appspot.com/o/uploads%2Falim-o0krZkjroSE-unsplash.jpg?alt=media&token=1ae8948d-a154-4921-8a92-00ca9bcd76fd',
          'https://firebasestorage.googleapis.com/v0/b/ecommerce-pawan.appspot.com/o/uploads%2Falim-o0krZkjroSE-unsplash.jpg?alt=media&token=1ae8948d-a154-4921-8a92-00ca9bcd76fd',
        ],
      };
    return(
        <div>
            <AdminNavbar />
            <h1>Product</h1>
            <div className="flex flex-wrap m-auto" >
                {
                    productArr.map((doc)=>{
                        let productId=doc.docId;
                        let product = doc.docData;
                        return <ProductDetails  product={product} />
                    })
                }
            </div>
        </div>
    );
}

export default ShowProduct