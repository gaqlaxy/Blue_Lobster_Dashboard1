import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { AuthLayout } from "../components/AuthLayout";

export default function SignUp() {
	const { signUp } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [successMsg, setSuccessMsg] = useState("");
	const [errorMsg, setErrorMsg] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setErrorMsg("");
		setSuccessMsg("");

		const { error } = await signUp(email, password);
		if (error) {
			setErrorMsg(error.message);
		} else {
			setSuccessMsg("Check your email for a confirmation link.");
		}
	};

	return (
		<AuthLayout
			title="Create Account"
			subtitle="Join to manage your insurance policies"
			footerLink={{
				text: "Already have an account?",
				href: "/signin",
			}}
		>
			<form onSubmit={handleSubmit} className="space-y-4">
				{errorMsg && (
					<div className="p-3 bg-red-50 text-red-600 rounded-md text-sm">
						{errorMsg}
					</div>
				)}
				{successMsg && (
					<div className="p-3 bg-green-50 text-green-600 rounded-md text-sm">
						{successMsg}
					</div>
				)}

				<div className="space-y-1">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700"
					>
						Email
					</label>
					<input
						id="email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				<div className="space-y-1">
					<label
						htmlFor="password"
						className="block text-sm font-medium text-gray-700"
					>
						Password
					</label>
					<input
						id="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				<button
					type="submit"
					className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				>
					Sign Up
				</button>
			</form>
		</AuthLayout>
	);
}
