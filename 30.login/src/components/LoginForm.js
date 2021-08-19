import React from 'react'

const LoginForm = () => {
    return (
        <div className="card">
            <div className="card-header text-center">
                <h1>Log In</h1>
            </div>
            <div className="card-body p-4">
                <form>
                    <div className="mb-3">
                        <label htmlFor="email">Email:</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password:</label>
                        <input type="paddword" className="form-control" />
                    </div>
                    <p>Not a member? <span className="text-primary click">Register</span></p>
                </form>

            </div>
            
        </div>
    )
}

export default LoginForm
