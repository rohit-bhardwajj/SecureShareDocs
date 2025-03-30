const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Securesharedocs. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-2">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  