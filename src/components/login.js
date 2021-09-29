import React from 'react';

const Login = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let userName = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        console.log(userName, password);
    };
    return (
        <div>
            <div>
                <h1>Log in to your Account 🔐</h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='userName'>User Name</label>
                        <input
                            type='text'
                            id='userName'
                            placeholder='Your User Name'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Your Password</label>
                        <input
                            type='password'
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>
                    <div>
                        <button>Enter</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;