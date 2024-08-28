import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/home_page";
import CampusConnectPage from "./pages/projects/campusconnect/campusconnect_page";
import CampusConnectTermAndConditionsPage from "./pages/projects/campusconnect/terms_&_conditions_page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:id" element={<CampusConnectPage />} />
      <Route
        path="/project/campusconnect/terms-of-use-and-privacy-policy"
        element={<CampusConnectTermAndConditionsPage />}
      />
    </Routes>
  );
}

export default App;
