import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container text-center mt-5">
            <h1>Welcome to the Medical App</h1>
            <p>Click the button below to fill out the medical form.</p>
            <Link to="/appointment-form" className="btn btn-primary">Go to Medical Form</Link>
            <br />
            <br />
            <Link to="/login" className="btn btn-primary">Login</Link>
            <br />
            <br />
            <Link to="/summary" className="btn btn-primary">Summary</Link>
        </div>
    );
};

export default Home;
