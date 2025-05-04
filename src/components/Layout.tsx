// src/components/Layout.tsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const { user, signOut } = useAuth();
	const navigate = useNavigate();

	const handleSignOut = async () => {
		await signOut();
		navigate("/signin");
	};

	return (
		<div className="min-h-screen flex flex-col bg-gray-50">
			{/* Navbar */}
			<header className="bg-white shadow">
				<div className="max-w-6xl mx-auto flex items-center justify-between p-4">
					<div className="flex items-center space-x-2">
						<svg
							className="h-8 w-8 text-blue-600"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
							/>
						</svg>
						<Link to="/" className="text-2xl font-bold text-gray-800">
							InsureDash
						</Link>
					</div>
					<div className="flex items-center space-x-4">
						{user && <span className="text-gray-600">{user.email}</span>}
						{user && (
							<button
								onClick={handleSignOut}
								className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
							>
								Sign Out
							</button>
						)}
					</div>
				</div>
			</header>

			{/* Main */}
			<main className="flex-1 max-w-6xl mx-auto p-6">{children}</main>

			{/* Footer (optional) */}
			<footer className="bg-white border-t mt-auto">
				<div className="max-w-6xl mx-auto p-4 text-center text-sm text-gray-500">
					&copy; {new Date().getFullYear()} InsureDash. All rights reserved.
				</div>
			</footer>
		</div>
	);
};
