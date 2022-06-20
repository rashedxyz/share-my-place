import React from "react";
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";

// page components
import Users from "./user/pages/Users";
import Places from "./place/pages/Places";

function App() {
  return (
    <Router>
      <Routes> {/* if not used, app will traverse to every route whether matched or not */}
        <Route path="/" element={<Users />} exact /> {/* component will not load if the path is not matched exactly */}
        <Route path="/places/new" element={<Places />} exact />
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirect to the root path if not matched with root path */}
      </Routes>
    </Router>
  );
}

export default App;
