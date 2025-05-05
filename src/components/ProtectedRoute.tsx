import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
	children: React.ReactElement;
	allowedRoles?: string[];
}

export function ProtectedRoute({
	children,
	// @ts-ignore:
	allowedRoles = [],
}: ProtectedRouteProps) {
	// @ts-ignore:
	const { user, loading } = useAuth(); // Add loading state to AuthContext

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				Loading...
			</div>
		);
	}

	if (!user) {
		return <Navigate to="/signin" replace />;
	}

	
	return children;
}
