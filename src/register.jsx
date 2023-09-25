import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">First name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="First Name" />
            <label htmlFor="name">Last name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Last Name" />
            <label htmlFor="Email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="Email" placeholder="youremail@gmail.com" id="email" name="Email" />
            <label htmlFor="Password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="Password" placeholder="********" id="Password" name="Password" />
            <button type="Submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}