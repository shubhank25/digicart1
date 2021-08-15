import "./CartScreen.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

import app_config from "../config";

// Components
import CartItem from "../components/CartItem";


const CartScreen = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(sessionStorage.getItem('cart')))
  const [loading, setLoading] = useState(true);
  const currentUser = JSON.parse(sessionStorage.getItem('user'));
  const [cartTotal, setCartTotal] = useState(0);
  const url = app_config.api_url
  console.log(cartItems);

  useEffect(() => {
    console.log(cartItems);
    setCartTotal(getCartSubTotal());
  }, []);

  const qtyChangeHandler = (id, value) => {
    console.log(id, value);
    console.log(cartItems);
    let items = cartItems;
    for (let item of items) {
      if (item.data.id == id) {
        item.qty = value;
      }
    }
    console.log(items);
    sessionStorage.setItem('cart', JSON.stringify(items));
    setCartItems(items);
    setCartTotal(getCartSubTotal());
  }

  const removeFromCartHandler = (id) => {
    console.log(id);
    let items = cartItems;
    items.splice(id - 1, 1);
    console.log(items);
    sessionStorage.setItem('cart', JSON.stringify(items));
    setCartItems(items);
    // console.log(cartItems);
    setCartTotal(getCartSubTotal());
  }

  const saveCart = () => {
    fetch(url + '/cart/getbyuser/' + currentUser._id)
      .then(res => console.log())
      .then(data => {
        if (data) {
          fetch(url + '/cart/update/' + data._id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cart: cartItems })
          }
          ).then(res => res.json(data))
            .then(data => {
              console.log(data);
              Swal.fire({
                icon: 'success',
                title: 'Cart Data Updated!'
              })
            })
        } else {
          fetch(url + '/cart/add/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user: currentUser._id, cart: cartItems })
          }
          ).then(res => res.json(data))
            .then(data => {
              console.log(cartItems);
              console.log(data);
              Swal.fire({
                icon: 'success',
                title: 'Cart Data Saved!'
              })
            })
        }
      })
  }

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    console.log(cartItems);
    return cartItems
      .reduce((price, item) => price + item.data.price * item.qty, 0)
      .toFixed(2);
  };

  if (cartItems)
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
              cartItems.map((item, index) => (
                <CartItem
                  key={index}
                  ind={index}
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
              <p className="rupay">₹{cartTotal}</p>
            </div>
            <div>
              <button type="button" onClick={saveCart}>Save to Cart</button>
            </div>
          </div>
        </div>
      </>
    );
  else
    return <h1>Loading</h1>
};

export default CartScreen;
