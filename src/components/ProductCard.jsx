import { useState } from "react";

const ProductCard = ({ title, price, description, image }) => {
  const [readmore, setReadmore] = useState(false);

  return (
    <article className="h-full flex flex-col max-w-xs  rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-w-3 aspect-h-4 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-contain  transition-transform duration-300"
        />
      </div>

      <div className="p-4 flex flex-col ">
        <header>
          <h4 className="text-xl font-semibold text-gray-800 mb-4">{title}</h4>

          <p className="text-lg font-medium text-green-600">R {price} </p>
        </header>
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {readmore ? description : `${description.substring(0, 150)}...`}
          <button
            className="cursor-pointer ml-1 text-green-600 hover:text-green-800"
            onClick={() => setReadmore(!readmore)}
          >
            {readmore ? "show less" : "read more"}
          </button>
        </p>
        
        <button className="border-2 my-1 w-[40%] bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-200  ">
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
