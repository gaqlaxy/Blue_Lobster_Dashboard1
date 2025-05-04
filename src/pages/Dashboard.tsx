"use client";
import { useEffect, useState, useCallback } from "react";
import { supabase } from "../supabaseClient";
import PolicyFilters from "../components/PolicyFilters";
import PolicyTypePieChart from "../components/charts/PolicyTypePieChart";
import StatusBarChart from "../components/charts/StatusBarChart";
import MonthlyLineChart from "../components/charts/MonthlyLineChart";
import { format } from "date-fns";

interface Filters {
	region: string;
	agent: string;
	type: string;
	startDate: string;
	endDate: string;
}

interface PolicyFull {
	id: string;
	policy_number: string;
	policy_type: string;
	coverage_amount: number | null;
	premium_amount: number | null;
	start_date: string | null;
	end_date: string | null;
	status: string | null;
	region: string | null;
	created_at: string;
}

export default function Dashboard() {
	// Summary counts
	const [totalPolicies, setTotalPolicies] = useState(0);
	const [activeCount, setActiveCount] = useState(0);
	const [pendingCount, setPendingCount] = useState(0);
	const [expiredCount, setExpiredCount] = useState(0);

	// Chart data
	const [typeData, setTypeData] = useState<
		{ policy_type: string; count: number }[]
	>([]);
	const [statusData, setStatusData] = useState<
		{ status: string; count: number }[]
	>([]);
	const [monthlyData, setMonthlyData] = useState<
		{ month: string; count: number }[]
	>([]);

	// Full policy list for cards & modal
	const [policiesList, setPoliciesList] = useState<PolicyFull[]>([]);

	// Filters
	const [filters, setFilters] = useState<Filters>({
		region: "",
		agent: "",
		type: "",
		startDate: "",
		endDate: "",
	});

	// Modal state
	const [selectedPolicy, setSelectedPolicy] = useState<PolicyFull | null>(null);

	const loadData = useCallback(async () => {
		// Base query
		let base = supabase
			.from("policies")
			.select(
				`id, policy_number, policy_type, coverage_amount, premium_amount,
       start_date, end_date, status, region, created_at`,
			)
			.order("created_at", { ascending: true });

		// Apply filters
		if (filters.region) base = base.eq("region", filters.region);
		if (filters.agent) base = base.eq("agent_id", filters.agent);
		if (filters.type) base = base.eq("policy_type", filters.type);
		if (filters.startDate) base = base.gte("created_at", filters.startDate);
		if (filters.endDate) base = base.lte("created_at", filters.endDate);

		const { data, error } = await base;
		if (error) return console.error("Error fetching policies", error);

		// Summary
		setTotalPolicies(data!.length);
		setActiveCount(data!.filter((p) => p.status === "Active").length);
		setPendingCount(data!.filter((p) => p.status === "Pending").length);
		setExpiredCount(data!.filter((p) => p.status === "Expired").length);

		// Charts
		const typeCounts = data!.reduce((a: Record<string, number>, p) => {
			a[p.policy_type] = (a[p.policy_type] || 0) + 1;
			return a;
		}, {});
		setTypeData(
			Object.entries(typeCounts).map(([policy_type, count]) => ({
				policy_type,
				count,
			})),
		);

		const statusCounts = data!.reduce((a: Record<string, number>, p) => {
			const s = p.status || "Unknown";
			a[s] = (a[s] || 0) + 1;
			return a;
		}, {});
		setStatusData(
			Object.entries(statusCounts).map(([status, count]) => ({
				status,
				count,
			})),
		);

		const monthCounts = data!.reduce((a: Record<string, number>, p) => {
			const m = format(new Date(p.created_at), "yyyy-MM");
			a[m] = (a[m] || 0) + 1;
			return a;
		}, {});
		setMonthlyData(
			Object.entries(monthCounts)
				.map(([month, count]) => ({ month, count }))
				.sort((a, b) => a.month.localeCompare(b.month)),
		);

		// Policy cards
		setPoliciesList(data!);
	}, [filters]);

	useEffect(() => {
		loadData();
	}, [loadData]);

	return (
		<div className="space-y-8">
			{/* Summary */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				<Card title="Total Policies" value={totalPolicies.toString()} />
				<Card
					title="Active"
					value={activeCount.toString()}
					valueColor="text-green-600"
				/>
				<Card
					title="Pending"
					value={pendingCount.toString()}
					valueColor="text-yellow-600"
				/>
				<Card
					title="Expired"
					value={expiredCount.toString()}
					valueColor="text-red-600"
				/>
			</div>

			{/* Filters */}
			<PolicyFilters onFilterChange={setFilters} />

			{/* Charts */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<PolicyTypePieChart data={typeData} />
				<StatusBarChart data={statusData} />
			</div>
			<MonthlyLineChart data={monthlyData} />

			{/* Policy Cards */}
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{policiesList.map((p) => (
					// <div
					// 	key={p.id}
					// 	onClick={() => setSelectedPolicy(p)}
					// 	className="cursor-pointer bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
					// >
					<div
						key={p.id}
						onClick={() => setSelectedPolicy(p)}
						className="cursor-pointer bg-white p-4 rounded-lg shadow transition-transform transition-shadow duration-200 hover:scale-105 hover:shadow-xl
   "
					>
						<h3 className="text-lg font-semibold">{p.policy_number}</h3>
						<p className="text-sm text-gray-600">{p.policy_type}</p>
						<p className="text-sm text-gray-600">
							Status: <span className="font-medium">{p.status}</span>
						</p>
						<p className="text-sm text-gray-500">
							Valid: {p.start_date} → {p.end_date}
						</p>
					</div>
				))}
			</div>

			{/* Detail Modal */}
			{/* {selectedPolicy && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"> */}
			{selectedPolicy && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fadeIn">
					<div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
						{/* Close Button */}
						<div className="animate-fadeIn">
							<button
								onClick={() => setSelectedPolicy(null)}
								className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
							>
								✕
							</button>
						</div>

						<h2 className="text-2xl font-bold mb-4">
							Policy #{selectedPolicy.policy_number}
						</h2>
						<div className="space-y-2 text-gray-700">
							<p>
								<strong>Type:</strong> {selectedPolicy.policy_type}
							</p>
							<p>
								<strong>Status:</strong> {selectedPolicy.status}
							</p>
							<p>
								<strong>Coverage:</strong> $
								{selectedPolicy.coverage_amount?.toLocaleString()}
							</p>
							<p>
								<strong>Premium:</strong> $
								{selectedPolicy.premium_amount?.toLocaleString()}
							</p>
							<p>
								<strong>Region:</strong> {selectedPolicy.region}
							</p>
							<p>
								<strong>Valid From:</strong> {selectedPolicy.start_date}
							</p>
							<p>
								<strong>Valid Until:</strong> {selectedPolicy.end_date}
							</p>
							<p>
								<strong>Created At:</strong>{" "}
								{format(new Date(selectedPolicy.created_at), "PPP")}
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

// Reusable summary card
function Card({
	title,
	value,
	valueColor = "text-gray-900",
}: {
	title: string;
	value: string;
	valueColor?: string;
}) {
	return (
		<div className="bg-white p-4 rounded-lg shadow flex flex-col">
			<span className="text-sm text-gray-500">{title}</span>
			<span className={`mt-auto text-2xl font-bold ${valueColor}`}>
				{value}
			</span>
		</div>
	);
}
