import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";
import Font from "./components/font/Font";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AdminInterface from "./pages/Interfaces/Admin";
import UserInterface from "./pages/Interfaces/User";
import SignUpPage from "./pages/SingUpPage";
import PostPage from "./pages/PostsPage";
import ProfilePage from "./pages/SettingPages/ProfilePage";
import LandingPage from "./pages/Interfaces/LandingPage";
import ApplyPage from "./pages/ApplyPage";
import CompanyDashboard from "./pages/CompanyDashboard";
import PostsAdmin from "./pages/PostsAdmin";
import UsersDashboard from "./pages/UsersDashboard";

const App: React.FC = () => {
  return (
    <>
      <Font />
      <Routes>
        <Route path="/postsadmin" element={<PostsAdmin />} />
        <Route path="/companies" element={<CompanyDashboard />} />
        <Route path="/users" element={<UsersDashboard />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adminPanel" element={<AdminInterface />} />
        <Route path="/userPanel" element={<UserInterface />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/apply-post" element={<ApplyPage />} />
      </Routes>
    </>
  );
};
export default App;
