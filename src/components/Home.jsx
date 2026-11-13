import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productSlice";

const Home = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { loading, error } = useSelector((state) => state.products);
  console.log(products);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div className="bg-white border rounded-lg p-2" key={product.id}>
          <div className="overflow-hidden rounded-lg border-b-2 pb-2 border-gray-400">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-58 object-cover rounded-lg"
            />
          </div>
          <div className="py-3 px-3">
            <h2 className="text-lg font-medium">{product.title}</h2>
            <p>Rs.{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
