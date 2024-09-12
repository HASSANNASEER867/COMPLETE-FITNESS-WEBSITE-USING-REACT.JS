
import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 bg-black text-white">
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-red-500">Get Fit, Stay Strong</h1>
        <p className="mt-2 text-lg text-white">
          Transform your life with our top-notch fitness programs designed for all levels.
        </p>
      </div>
      <div className="flex-1">
        <img
          src="https://images.unsplash.com/photo-1517963628607-235ccdd5476c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Fitness"
          className="w-full h-auto object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
