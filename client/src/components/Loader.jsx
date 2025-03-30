import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen m-0 bg-gray-100 font-sans">
      <div className="flex flex-col items-center justify-center">
        
        <div className="flex items-center mb-4">
          
          <div className="w-10 h-10 mr-2 relative">
            
            <div className="absolute w-8 h-10 bg-gray-100 rounded border-2 border-blue-500 shadow-md">
              
              <div className="absolute top-2 left-1.5 right-1.5 h-0.5 bg-blue-500 opacity-50"></div>
              <div className="absolute top-4 left-1.5 right-1.5 h-0.5 bg-blue-500 opacity-50"></div>
            </div>
           
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -right-1 -bottom-1 flex items-center justify-center animate-pulse">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </div>

          
          <div className="text-2xl font-semibold text-gray-800 tracking-wider">
            Confi<span className="text-blue-500">Docs</span>
          </div>
        </div>

       
        <div className="w-52 h-1 bg-gray-200 rounded overflow-hidden relative">
          <div 
            className="absolute h-full w-1/2 bg-gradient-to-r from-blue-500 to-blue-600 rounded"
            style={{
              animation: 'loading 1.5s infinite',
              '@keyframes loading': {
                '0%': { left: '-50%' },
                '100%': { left: '100%' }
              }
            }}
          ></div>
        </div>

       
        <div className="mt-2.5 text-sm text-gray-500">
          Securing your documents...
        </div>
      </div>

      
      <style jsx>{`
        @keyframes loading {
          0% {
            left: -50%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;