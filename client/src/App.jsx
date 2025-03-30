import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import DocumentUpload from "./components/DocumentUpload";
import DocumentList from "./components/DocumentList";
import Home from "./components/Home";
import Layout from "./components/Layout/Layout";
import { useAuth } from "./context/AuthContext";  
import Profile from "./pages/Profile";

const App = () => {
  const { user } = useAuth();  

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route 
            path="/upload" 
            element={user ? <DocumentUpload /> : <Auth />} 
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/documents" element={<DocumentList />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
