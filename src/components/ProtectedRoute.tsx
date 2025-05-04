// // src/components/ProtectedRoute.tsx
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// interface ProtectedRouteProps {
// 	children: React.ReactElement;
// }

// export function ProtectedRoute({ children }: ProtectedRouteProps) {
// 	const { user } = useAuth();
// 	if (!user) {
// 		// Not logged in—redirect to sign-in
// 		return <Navigate to="/signin" replace />;
// 	}
// 	return children;
// }

// src/components/ProtectedRoute.tsx
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// interface ProtectedRouteProps {
//   children: React.ReactElement;
//   allowedRoles?: string[]; // Optional: restrict to specific roles
// }

// export function ProtectedRoute({ children, allowedRoles = [] }: ProtectedRouteProps) {
//   const { user } = useAuth();

//   if (!user) {
//     return <Navigate to="/signin" replace />;
//   }

//   // Check if user has a role in allowedRoles
// //   if (allowedRoles.length > 0 && !allowedRoles.includes(user.user_metadata.role)) {
// //     return <Navigate to="/unauthorized" replace />; // Create an unauthorized page
// //   }

//   return children;
// }

// src/components/ProtectedRoute.tsx
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactElement;
  allowedRoles?: string[];
}

export function ProtectedRoute({ children, allowedRoles = [] }: ProtectedRouteProps) {
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

  // if (allowedRoles.length > 0 && !allowedRoles.includes(user.user_metadata.role)) {
  //   return <Navigate to="/unauthorized" replace />;
  // }

  return children;
}