import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("network response was not ok");
        const data = await response.json();
        setProductData(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);

        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error fetching data</h2>;
  }

  return (
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-y-12  p-4">
 {productData.map((product)=>(
     <div  key={product.id} className=" pl-12" >
         <ProductCard {...product}  />
     </div>
     
   
 ))}
  </section>
  )
};

export default ProductList;
