import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Resources from "../Pages/Resources/Resources";
import Notes from "../Pages/Notes/Notes";
import Shared from "../Pages/Shared/Shared";
import Community from "../Pages/Community/Community";
import Profile from "../Pages/Profile/Profile";
import AllDiscussions from "../Pages/Community/AllDiscussions";
import AddResources from "../Pages/Resources/AddResources";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="resources" element={<Resources />} />
        <Route path="notes" element={<Notes />} />
        <Route path="shared" element={<Shared />} />
        <Route path="community" element={<Community />} />
        <Route path="profile" element={<Profile />} />
        <Route path="AllDiscussions" element={<AllDiscussions />} />
        <Route path="AddResources" element={<AddResources/>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
