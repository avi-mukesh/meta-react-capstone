import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/shared/Layout";
import HomePage from "./components/pages/home/HomePage";
import ReservationsPage from "./components/pages/reservations/ReservationsPage";
import { useEffect, useReducer } from "react";
import { fetchAPI } from "./utils/mockApi";
import ConfirmReservationPage from "./components/pages/reservations/ConfirmReservationPage";
import UnderConstructionPage from "./components/pages/UnderConstructionPage";

export const initializeTimes = () => {
  return fetchAPI(new Date());
};
export const updateTimes = (state, action) => {
  if (action.type === "date_change") {
    const allTimes = initializeTimes();

    console.log(state);
    // const date = new Date(action.date);

    const rnd = Math.floor(Math.random() * (allTimes.length + 1));
    const rndIndices = [];
    for (let i = 0; i < rnd; i++) {
      const rndIndex = Math.floor(Math.random() * allTimes.length);
      if (rndIndices.indexOf(rndIndex) === -1) {
        rndIndices.push(rndIndex);
      } else {
        i--;
      }
    }

    const timesToReturn = [];
    for (let index of rndIndices) {
      timesToReturn.push(allTimes[index]);
    }

    return timesToReturn.sort();
  } else {
    return state;
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  useEffect(() => {
    dispatch({ type: "date_change", date: new Date() });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="reservations"
          element={
            <ReservationsPage
              availableTimes={availableTimes}
              dispatch={dispatch}
            />
          }
        />
        <Route
          path="confirm_reservation"
          element={<ConfirmReservationPage />}
        />
        <Route path="under_construction" element={<UnderConstructionPage />} />
      </Route>
    </Routes>
  );
}

export default App;
