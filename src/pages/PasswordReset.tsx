// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";

// export default function PasswordReset() {
// 	const { resetPassword } = useAuth();
// 	const [email, setEmail] = useState("");
// 	const [message, setMessage] = useState("");

// 	const handleReset = async (e: React.FormEvent) => {
// 		e.preventDefault();
// 		const { data, error } = await resetPassword(email);
// 		if (error) setMessage(error.message);
// 		else setMessage("Password reset link sent. Check your email.");
// 	};

// 	return (
// 		<form onSubmit={handleReset} className="max-w-md mx-auto p-4 space-y-4">
// 			<h1 className="text-xl font-bold">Reset Password</h1>
// 			{message && <div className="text-sm text-green-600">{message}</div>}
// 			<input
// 				type="email"
// 				placeholder="Your email"
// 				value={email}
// 				onChange={(e) => setEmail(e.target.value)}
// 				className="w-full p-2 border rounded"
// 				required
// 			/>
// 			<button
// 				type="submit"
// 				className="px-4 py-2 bg-yellow-600 text-white rounded"
// 			>
// 				Send Reset Link
// 			</button>
// 		</form>
// 	);
// }

// src/pages/PasswordReset.tsx
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { supabase } from "../supabaseClient";

// export default function PasswordReset() {
//   const [password, setPassword] = useState("");
//   const [errorMsg, setErrorMsg] = useState("");
//   const [successMsg, setSuccessMsg] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setErrorMsg("");
//     setSuccessMsg("");

//     const { error } = await supabase.auth.updateUser({
//       password,
//     });

//     if (error) {
//       setErrorMsg(error.message);
//     } else {
//       setSuccessMsg("Password updated successfully!");
//       setTimeout(() => navigate("/signin"), 2000);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
//       <h1 className="text-xl font-bold">Reset Password</h1>
//       {errorMsg && <div className="text-sm text-red-600">{errorMsg}</div>}
//       {successMsg && <div className="text-sm text-green-600">{successMsg}</div>}
//       <input
//         type="password"
//         placeholder="New Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="w-full p-2 border rounded"
//         required
//       />
//       <button
//         type="submit"
//         className="px-4 py-2 bg-blue-600 text-white rounded"
//       >
//         Update Password
//       </button>
//     </form>
//   );
// }

// src/pages/PasswordReset.tsx
import { useState } from "react";
import { supabase } from "../supabaseClient";
import { AuthLayout } from "../components/AuthLayout";

export default function PasswordReset() {
	const [email, setEmail] = useState("");
	const [successMsg, setSuccessMsg] = useState("");
	const [errorMsg, setErrorMsg] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setErrorMsg("");
		setSuccessMsg("");

		const { error } = await supabase.auth.resetPasswordForEmail(email, {
			redirectTo: `${window.location.origin}/reset-password`,
		});

		if (error) {
			setErrorMsg(error.message);
		} else {
			setSuccessMsg("Check your email for password reset instructions.");
		}
	};

	return (
		<AuthLayout
			title="Reset Password"
			subtitle="Enter your email to receive reset instructions"
			footerLink={{
				text: "Back to sign in",
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

				<button
					type="submit"
					className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				>
					Send Reset Link
				</button>
			</form>
		</AuthLayout>
	);
}
