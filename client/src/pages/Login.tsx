import React, { useState, FormEvent } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const result = await axios.post('https://codetogether-mxp7.onrender.com/login', { email, password });

      if (result.data.message === "Login successful") {
        // Save the token to localStorage for authentication
        localStorage.setItem('authToken', result.data.token);
        localStorage.setItem('username', email.split('@')[0]); // Use part of email as username if needed
        
        // Success notification
        alert("Login successful!");
        
        // Navigate to the homepage
        navigate('/homepage');
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } catch (error: any) {
      console.error('Login error:', error);
      
      if (error.response && error.response.data) {
        // Show specific error message from server if available
        alert(error.response.data.message || "An error occurred during login. Please try again.");
      } else {
        alert("An error occurred during login. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-gradient">
      <motion.div 
        className="card shadow-lg rounded-lg p-5"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ width: '400px', maxWidth: '90%' }}
      >
        <h2 className="text-center mb-4 text-primary fw-bold">Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="form-label text-muted">Email Address</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label text-muted">Password</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <motion.button
            type="submit"
            className="btn btn-primary w-100 mb-3 py-2"
            disabled={isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLoading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Logging in...
              </>
            ) : (
              "Log In"
            )}
          </motion.button>
        </form>
        <p className="text-center text-muted mb-0">Don't have an account?</p>
        <Link to="/register" className="btn btn-outline-secondary w-100 mt-2">Create Account</Link>
      </motion.div>
    </div>
  );
};

export default Login;
