import React from 'react'

export default function AdminLogin({adminLogin}) {
    return (
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-7 mx-auto" align="center">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Admin Login</h1>
                                </div>
                                <form className="user" action="#" method="post" autoComplete="off">
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-user" id="adminName"
                                            placeholder="Admin Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control form-control-user"
                                            id="password" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-user btn-block">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
