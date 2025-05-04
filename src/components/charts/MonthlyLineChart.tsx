"use client";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

type Props = {
	data: { month: string; count: number }[];
};

export default function MonthlyLineChart({ data }: Props) {
	return (
		<div className="w-full h-80">
			<h2 className="text-lg font-semibold mb-2">Monthly Policy Creation</h2>
			<ResponsiveContainer>
				<LineChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="count" stroke="#82ca9d" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
