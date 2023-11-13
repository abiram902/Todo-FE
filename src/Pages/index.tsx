import { Route, Routes } from "react-router-dom";

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<h1>Home</h1>} />
			<Route path="/my-tasks" element={<h1>My-Tasks</h1>} />
			<Route path="*" element={<h1>404</h1>} />
		</Routes>
	);
}
