// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function SignIn() {
// 	const { signIn } = useAuth();
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [errorMsg, setErrorMsg] = useState("");
// 	const navigate = useNavigate();

// 	const handleSubmit = async (e: React.FormEvent) => {
// 		e.preventDefault();
// 		const { data, error } = await signIn(email, password);
// 		if (error) setErrorMsg(error.message);
// 		else navigate("/dashboard");
// 	};

// 	return (
// 		<form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
// 			<h1 className="text-xl font-bold">Sign In</h1>
// 			{errorMsg && <div className="text-sm text-red-600">{errorMsg}</div>}
// 			<input
// 				type="email"
// 				placeholder="Email"
// 				value={email}
// 				onChange={(e) => setEmail(e.target.value)}
// 				className="w-full p-2 border rounded"
// 				required
// 			/>
// 			<input
// 				type="password"
// 				placeholder="Password"
// 				value={password}
// 				onChange={(e) => setPassword(e.target.value)}
// 				className="w-full p-2 border rounded"
// 				required
// 			/>
// 			<button
// 				type="submit"
// 				className="px-4 py-2 bg-green-600 text-white rounded"
// 			>
// 				Log In
// 			</button>
// 		</form>
// 	);
// }


// src/pages/SignIn.tsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { AuthLayout } from "../components/AuthLayout";
import { Link } from "react-router-dom";

export default function SignIn() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const { error } = await signIn(email, password);
    if (error) {
      setErrorMsg(error.message);
    }
	else {
	  // Redirect to dashboard or home page after successful sign-in
	  window.location.href = "/dashboard"; // Adjust the path as needed
	}
  };

  return (
    <AuthLayout
      title="Sign In"
      subtitle="Access your insurance dashboard"
      footerLink={{
        text: "Don't have an account?",
        href: "/signup",
      }}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {errorMsg && (
          <div className="p-3 bg-red-50 text-red-600 rounded-md text-sm">
            {errorMsg}
          </div>
        )}

        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <Link to="/reset-password" className="text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Sign In
        </button>
      </form>
    </AuthLayout>
  );
}