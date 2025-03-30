import { Link } from "react-router-dom";
import { FaHome, FaUserCircle, FaFileUpload, FaFileAlt } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
       
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <FaHome /> Confidocs
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          <NavItem to="/" label="Home" icon={<FaHome />} />
          <NavItem to="/upload" label="Upload" icon={<FaFileUpload />} />
          <NavItem to="/documents" label="Documents" icon={<FaFileAlt />} />
          <NavItem to="/profile" label="Profile" icon={<FaUserCircle />} />
        </nav>

     {/* mobile menu */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-blue-500 transition-all duration-300 ease-in-out">
          <Link
            to="/"
            className="block py-3 px-4 hover:bg-blue-400 transition-all flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <FaHome /> Home
          </Link>
          <Link
            to="/upload"
            className="block py-3 px-4 hover:bg-blue-400 transition-all flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <FaFileUpload /> Upload
          </Link>
          <Link
            to="/documents"
            className="block py-3 px-4 hover:bg-blue-400 transition-all flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <FaFileAlt /> Documents
          </Link>
          <Link
            to="/profile"
            className="block py-3 px-4 hover:bg-blue-400 transition-all flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <FaUserCircle /> Profile
          </Link>
        </div>
      )}
    </header>
  );
};


const NavItem = ({ to, label, icon }) => {
  return (
    <Link
      to={to}
      className="relative group flex items-center gap-2 text-lg font-medium hover:text-gray-200 transition"
    >
      {icon}
      <span className="relative">
        {label}
        
        <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gray-300 opacity-40 group-hover:w-3/5 group-hover:left-1/5 transition-all duration-300 ease-in-out"></span>
      </span>
    </Link>
  );
};

export default Header;
