import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import {questions} from "../../utils/data/leetcodeData"
export default function DoughnutPie() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  useEffect(() => {
    if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      console.log("hello",chartRef.current)
      const myChartRef =chartRef.current.getContext("2d");
      chartInstance.current = new Chart(myChartRef, {
        type: "doughnut",
        data: {
          labels: ["Easy", "Medium", "Hard"],
          datasets: [
            {
              label: "Questions",
              data: [questions.easy, questions.medium, questions.hard],
              backgroundColor: ["#5928E5", "#C19DF9", "#FFD9D9"],
              hoverOffset: 4,
            },
          ],
        },
      });
      return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
  }, []);
  return (
    <div>
      <canvas ref={chartRef} style={{ width: "300px", height: "200px" }} />
    </div>
  );
}
