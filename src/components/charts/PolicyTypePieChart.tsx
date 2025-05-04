"use client";
import {
	PieChart,
	Pie,
	Cell,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#00C49F"];

type Props = {
	data: { policy_type: string; count: number }[];
};

export default function PolicyTypePieChart({ data }: Props) {
	return (
		<div className="w-full h-80">
			<h2 className="text-lg font-semibold mb-2">Policy Type Distribution</h2>
			<ResponsiveContainer>
				<PieChart>
					<Pie
						dataKey="count"
						nameKey="policy_type"
						data={data}
						cx="50%"
						cy="50%"
						outerRadius={80}
						label
					>
						{data.map((_, index) => (
							<Cell key={index} fill={COLORS[index % COLORS.length]} />
						))}
					</Pie>
					<Tooltip />
					<Legend />
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
}
