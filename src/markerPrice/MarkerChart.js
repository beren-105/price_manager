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
            width={320}
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
            <Bar dataKey="최저가" fill="#c4b5fd" />
            <Bar dataKey="평균가" fill="#a855f7" />
            <Bar dataKey="최고가" fill="#f9a8d4" />
        </BarChart>
    )
}