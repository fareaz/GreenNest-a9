import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';

const Register = () => {
    // const [success, setSuccess] = useState(false);
    // const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    // const handleRegister = (event) => {
    //     event.preventDefault();
    //     const email = event.target.email.value;
    //     const password = event.target.password.value;
    //     const name = event.target.name.value;
    //     const photo = event.target.photo.value;
    //     console.log('register click', email, password, name, photo)

    //     const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

    //     if (!passwordPattern.test(password)) {
    //         setError('Password must be at least 6 characters long, and include at least one uppercase, one lowercase, and one special character.')
    //         return
    //     }
    //     setError('');
    //     setSuccess(false);

    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then(result => {
    //             console.log('after creation of a new user', result.user);
    //             setSuccess(true);
    //             event.target.reset();

    //             // update user profile
    //             const profile = {
    //                 displayName: name,
    //                 photoURL: photo
    //             }
    //             updateProfile(result.user, profile)
    //                 .then(() => { })
    //                 .catch()

    //         })
    //         .catch(error => {
    //             console.log('error happened', error.message)
    //             setError(error.message);
    //         })

    // }

    const handleTogglePasswordShow = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        {/* <form onSubmit={handleRegister}> */}
                            <form>
                            <fieldset className="fieldset">
                                {/* User name */}
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input" placeholder="Your Name" />
                                {/* User Photo URL */}
                                <label className="label">Photo URL</label>
                                <input type="text" name='photo' className="input" placeholder="Photo URL" />
                                {/* Email */}
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <div className='relative'>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        className="input" placeholder="Password" />
                                    <button
                                        onClick={handleTogglePasswordShow}
                                        className=" btn-xs border-0 top-4 right-3 absolute">
                                        {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                    </button>
                                </div>
                              
                                
                                <button className=" mt-2 w-full btn hover:text-green-900 bg-gradient-to-r from-[#16A34A] to-[#4ADE80] text-white font-bold">Register</button>
                            </fieldset>
                            {/* {
                                success && <p className='text-green-500'>Account created successfully. </p>
                            }
                            {
                                error && <p className='text-red-500'>{error}</p>
                            } */}
                        </form>
                        <p>Already have an account? Please <Link className='text-green-400 underline' to="/auth">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;