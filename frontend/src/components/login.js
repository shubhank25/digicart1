import "./login.css";
import { useState } from 'react';
import app_config from '../config';
import Swal from 'sweetalert2';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const url = app_config.api_url;

    const submitForm = () => {

        console.log(email, password);

        fetch(url + '/user/getbyemail/' + email)
            .then(res => res.json())
            .then((data) => {
                console.log(data);

                if (data) {
                    if (data.password == password) {
                        console.log('login success');
                        Swal.fire({
                            icon: 'success',
                            title: 'Login Success'
                        })
                        sessionStorage.setItem('user', JSON.stringify(data));
                        fetch(url+'/cart/getbyuser/'+data._id)
                        .then(res => res.json())
                        .then(data => {
                            sessionStorage.setItem('cart', JSON.stringify(data));
                            console.log(data);

                        })
                        window.location.replace('/home');
                
                        
                    // else if(data.password !== password){

                    //     console.log('Your email is not register in our database');
            
                    //     Swal.fire({
                            
                    //         icon: 'error',
                    //         title: 'Your email is not register in our database'
                    //     })
                    //     sessionStorage.setItem('user', JSON.stringify(data));
                    //     window.location.replace('/register');
                    
                    
                    }  else if(data.password !== password){

                    console.log('Your password is incorrect');
        
                    Swal.fire({
                        
                        icon: 'error',
                        title: 'Incorrect Password'
                    })

                
                
            } else {
                    console.log('user not found');
                }

                }
            })
        

    }

    return (
        <div className="col-md-2 mx-auto mt-5">
            <div className="my-card mt-5" style={{ height: '55vh' }}>
                <h3 className="title">Login Here</h3>
                <hr />

                <label htmlFor="">Email</label>
                <input className="form-control" autoFocus type="text" onChange={(e) => { setEmail(e.target.value)  }} />

                <label htmlFor="">Password</label>
                <input className="form-control" type="password" onChange={(e) => { setPassword(e.target.value) }} />

                <button className=" button_submit1 btn btn-outline-success w-50 mt-5" onClick={submitForm} >Login</button>


            </div>
        </div>
    )
}

export default Login;