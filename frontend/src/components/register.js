import './register.css';

const Register = () => {

    return (
        <div className="my-card">
            <h3 className="title">Register Here</h3>
            <hr />

            <form>

                <label htmlFor="">Name</label>
                <input className="form-control" autoFocus type="text" placeholder="Your Name"/>
                <label htmlFor="">Date Of Birth</label>
                <input className="form-control" autoFocus type="date" />

                <label htmlFor="">Email</label>
                <input className="form-control" autoFocus type="text" placeholder="Email" />

                <label htmlFor="">Password</label>
                <input className="form-control" type="password" placeholder="Password" />

                <label htmlFor=""> Confirm Password</label>
                <input className="form-control" type="password" placeholder="Confirm Password"  />

                <button className="btn btn-outline-success mt-5">SignUp</button>

            </form>


        </div>
    )
}

export default Register;