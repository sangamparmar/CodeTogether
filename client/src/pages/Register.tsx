import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const result = await axios.post('http://localhost:3000/register', { username, name, email, password });

            if (result.data === "Already registered") {
                alert("E-mail already registered! Please login to proceed.");
            } else {
                alert("Registered successfully! Please login to proceed.");
            }
            navigate('/login');
        } catch (error) {
            console.error('Registration error:', error);
            alert("An error occurred during registration. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-gradient text-white">
            <div className="card shadow-lg rounded-lg p-5" style={{ width: '400px', maxWidth: '90%' }}>
                <h2 className="text-center mb-4 text-primary fw-bold">Create Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label text-muted">Username</label>
                        <div className="input-group">
                            <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
                            <input
                                type="text"
                                id="username"
                                placeholder="Choose a username"
                                className="form-control"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label text-muted">Full Name</label>
                        <div className="input-group">
                            <span className="input-group-text"><i className="bi bi-person-badge-fill"></i></span>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your full name"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3">
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
                                placeholder="Create a password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-100 mb-3 py-2"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Registering...
                            </>
                        ) : (
                            "Create Account"
                        )}
                    </button>
                </form>
                <p className="text-center text-muted mb-0">Already have an account?</p>
                <Link to="/login" className="btn btn-outline-secondary w-100 mt-2">Sign In</Link>
            </div>
        </div>
    );
};

export default Register;

