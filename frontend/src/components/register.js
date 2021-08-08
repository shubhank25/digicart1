import "./register.css";
import { Formik } from 'formik';
import Swal from 'sweetalert2';
import app_config from '../config';

const Register = () => {

    const url = app_config.api_url;

    const registerForm = {
        name: '',
        email: '',
        password: '',
        age: 0,
    }

    const submitForm = (values) => {
        console.log(values);

        const reqOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
        }

        fetch(url + '/user/add', reqOptions)
            .then((res) => { res.json() })
            .then((data) => { console.log(data) 
            Swal.fire({
                icon : 'success',
                title: 'Signup Success'
            })
            window.location.replace('/login');
        });

    }

    return (
        <div className=" col-md-2 mx-auto mt-5">
            <div class="mycard-1 mt-5" style={{ marginTop: '0rem' }}>
            

                    <Formik initialValues={registerForm} onSubmit={submitForm}>
                        {({
                            handleChange,
                            handleSubmit
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <h2 className="text-center">Register here</h2>
                                <hr />

                                <label>Name</label>
                                <input className="form-control" name="name" onChange={handleChange} required />

                                <label>Email</label>
                                <input type="email" className="form-control" name="email" onChange={handleChange} required/>

                                <label>Password</label>
                                <input type="password" className="form-control" name="password" onChange={handleChange} required />

                                <label>Age</label>
                                <input type="text" className="form-control" name="age" onChange={handleChange} required/>



                                <button type="submit" className=" button_submit2 btn btn-outline-success w-50 mt-5">Submit</button>

                            </form>
                        )}
                    </Formik>

               </div>
               </div>
            
    )
}

export default Register;