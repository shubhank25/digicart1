import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import app_config from '../config';
import products from '../productData';

// Actions
// import { getProductDetails } from "../redux/actions/productActions";
// import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  
  const [loading, setLoading] = useState(false);


  const { id } = useParams();
  const url = app_config.api_url;
  const productList = products;
  const [productData, setProductData] = useState(productList[id-1]);
  console.log(productData);
  let cart = JSON.parse(sessionStorage.getItem('cart'));

  useEffect(() => {
      
  }, [])

  const addToCartHandler = () => {
    if(!cart){
      cart = [];
    }
    cart.push({data : productData, qty: qty});
    sessionStorage.setItem('cart', JSON.stringify(cart));
    
    history.push(`/cart`);
  };

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img className="img-fluid" src={productData.imageUrl} alt={productData.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{productData.name}</p>
              <p className="rupa">Price: ₹{productData.price}</p>
              <p>Description: {productData.description}</p>
            </div>
          </div>

          <div className="productDatascreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>₹{productData.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {productData.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select className="qty_color" value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(productData.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
