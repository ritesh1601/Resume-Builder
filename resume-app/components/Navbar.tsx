import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-[#0E5484] to-[#0F4539] px-6 py-4 shadow-md flex items-center justify-between">
      <div className="text-white text-2xl font-bold tracking-tight flex items-center gap-2">
        <span role="img" aria-label="logo">📄</span>
        Resume Builder
      </div>
      <div className="flex items-center gap-6">
        {/* Placeholder for future nav links */}
        <a href="#" className="text-white text-sm font-medium hover:underline transition">Home</a>
        <a href="#" className="text-white text-sm font-medium hover:underline transition">About</a>
        <a href="#" className="text-white text-sm font-medium hover:underline transition">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
