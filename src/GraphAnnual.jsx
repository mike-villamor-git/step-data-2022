import { Bar } from "react-chartjs-2";
import { month } from "../date";
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

function GraphAnnual({ setSelectedMonth, MONTHLY, setSelectedMonthData }) {
  let labels = Object.keys(MONTHLY).sort((a, b) => a - b);

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "2022 Overview",
      },
    },
    onClick: function (e, element) {
      let selectedMonth = {};
      selectedMonth.raw = element[0].index; //0 if it's january
      selectedMonth.numValue = Number(element[0].index) + 1; //1 if it's january
      selectedMonth.month = months[Number(selectedMonth.raw)];
      if (selectedMonth.numValue < 10)
        selectedMonth.formattedNumValue = `0${selectedMonth.numValue}`; //01 if it's january to match up with the apple health data
      else {
        selectedMonth.formattedNumValue = `${selectedMonth.numValue}`;
      }

      setSelectedMonth(selectedMonth.month);
      setSelectedMonthData(selectedMonth.formattedNumValue);
    },
  };

  const data = {
    labels: months,
    datasets: [
      {
        label: "Steps walked",
        data: labels.map((month) => MONTHLY[month]),
        backgroundColor: labels.map((currMonth) =>
          month === currMonth
            ? "rgba(153, 102, 255, 1.0)"
            : "rgba(53, 162, 235, 0.5)"
        ),
      },
    ],
  };
  return <Bar options={options} data={data} />;
}

export default GraphAnnual;
