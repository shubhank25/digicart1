import "./HomeScreen.css";
import { useEffect, useState } from "react";
import products from '../productData';

// Components
import Product from "../components/Product";

//Actions
// import { getProducts as listProducts } from "../redux/actions/productActions";



const HomeScreen = () => {

  const [productList, setProductList] = useState(products);
  const [loading, setLoading] = useState(false);

  
  return (
    
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products" >
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          productList.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product.id}
            />
          ))
        )}

      </div>
    </div>
  );
};

export default HomeScreen;
