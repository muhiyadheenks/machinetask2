// Question 3:
// 1. Create a simple form with inputs for name, email, and password.
// 2. Add validation rules:
// ○ Name must be at least 3 characters
// ○ Email must be valid
// ○ Password must be at least 6 characters
// 3. Show error messages below each field and prevent form submission if validation fails

import React, { useState } from 'react'

function Task3() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [error, setError] = useState({});
    const [user, setUser] = useState([])
    console.log('form', form);
    console.log('user', user);
    console.log('error', error);



    const handleChange = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value })
        console.log('tar', e.target.name);

    }
    const validation = () => {
        const errors = {};
        const { name, email, password } = form;

        if (!name) {
            errors.name = "Name is required"
        } else if (name.length < 3) {
            errors.name = "must 3 characters"
        }
        if (!email) {
            errors.email = "email is required"
        } else if (!/^\S+@\S+\.\S+/.test(email)) {
            errors.email = "invalid email"
        }
        if (!password) {
            errors.password = "password is required"
        } else if (password.length < 6) {
            errors.password = "must 6 charecters"
        }
        return errors
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const validationError = validation()
        if (Object.keys(validationError).length > 0) {
            setError(validationError)
            return
        }
        setUser(form)
        setError({})
        setForm({
            name: "",
            email: "",
            password: ""
        })
    }
    return (
        <div >
            <h1>FORM</h1>
            <p style={{ color: 'red', fontSize: "12px" }}>{error.all}</p>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <p style={{ color: 'red', fontSize: "12px" }}>{error.name}</p>
                <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder="type your name"
                    style={{ border: error.name ? "1px solid red" : "1px solid black" }}

                /><br /><br />



                <label>E-mail</label>
                <p style={{ color: 'red', fontSize: "12px" }}>{error.email}</p>
                <input
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder="type your email"
                    style={{ border: error.email ? "1px solid red" : "1px solid black" }}


                /><br /><br />



                <label>Password</label>
                <p style={{ color: 'red', fontSize: "12px" }}>{error.password}</p>
                <input
                    type='password'
                    name='password'
                    value={form.password}
                    onChange={handleChange}
                    placeholder="type your password"
                    style={{ border: error.password ? "1px solid red" : "1px solid black" }}

                /><br /><br />


                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Task3
