import React, { useState } from "react";
import apiClient from "../api/apiClient";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await apiClient.post("/users/login", {
                email,
                password,
            });

            console.log(response.data);
            alert("Login successful!");
        } catch (error) {
            console.error("Login failed:", error.response?.data);
            alert("Login failed. Please check your credentials.");
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
