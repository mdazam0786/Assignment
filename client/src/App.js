import React, { useState } from "react";
import Transactions from "./components/Transactions";
import Statistics from "./components/Statistics";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import "./App.css";

const App = () => {
  const [month, setMonth] = useState(new Date()); // Initialize with a Date object

  // Format the selected date as 'dd MMMM yyyy'
  const formattedMonth = format(month, "dd MMMM yyyy");

  return (
    <div className="app-container">
      <h1
        className="dashboard-title"
        style={{ display: "flex", justifyContent: "center" }}
      >
        Transaction Dashboard
      </h1>
      <div className="month-picker">
        <label htmlFor="month">Select Date: </label>
        <DatePicker
          selected={month}
          onChange={(date) => setMonth(date)} // Update state with selected date
          dateFormat="dd MMMM yyyy" // Set the display format in the input
          className="month-input"
        />
      </div>
      <div className="charts-container">
        <Transactions month={formattedMonth} />
        <Statistics month={formattedMonth} />
        <BarChart month={formattedMonth} />
        <PieChart month={formattedMonth} />
      </div>
    </div>
  );
};

export default App;
