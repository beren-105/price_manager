import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function MarkerChart({ data }) {

    return (
        <BarChart
      width={400}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="marker" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="최저가" fill="#8884d8" />
      <Bar dataKey="평균가" fill="#82ca9d" />
      <Bar dataKey="최고가" fill="#82ca9d" />
    </BarChart>
    )
}