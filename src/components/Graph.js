import React from "react";

import {
  BarChart,
  Bar,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function Graph() {
  const data = [
    { name: "월", 시간: 7 },
    { name: "화", 시간: 5 },
    { name: "수", 시간: 2 },
    { name: "목", 시간: 2 },
    { name: "금", 시간: 7 },
    { name: "토", 시간: 5 },
    { name: "일", 시간: 7 },
  ];
  var result = 1;
  return (
    <div className="App">
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="blue" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="시간"
          fill="url(#colorPv)"
          style={{ borderRadius: "10px" }}
          barSize={30}
        />
      </BarChart>
    </div>
  );
}

export default Graph;
