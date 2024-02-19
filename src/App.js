import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import HomePage from "./Components/HomePage";
import ReservationsPage from "./Components/ReservationsPage";
import { useEffect, useReducer } from "react";
import { fetchAPI } from "./utils/mockApi";

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

function App() {
  const updateTimes = (state, action) => {
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
    }
  };

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
      </Route>
    </Routes>
  );
}

export default App;
