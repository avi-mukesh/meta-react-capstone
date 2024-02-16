import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import HomePage from "./Components/HomePage";
import ReservationsPage from "./Components/ReservationsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="reservations" element={<ReservationsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
