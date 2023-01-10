import { Bar } from "react-chartjs-2";
import { month } from "../date";
import { calculateColor } from '../calculateColor'
import "./App.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function GraphMonthly({
  day,
  selectedMonth,
  MONTH,
  currentMonth,
  selectedMonthData,
  setMonthlyViewSelectedStepCount,
  setMonthlyViewSelectedIndex,
  setMonthlyViewSelectedColor
}) {
  const MAX = Math.max(...MONTH);
  const MIN = Math.min(...MONTH);
  
  let sum = 0;
  for(let val of MONTH){
    sum += val
  }
  const AVERAGE = Math.floor(sum/MONTH.length)

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `${selectedMonth} 2022 steps`,
      },
    },
    onClick: function (e, element) {
       
        setMonthlyViewSelectedStepCount(MONTH[element[0].index])
        setMonthlyViewSelectedIndex(`${Number(element[0].index) + 1}`)

        let monthlySelectedViewColor = calculateColor(MONTH[element[0].index])

        
        setMonthlyViewSelectedColor(monthlySelectedViewColor)
        
    }
  };

  const data = {
    labels: MONTH.map((month, index) => `${selectedMonthData}/${index + 1}`),
    datasets: [
      {
        label: "Steps walked",
        data: MONTH,
        backgroundColor: MONTH.map((month, index) => {
          let color;

          if (currentMonth === selectedMonthData && index + 1 === day) {
            color = "rgba(153, 102, 255, 1.0)"
               
          } else {
            color = calculateColor(month)
            if (month === MAX) color = "rgba(0, 250, 0, 1.0)";
            if (month === MIN) color = "rgba(255, 99, 132, 1.0)";
          }

           

          return color;
        }),
      },
    ],
  };

  return (
    <div className="graphMonthly">
        <p>Mike averaged <span style={{fontWeight: "bold", color: calculateColor(AVERAGE)}}>{AVERAGE}</span> steps.</p>
      <p>
        The most steps Mike walked this month was:{" "}
        <span
          style={{
            color: `rgba(75, 250, 192, 1.0)`,
          }}
        >
          {MAX}
        </span>
      </p>
      <p>
        The least steps Mike walked this month was:{" "}
        <span
          style={{
            color: "rgba(255, 99, 132, 1.0)",
          }}
        >
          {MIN}
        </span>
      </p>
      <Bar options={options} data={data} />
    </div>
  );
}


export default GraphMonthly;
