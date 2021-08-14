import "./digicart.css";
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import Marquee from "react-fast-marquee";


const Digicart = () => {


    return (
        <>


            <Marquee className="marquee">
                WELCOME TO DIGICART : ONLINE SHOP FOR MOBILE AND MOBILE ACCESSORIES
            </Marquee>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://photos5.appleinsider.com/gallery/38573-73427-iPhone-12-Green-and-IPhone-12-Pro-Blue-xl.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>New Apple iPhone 12 Pro (128GB)</h3>
                        <p>₹1,09,650.00,6.1-inch (15.5 cm diagonal) Super Retina XDR display
                            Ceramic Shield, tougher than any smartphone glass
                            A14 Bionic chip, the fastest chip ever in a smartphone
                            Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 4x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.prameyanews.com/wp-content/uploads/2020/10/akrales_190913_3666_0391.21.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>New Apple iPhone 11 (128GB)</h3>
                        <p>6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display
                            Water and dust resistant (2 meters for up to 30 minutes, IP68)
                            Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://fdn.gsmarena.com/imgroot/news/20/12/iphone-13-on-schedule/-1200w5/gsmarena_000.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>New Apple iPhone 12 (128GB) - Blue </h3>
                        <p>6.1-inch (15.5 cm diagonal) Super Retina XDR display
                            Ceramic Shield, tougher than any smartphone glass
                            A14 Bionic chip, the fastest chip ever in a smartphone
                            Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording
                            12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording
                            Industry-leading IP68 water resistance</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



            <div class="container">

                <div class="row">
                    <div class="col-sm">
                        <br></br>
                        <br></br>
                        <h4 className="homepage-text col-md-12 col-sm-8"> Digicart : </h4>

                        &nbsp;
                        <p className="home_text ">Hey There! <br></br> Welcome To My Project. This Project is all about a basic Shopping Cart, where you can check items and store them. We can also check the Price of the products and read description. The shopping cart project needs to create the shopping cart system to organize the products record and the other information about the customers. How customers can save products from website can be recognized from their username and password.</p>

                        <br></br>

                        <h6 className=" home_text2">Made By Shubhank</h6>
                        <br></br><br></br>
                    </div>
                    <div class="col-md">
                        <div className="container1">


                            <p className="para1">You can login from here</p>



                            <Link to="/login" type="button" className="button11 btn btn-outline-success me-2">Login</Link>

                            <Link to="/register" className="button11 btn btn-outline-danger">Sign-up</Link>
                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}

export default Digicart;