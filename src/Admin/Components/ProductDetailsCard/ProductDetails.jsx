import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div className="container w-[15vw]  p-5">
      <div className="bg-white shadow-lg rounded-lg p-6">
        {/* Thumbnail Image */}
        <div className="flex justify-center">
          <img
            src={product.productThumbnailUrl}
            alt={product.name}
            className="w-48 h-48 object-cover rounded-full border-2 border-gray-300"
          />
        </div>

        {/* Product Info */}
        <div className="text-center mt-4">
          <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
        </div>

        {/* Price and Quantity */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-700">Price</h3>
            <p className="text-gray-500">₹{product.price}</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-700">Quantity</h3>
            <p className="text-gray-500">{product.quantity}</p>
          </div>
        </div>

        {/* Date of Manufacturing */}
        <div className="text-center mt-4">
          <h3 className="text-lg font-semibold text-gray-700">Manufacturing Date</h3>
          <p className="text-gray-500">{product.dateOfMfg}</p>
        </div>

        {/* Product Images */}
        {/* <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Product Images</h3>
          <div className="grid grid-cols-2 gap-4">
            {product.productImagesArrUrl.length > 0 ? (
              product.productImagesArrUrl.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`Product Image ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              ))
            ) : (
              <p className="text-gray-500">No additional images available.</p>
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProductDetails;
