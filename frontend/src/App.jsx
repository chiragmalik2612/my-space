import { Route, Routes, Outlet } from "react-router-dom";
import Divider from "@mui/material/Divider";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import MyTasks from "./pages/MyTasks/MyTasks";
import MyMusic from "./pages/MyMusic/MyMusic";
import MyExpense from "./pages/MyExpense/MyExpense";
import MyMovies from "./pages/MyMovies/MyMovies";
import MyGallery from "./pages/MyGallery/MyGallery";
import MyBooks from "./pages/MyBooks/MyBooks";
import Footer from "./components/Footer";
import { MyTasksContextProvider } from "./context/MyTasksContext";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/tasks"
          element={
            <MyTasksContextProvider>
              <MyTasks />
            </MyTasksContextProvider>
          }
        />
        <Route path="/music" element={<MyMusic />} />
        <Route path="/expense" element={<MyExpense />} />
        <Route path="/movies" element={<MyMovies />} />
        <Route path="/gallery" element={<MyGallery />} />
        <Route path="/books" element={<MyBooks />} />
      </Routes>
      <Divider variant="middle" />
      <Footer />
    </>
  );
}

export default App;
