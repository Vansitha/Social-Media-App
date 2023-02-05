import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import CreatePost from "./pages/create_post/CreatePost";
import { CssBaseline, CssVarsProvider } from "@mui/joy";

function App() {
  return (
    <CssVarsProvider>
      <CssBaseline></CssBaseline>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/createpost' element={<CreatePost />}></Route>
        </Routes>
      </Router>
    </CssVarsProvider>
  );
}

export default App;
