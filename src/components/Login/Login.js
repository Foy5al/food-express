import Button from 'react-bootstrap/Button'
import React from 'react';
import { Google } from 'react-bootstrap-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { singInUsingGoogle, setUser, user, logout, setIsLoading, setError } = useAuth();

    const history = useNavigate();
    const location = useLocation();
    const redirect_url = location.state?.from || '/';


    const loginWithGoogle = () => {
        singInUsingGoogle()
            .then((result) => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
                history.push(redirect_url);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div className='container-fluid min-vh-100'>
            {!user?.email ? <div className='container w-50'>
                <form>
                    <h3>Sign In</h3>
                    <div className="mb-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                        />
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form >
                <div className="mb-3">
                    <div className="d-flex flex-column mx-auto">
                        <p className='text-center'>or</p>
                        <div className='text-center'>
                            <button onClick={loginWithGoogle} className='btn btn-outline-primary'> <Google /></button>
                        </div>
                    </div>
                </div>
            </div > : <div className="container py-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col col-lg-6 mb-4 mb-lg-0">
                        <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                            <div className="row g-0">
                                <div className="col-md-4 gradient-custom text-center text-white"
                                    style={{ borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem" }}>
                                    <img src={user?.photoURL || 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp'}
                                        alt="Avatar" className="img-fluid my-5" style={{ width: "80px" }} />
                                    <h5>Marie Horwitz</h5>
                                    <p>Web Designer</p>
                                    <i className="far fa-edit mb-5"></i>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body p-4">
                                        <h6>Information</h6>
                                        <hr className="mt-0 mb-4" />
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">
                                                <h6>Email</h6>
                                                <p className="text-muted">{user?.email}</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Phone</h6>
                                                <p className="text-muted">123 456 789</p>
                                            </div>
                                        </div>
                                        <h6>Address</h6>
                                        <hr className="mt-0 mb-4" />
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">
                                                <h6>Recent</h6>
                                                <p className="text-muted">Lorem ipsum</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Most Viewed</h6>
                                                <p className="text-muted">Dolor sit amet</p>
                                            </div>
                                            <Button onClick={logout} variant="danger">Logout</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>

    );
};

export default Login;