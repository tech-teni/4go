// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
import Homepage from "./component/pages/Homepage.js";
import LoginPage from "./component/pages/LoginPage";
import NotificationPage from "./component/pages/NoficationPage";
import PostingPage from "./component/pages/PostingPage";
import RegisterPage from "./component/pages/RegisterPage";
import SearchPage from "./component/pages/SearchPage";
import WelcomePage from "./component/pages/WelcomePage";
import ProfilePage from "./component/pages/ProfilePage";
import { Toaster } from "react-hot-toast";

// our main component
function App() {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route exact path="/" element={<WelcomePage />}></Route>

        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/notify" element={<NotificationPage />} />
        <Route path="/posting" element={<PostingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
