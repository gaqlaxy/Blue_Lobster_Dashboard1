"use client";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

type Props = {
	data: { status: string; count: number }[];
};

export default function StatusBarChart({ data }: Props) {
	return (
		<div className="w-full h-80">
			<h2 className="text-lg font-semibold mb-2">Status Breakdown</h2>
			<ResponsiveContainer>
				<BarChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="status" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="count" fill="#8884d8" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
