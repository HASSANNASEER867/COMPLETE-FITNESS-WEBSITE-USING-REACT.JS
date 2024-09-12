import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-bold">
                    <Link to="/">FITNESS LEGENDS</Link>
                </div>
                <nav className="space-x-4">
                    <Link to="/" className="text-gray-300 hover:text-white">
                        Home
                    </Link>
                    <Link to="/Offers" className="text-gray-300 hover:text-white">
                        Services
                    </Link>
                    <Link to="/Login" className="text-gray-300 hover:text-white">
                        Login
                    </Link>
                    <Link to="/Signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Sign Up
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
