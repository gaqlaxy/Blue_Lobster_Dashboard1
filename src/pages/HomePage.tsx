// // src/pages/HomePage.tsx
// import { Link } from "react-router-dom";

// export default function HomePage() {
// 	return (
// 		<div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
// 			{/* Header */}
// 			<header className=" shadow-sm">
// 				<div className="container mx-auto px-4 py-4 flex justify-between items-center">
// 					<div className="flex items-center space-x-2">
// 						{/* Logo */}
// 						<svg
// 							className="h-8 w-8 text-blue-600"
// 							fill="none"
// 							viewBox="0 0 24 24"
// 							stroke="currentColor"
// 						>
// 							<path
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 								strokeWidth={2}
// 								d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
// 							/>
// 						</svg>
// 						<span className="text-xl font-bold text-gray-800">InsureDash</span>
// 					</div>
// 					{/* <nav className="space-x-6 hidden md:flex">
//             <Link to="/signin" className="text-gray-600 hover:text-blue-600">
//               Sign In
//             </Link>
//             <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-700">
//               Get Started
//             </Link>
//           </nav> */}
// 				</div>
// 			</header>

// 			{/* Hero Section */}
// 			<main className="flex-grow container mx-auto px-4 py-16">
// 				<div className="grid md:grid-cols-2 gap-12 items-center">
// 					<div className="space-y-6">
// 						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
// 							Manage Your Insurance Policies in One Place
// 						</h1>
// 						<p className="text-lg text-gray-600">
// 							Track, update, and analyze your insurance policies with our
// 							intuitive dashboard. Designed for policyholders, agents, and
// 							administrators.
// 						</p>
// 						<div className="flex flex-col sm:flex-row gap-4">
// 							<Link
// 								to="/signup"
// 								className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-center"
// 							>
// 								Create Free Account
// 							</Link>
// 							<Link
// 								to="/signin"
// 								className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-center"
// 							>
// 								Sign In
// 							</Link>
// 						</div>
// 					</div>
// 					<div className="hidden md:block">
// 						<img
// 							src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=800&q=80"
// 							alt="Insurance Dashboard"
// 							className="rounded-xl shadow-lg w-full object-cover h-[400px]"
// 						/>
// 					</div>
// 				</div>
// 			</main>

// 			{/* Features Section */}
// 			<section className="py-16 bg-white">
// 				<div className="container mx-auto px-4">
// 					<h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
// 						Why Choose InsureDash?
// 					</h2>
// 					<div className="grid md:grid-cols-3 gap-8">
// 						{[
// 							{
// 								title: "Unified Policy Management",
// 								description:
// 									"Track all your insurance policies in one centralized dashboard with real-time updates.",
// 								icon: "📊",
// 							},
// 							{
// 								title: "Role-Based Access",
// 								description:
// 									"Secure access control for policyholders, agents, and administrators.",
// 								icon: "🔐",
// 							},
// 							{
// 								title: "Data Analytics",
// 								description:
// 									"Visualize policy trends, coverage amounts, and claim history with interactive charts.",
// 								icon: "📈",
// 							},
// 						].map((feature, i) => (
// 							<div
// 								key={i}
// 								className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
// 							>
// 								<div className="text-3xl mb-4">{feature.icon}</div>
// 								<h3 className="text-xl font-semibold text-gray-800 mb-2">
// 									{feature.title}
// 								</h3>
// 								<p className="text-gray-600">{feature.description}</p>
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 			</section>

// 			{/* CTA Section */}
// 			<section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
// 				<div className="container mx-auto px-4 text-center">
// 					<h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
// 					<p className="text-lg mb-6 max-w-2xl mx-auto">
// 						Join thousands of users managing their insurance policies
// 						efficiently and securely.
// 					</p>
// 					<div className="flex flex-col sm:flex-row gap-4 justify-center">
// 						<Link
// 							to="/signup"
// 							className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors text-center"
// 						>
// 							Create Free Account
// 						</Link>
// 						<Link
// 							to="/signin"
// 							className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-center"
// 						>
// 							Sign In
// 						</Link>
// 					</div>
// 				</div>
// 			</section>

// 			{/* Footer */}
// 			<footer className="bg-gray-900 text-white py-8">
// 				<div className="container mx-auto px-4">
// 					<div className="flex flex-col md:flex-row justify-between items-center">
// 						<div className="mb-4 md:mb-0">
// 							<div className="flex items-center space-x-2">
// 								<svg
// 									className="h-6 w-6 text-blue-400"
// 									fill="none"
// 									viewBox="0 0 24 24"
// 									stroke="currentColor"
// 								>
// 									<path
// 										strokeLinecap="round"
// 										strokeLinejoin="round"
// 										strokeWidth={2}
// 										d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
// 									/>
// 								</svg>
// 								<span className="font-bold">InsureDash</span>
// 							</div>
// 							<p className="text-gray-400 text-sm mt-1">
// 								Insurance Policy Management Platform
// 							</p>
// 						</div>
// 						<div className="flex space-x-6">
// 							<Link to="/privacy" className="text-gray-400 hover:text-white">
// 								Privacy Policy
// 							</Link>
// 							<Link to="/terms" className="text-gray-400 hover:text-white">
// 								Terms of Service
// 							</Link>
// 						</div>
// 					</div>
// 				</div>
// 			</footer>
// 		</div>
// 	);
// }

// src/pages/HomePage.tsx
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function HomePage() {
	const { user, signOut } = useAuth();
	const navigate = useNavigate();

	const handleSignOut = async () => {
		await signOut();
		navigate("/signin");
	};

	return (
		<div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
			{/* Header */}
			<header className="shadow-sm bg-white">
				<div className="container mx-auto px-4 py-4 flex justify-between items-center">
					<div className="flex items-center space-x-2">
						{/* Logo */}
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
						<span className="text-xl font-bold text-gray-800">InsureDash</span>
					</div>

					{/* Nav / Auth Buttons */}
					{user ? (
						<div className="flex items-center space-x-4">
							<Link
								to="/dashboard"
								className="text-gray-700 hover:text-indigo-600 font-medium"
							>
								Go to Dashboard
							</Link>
							<button
								onClick={handleSignOut}
								className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
							>
								Sign Out
							</button>
						</div>
					) : (
						<nav className="space-x-6 hidden md:flex">
							<Link to="/signin" className="text-gray-600 hover:text-blue-600">
								Sign In
							</Link>
							<Link
								to="/signup"
								className="font-medium text-blue-600 hover:text-blue-700"
							>
								Get Started
							</Link>
						</nav>
					)}
				</div>
			</header>

			{/* Hero Section */}
			<main className="flex-grow container mx-auto px-4 py-16">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
							Manage Your Insurance Policies in One Place
						</h1>
						<p className="text-lg text-gray-600">
							Track, update, and analyze your insurance policies with our
							intuitive dashboard. Designed for policyholders, agents, and
							administrators.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							{user ? (
								<Link
									to="/dashboard"
									className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors text-center"
								>
									Go to Dashboard
								</Link>
							) : (
								<>
									<Link
										to="/signup"
										className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-center"
									>
										Create Free Account
									</Link>
									<Link
										to="/signin"
										className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-center"
									>
										Sign In
									</Link>
								</>
							)}
						</div>
					</div>
					<div className="hidden md:block">
						<img
							src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=800&q=80"
							alt="Insurance Dashboard"
							className="rounded-xl shadow-lg w-full object-cover h-[400px]"
						/>
					</div>
				</div>
			</main>

			{/* Features Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
						Why Choose InsureDash?
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								title: "Unified Policy Management",
								description:
									"Track all your insurance policies in one centralized dashboard with real-time updates.",
								icon: "📊",
							},
							{
								title: "Role-Based Access",
								description:
									"Secure access control for policyholders, agents, and administrators.",
								icon: "🔐",
							},
							{
								title: "Data Analytics",
								description:
									"Visualize policy trends, coverage amounts, and claim history with interactive charts.",
								icon: "📈",
							},
						].map((feature, i) => (
							<div
								key={i}
								className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
							>
								<div className="text-3xl mb-4">{feature.icon}</div>
								<h3 className="text-xl font-semibold text-gray-800 mb-2">
									{feature.title}
								</h3>
								<p className="text-gray-600">{feature.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			{!user && (
				<section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
						<p className="text-lg mb-6 max-w-2xl mx-auto">
							Join thousands of users managing their insurance policies
							efficiently and securely.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								to="/signup"
								className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors text-center"
							>
								Create Free Account
							</Link>
							<Link
								to="/signin"
								className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-center"
							>
								Sign In
							</Link>
						</div>
					</div>
				</section>
			)}

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-8">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-4 md:mb-0">
							<div className="flex items-center space-x-2">
								<svg
									className="h-6 w-6 text-blue-400"
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
								<span className="font-bold">InsureDash</span>
							</div>
							<p className="text-gray-400 text-sm mt-1">
								Insurance Policy Management Platform
							</p>
						</div>
						<div className="flex space-x-6">
							<Link to="/privacy" className="text-gray-400 hover:text-white">
								Privacy Policy
							</Link>
							<Link to="/terms" className="text-gray-400 hover:text-white">
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
