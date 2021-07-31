import { useState } from 'react';
import app_config from '../config';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const url = app_config.api_url;

    const submitForm = () => {

        console.log(email, password);

        fetch(url + '/api/user/getbyemail/' + email)
            .then(res => res.json())
            .then((data) => {
                console.log(data);

                if (data) {
                    if (data.password == password) {
                        console.log('login success');


                    } else {
                        console.log('password incorrect');
                    }
                } else {
                    console.log('user not found');
                }

            })

    }

    return (
        <div className="col-md-2 mx-auto mt-5">
            <div className="my-card mt-5" style={{ height: '70vh' }}>
                <h3 className="title">Login Here</h3>
                <hr />

                <label htmlFor="">Email</label>
                <input className="form-control" autoFocus type="text" onChange={(e) => { setEmail(e.target.value) }} />

                <label htmlFor="">Password</label>
                <input className="form-control" type="password" onChange={(e) => { setPassword(e.target.value) }} />

                <button className="btn btn-outline-success mt-5" onClick={submitForm}>Login</button>


            </div>
        </div>
    )
}

export default Login;