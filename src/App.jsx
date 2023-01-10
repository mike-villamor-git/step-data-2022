import { useState } from "react";
import "./App.css";
import { INDIVIDUAL_MONTHS, DAILY, MONTHLY } from "../stepCount2022";
import { currentDate, formattedDate, day, month, dateToday } from "../date";
import GraphAnnual from "./GraphAnnual";
import GraphMonthly from "./GraphMonthly";

function App() {
  const [steps, setSteps] = useState(DAILY[formattedDate]);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedMonthData, setSelectedMonthData] = useState(null);

  const [monthlyViewSelectedIndex, setMonthlyViewSelectedIndex] = useState(null)
  const [monthlyViewSelectedStepCount, setMonthlyViewSelectedStepCount] = useState(null)
  const [monthlyViewSelectedColor, setMonthlyViewSelectedColor] = useState(null)
  

  function handleBackClick() {
    setSelectedMonth(null);
    setSelectedMonthData(null);
    setMonthlyViewSelectedIndex(null);
    setMonthlyViewSelectedStepCount(null);
    setMonthlyViewSelectedColor(null)
  }

  return (
    <div className="App">
      <h1>Hello, today is {dateToday}</h1>
      {monthlyViewSelectedStepCount === null ? <h2>
        On this day in 2022, Mike walked{" "}
        <span style={{ color: "rgba(153, 102, 255, 1.0)" }}>{steps} </span>steps
      </h2> : <h2>
        On {`${selectedMonthData}/${monthlyViewSelectedIndex}`} in 2022, Mike walked{" "}
        <span style={{ color: monthlyViewSelectedColor }}>{monthlyViewSelectedStepCount} </span>steps
      </h2>}
      {selectedMonth === null ? (
        <h3>Click a month to view its details</h3>
      ) : (
        <h3>{selectedMonth}:</h3>
      )}
      {selectedMonthData === null ? (
        <GraphAnnual
          setSelectedMonth={setSelectedMonth}
          setSelectedMonthData={setSelectedMonthData}
          MONTHLY={MONTHLY}
        />
      ) : (
        <GraphMonthly
          selectedMonthData={selectedMonthData}
          day={day}
          currentMonth={month}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          MONTH={INDIVIDUAL_MONTHS[selectedMonthData]}
          setMonthlyViewSelectedStepCount={setMonthlyViewSelectedStepCount}
          setMonthlyViewSelectedIndex={setMonthlyViewSelectedIndex}
          setMonthlyViewSelectedColor={setMonthlyViewSelectedColor}
          
        />
      )}
      {selectedMonthData === null ? null : (
        <button onClick={handleBackClick}>Back</button>
      )}
    </div>
  );
}

export default App;
