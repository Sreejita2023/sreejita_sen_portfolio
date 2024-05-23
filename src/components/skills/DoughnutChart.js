import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
export default function DoughnutPie() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    console.log("hello", chartRef.current);
    const myChartRef = chartRef.current.getContext("2d");
    async function fetchData() {
      try {
        const response = await fetch(
          "https://leetcode-api-faisalshohag.vercel.app/sreejita12"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const newData = await response.json();
        setData(newData);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
    chartInstance.current = new Chart(myChartRef, {
      type: "doughnut",
      data: {
        labels: ["Easy", "Medium", "Hard"],
        datasets: [
          {
            label: "Questions",
            data: [data.easySolved, data.mediumSolved, data.hardSolved],
            backgroundColor: ["#5928E5", "#C19DF9", "#FFD9D9"],
            hoverOffset: 4,
          },
        ],
      },
    });
    setLoading(false);
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);
  return (
    <div>
      {loading ? (
        <p>Loading</p>
      ) : (
        <canvas ref={chartRef} style={{ width: "300px", height: "200px" }} />
      )}
    </div>
  );
}
