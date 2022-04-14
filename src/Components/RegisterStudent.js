import React from 'react'

export default function RegisterStudent({registerStudent}) {
  return (
    <div className="container">
    <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
            <div className="row">
                <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                <div className="col-lg-7">
                    <div className="p-5">
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Student Registration</h1>
                        </div>
                        <form className="user" action="#" method="post" autoComplete="off">
                            <div className="form-group">
                                <input type="text" className="form-control form-control-user" id="studentName"
                                       placeholder="Student Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                       placeholder="Email Address" />
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input type="text" className="form-control form-control-user"
                                           id="mobileNo" placeholder="Mobile no." />
                                </div>
                                <div className="col-sm-6">
                                    <input type="password" className="form-control form-control-user"
                                           id="password" placeholder="Password" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input type="text" className="form-control form-control-user" id="city"
                                           placeholder="City" />
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control form-control-user" id="state"
                                           placeholder="State" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <input type="text" className="form-control form-control-user" id="country"
                                           placeholder="Country" />
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control form-control-user" id="zip"
                                           placeholder="Zipcode" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <button type="submit" className="btn btn-primary btn-user btn-block">Register</button>
                                </div>
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <button type="reset" className="btn btn-primary btn-user btn-block">Reset</button>
                                </div>
                            </div>
                        </form>
                        <hr/>
                        <div className="text-center">
                            <a className="medium" href="/index">Already have an account? Login!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
  )
}
