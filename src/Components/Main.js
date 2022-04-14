import React from 'react';
import { Link } from 'react-router-dom';

export const Main = () => {
    return (
        <div>
            <div className="container">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className=" col-lg-5 my-4 mx-auto" align="center">
                                <div className="text-center">
                                    <h1 className="large text-gray-900 mb-4">Welcome to the portal!</h1>
                                </div>
                                <Link to="/student-login" className="d-none d-lg-inline-block btn btn-lg btn-primary shadow-sm"><i
                                    className="fas fa-download fa-sm text-white-50"></i>Student Login</Link>
                                <Link to="/admin-login" className="d-none d-lg-inline-block btn btn-lg btn-primary shadow-sm"><i
                                    className="fas fa-download fa-sm text-white-50"></i>Admin Login</Link>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="medium">New Student?<Link to="/register-student"> Register now.</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
