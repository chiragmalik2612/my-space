import {  Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext'
import Divider from "@mui/material/Divider";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyTasks from "./pages/MyTasks/MyTasks";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const { user } = useAuthContext()

  return (
    <>
      <div className="App">
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
          </Routes>
        </div>
    </div>
      <Divider variant="middle" />
      <Footer />
    </>
  );
}

export default App;
