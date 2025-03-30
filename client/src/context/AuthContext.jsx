import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebaseconfig";
import { onAuthStateChanged, setPersistence, browserLocalPersistence } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    
    const initializeAuth = async () => {
      await setPersistence(auth, browserLocalPersistence);  
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });

      return () => unsubscribe();
    };

    initializeAuth().catch((error) => {
      console.error("Auth Initialization Error:", error);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-bold">Loading...</div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
