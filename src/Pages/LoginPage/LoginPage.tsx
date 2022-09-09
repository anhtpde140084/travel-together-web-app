import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { callApi } from '../../Config/AxiosCommon';
import { BASE_URL } from '../../Config/Environment';
import { ApplicationState } from '../../Redux';
import { onLogin } from '../../Redux/Actions/LoginAction';
import "./Login.css";
const LoginPage = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [username, setUsername] = useState<String>("");

    const [password, setPassword] = useState<String>("");

    const { userCurrent, error } = useSelector(
        (state: ApplicationState) => state.userReducer
    );

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate('/home')
        }
    }, []);

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    // handle login button
    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            let response = await axios.post(`${BASE_URL}auth/signin`, {
                username,
                password
            });
            if (response.data.success) {
                axios.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${response.data.data.accessToken}`;
                if (response.data.data.accessToken) {
                    let res2 = await axios.get(`${BASE_URL}user/current-user`);
                    if (res2.data.success) {
                        dispatch<any>(onLogin(response.data.data, res2.data.data));
                        navigate('/home')
                    }
                }
            }
        } catch (error) {

        }
    }

    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={handleLogin}>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fa-brands fa-facebook"></i>
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-twitter"></i>
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-linkedin-in"></i>
                                </button>
                            </div>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="text" id="form3Example3" className="form-control form-control-lg" onChange={handleUsername}
                                    placeholder="Enter username" />
                            </div>

                            <div className="form-outline mb-3">
                                <input type="password" id="form3Example4" className="form-control form-control-lg" onChange={handlePassword}
                                    placeholder="Enter password" />
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn btn-primary btn-lg"
                                    style={{
                                        paddingLeft: '2.5rem',
                                        paddingRight: '2.5rem'
                                    }}>Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                    className="link-danger">Register</a></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage