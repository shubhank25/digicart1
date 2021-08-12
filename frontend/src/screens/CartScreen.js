import "./CartScreen.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

import app_config from "../config";

// Components
import CartItem from "../components/CartItem";


const CartScreen = () => {
  let cartItems = JSON.parse(sessionStorage.getItem('cart'));
  const currentUser = JSON.parse(sessionStorage.getItem('user'));
  const url = app_config.api_url
  console.log(cartItems);

  useEffect(() => {

  }, []);

  const saveCart = () => {
    let values = { user: currentUser._id, cart: cartItems }
    const reqOptions = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    }
    fetch(url + '/cart/add', reqOptions)
      .then((res) => { res.json() })
      .then((data) => {
        console.log(data)

            Swal.fire({
              icon: 'success',
              title: 'Cart Saved'
            })
            // window.location.replace('/home');
          });
      }

  const qtyChangeHandler = (id, qty) => {
      console.log(id, qty);
      for(let item of cartItems){
        if (item.data.id == id){
          item.data.qty = qty;
        }
      }
    };

    const removeFromCartHandler = (id) => {
      // dispatch(removeFromCart(id));
    };

    const getCartCount = () => {
      return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    const getCartSubTotal = () => {
      return cartItems
        .reduce((price, item) => price + item.data.price * item.qty, 0)
        .toFixed(2);
    };

    return (
      <>
        <div className="cartscreen">
          <div className="cartscreen__left">
            <h3>Shopping Cart</h3>
            <br></br>

            {cartItems.length === 0 ? (
              <div>
                Your Cart Is Empty <Link to="/">Go Back</Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <CartItem
                  key={item.data.id}
                  item={item.data}
                  qtyChangeHandler={qtyChangeHandler}
                  removeHandler={removeFromCartHandler}
                />
              ))
            )}
          </div>

          <div className="cartscreen__right">
            <div className="cartscreen__info">
              <p>Subtotal ({getCartCount()}) items</p>
              <p className="rupay">₹{getCartSubTotal()}</p>
            </div>
            <div>
              <button type="button" onClick={saveCart}>Save to Cart</button>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default CartScreen;
