import "./header.css";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';




const Header = () => {

    const logOut = () => {
        console.log('save success');
        Swal.fire({
            icon: 'success',
            title: 'Logout'
        })
        window.location.replace('/login');
    }

    return (
        <>
        <nav class="navbar navbar-expand-md">
            <div class="container-fluid">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">


                    <Link class="nav-link1" to={'/digicart'}><h4 style={{ color: "black" }} >Digicart</h4></Link>

                    &nbsp;
                    &nbsp;

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <li >
                        <Link class="nav-link" to={'/home'}>Home</Link>
                        </li>
                        <li >
                            <Link class="nav-link" to={'/login'}>Login</Link>
                        </li>
                        <li >
                            <Link class="nav-link" to={'/register'}>Register</Link>
                        </li>
                        <li >
                      
                        <Link class="nav-link" onClick={logOut} to={'/login'}>Logout</Link>
                        </li>
                    </ul>


                </div>
            </div>
        </nav>


        </>
    
    )
    }



export default Header;