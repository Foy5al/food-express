import React from 'react';
import { Google } from 'react-bootstrap-icons';
import { unstable_HistoryRouter, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { singInUsingGoogle, setUser } = useAuth();

    const history = unstable_HistoryRouter();
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
                // setError(errorMessage);
            })
        // .finally(() => setIsLoading(false));
    }
    return (
        <div className='container w-50'>
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
        </div >
    );
};

export default Login;