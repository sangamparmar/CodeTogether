import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

const Register: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showOtpVerification, setShowOtpVerification] = useState<boolean>(false);
    const [otp, setOtp] = useState<string>('');
    const [otpError, setOtpError] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const result = await axios.post(`${BACKEND_URL}/register`, { username, name, email, password });

            if (result.data.needsVerification) {
                setShowOtpVerification(true);
                setOtpError('');
                alert(result.data.message);
            } else if (result.data === "Already registered") {
                alert("E-mail already registered! Please login to proceed.");
                navigate('/login');
            } else {
                alert("Registered successfully! Please login to proceed.");
                navigate('/login');
            }
        } catch (error: any) {
            console.error('Registration error:', error);
            if (error.response && error.response.data) {
                alert(error.response.data.message || "An error occurred during registration.");
            } else {
                alert("An error occurred during registration. Please try again.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyOtp = async (event: FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        setOtpError('');

        try {
            const result = await axios.post(`${BACKEND_URL}/verify-otp`, { email, otp });
            alert(result.data.message);
            navigate('/login');
        } catch (error: any) {
            console.error('OTP verification error:', error);
            if (error.response && error.response.data) {
                setOtpError(error.response.data.message || "Invalid OTP. Please try again.");
            } else {
                setOtpError("An error occurred during verification. Please try again.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleResendOtp = async () => {
        setIsLoading(true);
        try {
            const result = await axios.post(`${BACKEND_URL}/resend-otp`, { email });
            alert(result.data.message);
        } catch (error: any) {
            console.error('Resend OTP error:', error);
            if (error.response && error.response.data) {
                alert(error.response.data.message || "Failed to resend OTP.");
            } else {
                alert("Failed to resend OTP. Please try again.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-gradient text-white">
            <div className="card shadow-lg rounded-lg p-5" style={{ width: '400px', maxWidth: '90%' }}>
                {!showOtpVerification ? (
                    <>
                        <h2 className="text-center mb-4 text-primary fw-bold">Create Account</h2>
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <input type="hidden" name="username" style={{ display: 'none' }} />
                            <input type="hidden" name="password" style={{ display: 'none' }} />
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
                                    name="username"
                                    autoComplete="username"
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
                                        name="new-password"
                                        autoComplete="new-password"
                                    />
                                </div>
                            </div>
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
                                    name="custom-username"
                                    autoComplete="off"
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
                                        autoComplete="off"
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
                    </>
                ) : (
                    <>
                        <h2 className="text-center mb-4 text-primary fw-bold">Verify Your Email</h2>
                        <p className="text-muted text-center">Please enter the 6-digit OTP sent to<br /><strong>{email}</strong></p>
                        <form onSubmit={handleVerifyOtp}>
                            <div className="mb-4">
                                <label htmlFor="otp" className="form-label text-muted">OTP Code</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i className="bi bi-shield-lock-fill"></i></span>
                                    <input
                                        type="text"
                                        id="otp"
                                        placeholder="Enter 6-digit OTP"
                                        className="form-control"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        required
                                    />
                                </div>
                                {otpError && <div className="text-danger small mt-1">{otpError}</div>}
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary w-100 mb-3 py-2"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        Verifying...
                                    </>
                                ) : (
                                    "Verify OTP"
                                )}
                            </button>
                        </form>
                        <div className="d-flex justify-content-between align-items-center mt-2">
                            <button 
                                className="btn btn-link text-decoration-none ps-0" 
                                onClick={handleResendOtp}
                                disabled={isLoading}
                            >
                                Resend OTP
                            </button>
                            <button 
                                className="btn btn-link text-decoration-none" 
                                onClick={() => setShowOtpVerification(false)}
                            >
                                Back
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Register;

