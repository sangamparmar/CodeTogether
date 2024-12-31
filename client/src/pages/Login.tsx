import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { useState, FormEvent } from 'react';
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
      const result = await axios.post('http://localhost:3000/login', { email, password });

      if (result.data === "Invalid credentials") {
        alert("Invalid email or password. Please try again.");
      } else {
        alert("Login successful!");
        navigate('/homepage'); // Navigate to the dashboard or another page after successful login
      }
    } catch (error) {
      console.error('Login error:', error);
      alert("An error occurred during login. Please try again.");
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

