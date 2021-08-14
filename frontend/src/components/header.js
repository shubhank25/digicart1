import "./header.css";
import { useState } from "react";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';





const Header = () => {
    const [currentUser, setCurrentUser] = useState(sessionStorage.getItem('user'));
   
    const logOut = () => {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('cart');
        Swal.fire({
            icon: 'success',
            title: 'Logout'
        })
        window.location.replace('/login');
    }

    const loggedIn = () => {
        console.log(currentUser);
        if (currentUser) {
            return <>

                {/* <li>
                   
                Welcome {currentUser.name} 
                
                </li> */}
           
                <li >

                    <Link className="btn btn-light text-dark me-2" to={'/home'}>Home</Link>
                </li>

                <li>
                    <i className="fas fa-shopping-cart"></i>

                    <Link to={"/cart"} className="btn btn-outline-success text-dark me-2">
                        Cart
                    </Link>
                </li>
                &nbsp;

                <li >
                    <button className="btn btn-danger" onClick={logOut}>

                        Logout

                    </button>
                </li>
            </>
        } else {
            return <>

                <li>
                    <Link to="/login" type="button" className="btn btn-outline-success me-2">Login</Link>
                </li>

                <li>
                    <Link to="/register" className="btn btn-outline-dark">Sign-up</Link>

                </li>
            </>

        }
    }


    return (

        <header>
            <div className="px-3 py-2 navbar-nav">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/digicart" className=" d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                            <h2 class="digicart1">Digicart</h2>
                        </a>

                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">


                            {
                                loggedIn()
                            }

                        </ul>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header;