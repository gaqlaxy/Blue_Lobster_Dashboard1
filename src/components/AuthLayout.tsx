// src/components/AuthLayout.tsx
import { Link } from "react-router-dom";

export const AuthLayout = ({
	title,
	subtitle,
	children,
	footerLink,
}: {
	title: string;
	subtitle?: string;
	children: React.ReactNode;
	footerLink?: { text: string; href: string };
}) => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
			<div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
				{/* Logo/Header */}
				<div className="text-center">
					<h1 className="text-3xl font-bold text-gray-800">{title}</h1>
					{subtitle && <p className="mt-2 text-gray-500">{subtitle}</p>}
				</div>

				{/* Form Content */}
				<div className="space-y-4">{children}</div>

				{/* Footer Link */}
				{footerLink && (
					<div className="text-center text-sm text-gray-500">
						{footerLink.text}{" "}
						<Link
							to={footerLink.href}
							className="text-blue-600 hover:underline"
						>
							{footerLink.text}
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};
