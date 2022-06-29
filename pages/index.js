
import React, { useState } from 'react'
import LoginForm from '../components/LoginForm';

export default function Home() {
    //login teste, precisa linkar com o banco de dados
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({ name: "", email: "" })
    const [erro, setError] = useState("");

    const Login = details => {
        console.log(details);
    }

    const Logout = () => {
        console.log("Logout");
    }

    return (
        <div className="App">
            {(user.email != "") ? (<div className="welcome">
                <h2>Welcome, <span>{user.name}</span></h2>
                <button>Logout</button>
            </div>
            ) : (
                <LoginForm />
            )}
        </div>
    )
}
