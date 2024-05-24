import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { contestParticipation } from "../../utils/data/leetcodeData";
export default function LinePie() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const ranks=[];
  const contestsName=[];
  contestParticipation.map(item => {
    ranks.push(Math.ceil(item.rating));
    contestsName.push(item.contest.title)
  });
  console.log(ranks);
  useEffect(() => {
    if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      console.log("hello",chartRef.current)
      const myChartRef =chartRef.current.getContext("2d");
      chartInstance.current = new Chart(myChartRef, {
        type: "line",
        data: {
          labels: contestsName,
          datasets: [
            {
                label: 'Leetcode Contest Details',
                data: ranks,
                fill: false,
                borderColor: '#5928E5',
                tension: 0.1,
                backgroundColor:'#A66EFF'
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
      <canvas ref={chartRef} style={{ width: "700px",maxHeight:'400px' }} />
    </div>
  );
}
