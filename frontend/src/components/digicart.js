import "./digicart.css";
import { useState } from "react";
import { Link } from 'react-router-dom';


const Digicart = () => {

    return (
    <>
            <div className="col-md-12 col-sm-8">

                <br></br>
                <br></br>
                <h4 className="homepage-text col-md-12 col-sm-8"> Digicart : </h4>

                &nbsp;
                <p className="home_text col-md-6 ">Hey There! <br></br> Welcome To My Project. This Project is all about a basic Shopping Cart, where you can check items and store them. We can also check the Price of the products and read description. The shopping cart project needs to create the shopping cart system to organize the products record and the other information about the customers. How customers can save products from website can be recognized from their username and password.</p>

                <br></br>

                <h6 className=" home_text2 col-md-6">Made By Shubhank</h6>
                <br></br><br></br>
            </div>


            <div className= "container1 col-md-6 col-sm-8">
          

            <p className="para1">You can login from here</p>


            
                    <Link to="/login" type="button" className="btn btn-outline-success me-2">Login</Link>
               
                    <Link to="/register" className="btn btn-outline-danger">Sign-up</Link>
                        
                       
                        
</div>
          
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>


</>
                        )
}

                        export default Digicart;