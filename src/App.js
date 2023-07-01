import React from "react";

// import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RequestListing from "./pages/RequestListing";
import GetClients from "./pages/GetClients";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import BlogCreate from "./pages/BlogCreate";
import Dashboard from "./pages/Dashboard/Dashboard";
import QNA from "./pages/QNA";
import UploadExhibition from "./pages/Dashboard/UploadExhibition";
import MarketPlaceUpload from "./pages/Dashboard/MarketPlaceUpload";
import PhotoPrints from "./pages/PhotoPrints";
import Exhibition from "./pages/Exhibition";
import ShowBlogs from "./pages/ShowBlogs";
import SingleBlogShow from "./pages/SingleBLogShow";

// import components

const App = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="jobpost" element={<RequestListing />} />
        <Route path="getclients" element={<GetClients />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="showblog" element={<ShowBlogs />} />
        <Route path="/showblog/:id" element={<SingleBlogShow />} />
        <Route path="blogs" element={<BlogCreate />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="exhibition" element={<UploadExhibition />} />
        <Route path="marketplace" element={<MarketPlaceUpload />} />
        <Route path="qna" element={<QNA />} />
        <Route path="photoprints" element={<PhotoPrints />} />
        <Route path="showexhibition" element={<Exhibition />} />
      </Routes>
    </Router>
  );
};

export default App;
