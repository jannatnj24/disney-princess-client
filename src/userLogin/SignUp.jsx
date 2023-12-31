import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthPovider/AuthPovider';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


const SignUp = () => {
    const [error, setError] = useState('');

    const { createUser } = useContext(AuthContext);
    const HandelSignUP = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
        Swal.fire('Hurrah', ' Create account successfully', 'success');
        setError('')
        if (password.length < 6) {
            setError('please set password up to six character')
            return
        }

        createUser(email, password)
            .then(result => {

                const createdUser = result.user;
                console.log(createdUser);
               
            })
            .catch(error => {
                console.log(error);
                setError('wrong input please input valid data');
            });
    }

    return (
        <div>
            <Helmet>
                <title>Disney-World | signUp</title>
            </Helmet>
            <div className="hero min-h-screen bg-rose-100">
                <div className="hero-content ">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-lime-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold"> Please Sign Up</h1>
                            <form onSubmit={HandelSignUP}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo url</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Enter photo url" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder=" Enter email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-fuchsia-400 hover:bg-rose-200 text-black" type="submit" value="Create Account" />
                                </div>
                            </form>
                            <p className='my-4 text-center'> Already Have an Account? <Link className='text-fuchsia-600 font-bold' to="/login">Login</Link> </p>
                            <div>
                                <p className=' text-black  fw-bold'> <small>{error}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;