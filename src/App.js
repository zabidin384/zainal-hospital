import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import About from "./pages/general/About";
import AccountDetails from "./pages/general/AccountDetails";
import AdminAppointments from "./pages/admin/AdminAppointments";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminDoctors from "./pages/admin/AdminDoctors";
import AdminPatients from "./pages/admin/AdminPatients";
import AdminPosts from "./pages/admin/AdminPosts";
import AdminSchedules from "./pages/admin/AdminSchedules";
import Articles from "./pages/general/Articles";
import ArticleDetails from "./pages/general/ArticleDetails";
import DoctorAppointments from "./pages/doctor/DoctorAppointments";
import DoctorPatients from "./pages/doctor/DoctorPatients";
import DoctorPatientDetails from "./pages/doctor/DoctorPatientDetails";
import DoctorPosts from "./pages/doctor/DoctorPosts";
import Footer from "./components/Footer";
import Home from "./pages/general/Home";
import Login from "./pages/general/Login";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import PatientAppointment from "./pages/patient/PatientAppointment";
import PatientDiagnosis from "./pages/patient/PatientDiagnosis";
import PatientDoctors from "./pages/patient/PatientDoctors";
import PatientDoctorDetails from "./pages/patient/PatientDoctorDetails";
import Register from "./pages/general/Register";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { axiosInstance } from "./config";
import AdminSetSchedule from "./pages/admin/AdminSetSchedule";
import { posts } from "./data";

function App() {
	const token = localStorage.getItem("jwt") && localStorage.getItem("jwt");
	const decoded = token && jwt_decode(token);
	const [user, setUser] = decoded ? useState(decoded.sub) : "";
	const role = decoded ? decoded.ROLE.toString() : "";
	// const [posts, setPosts] = useState([]);
	const [doctors, setDoctors] = useState([]);
	const [patients, setPatients] = useState([]);
	const [profiles, setProfiles] = useState([]);

	// Get data profile
	token &&
		useEffect(() => {
			const fetchProfiles = async () => {
				try {
					axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
					const res = await axiosInstance.get("/users");
					setProfiles(res.data);
				} catch (error) {
					if (error.response.status === 403) {
						localStorage.removeItem("jwt");
						window.location.replace("/login");
					}
				}
			};
			fetchProfiles();
		}, []);

	// Get posts
	// posts &&
	// 	useEffect(() => {
	// 		const fetchPosts = async () => {
	// 			axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	// 			const res = await axiosInstance.get("/posts");
	// 			setPosts(res.data);
	// 		};
	// 		fetchPosts();
	// 	}, []);

	// Get all doctors
	token &&
		useEffect(() => {
			const fetchDoctors = async () => {
				axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
				const res = await axiosInstance.get("/users/doctors");
				setDoctors(res.data);
			};
			fetchDoctors();
		}, []);

	// Get all patients of doctor
	token &&
		useEffect(() => {
			const fetchPatients = async () => {
				axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
				const res = await axiosInstance.get("/users/patients");
				setPatients(res.data);
			};
			fetchPatients();
		}, []);

	return (
		<div className="App">
			<Router>
				<Navbar user={user} setUser={setUser} role={role} id={profiles.id} profiles={profiles} />
				<Routes>
					{/* General */}
					<Route path="/" element={<Home posts={posts} />} />
					<Route path="/about" element={<About />} />
					<Route path="/account-details" element={role ? <AccountDetails token={token} /> : <Navigate to="/" />} />
					<Route path="/articles" element={<Articles posts={posts} />} />
					<Route path="/article-details=:id" element={user ? <ArticleDetails token={token} posts={posts} /> : <Navigate to="/login" />} />
					<Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
					<Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />

					{/* Patient */}
					<Route path="/patient-appointment" element={role === "ROLE_PATIENT" ? <PatientAppointment doctors={doctors} /> : <Navigate to="/" />} />
					<Route path="/patient-diagnosis" element={role === "ROLE_PATIENT" ? <PatientDiagnosis token={token} /> : <Navigate to="/" />} />
					<Route path="/patient-doctors" element={role === "ROLE_PATIENT" ? <PatientDoctors doctors={doctors} /> : <Navigate to="/" />} />
					<Route path="/patient-doctors-details%:id" element={role === "ROLE_PATIENT" ? <PatientDoctorDetails token={token} /> : <Navigate to="/" />} />

					{/* Doctor */}
					<Route path="/doctor-appointments" element={role === "ROLE_DOCTOR" ? <DoctorAppointments token={token} /> : <Navigate to="/" />} />
					<Route path="/doctor-posts%:id" element={role === "ROLE_DOCTOR" ? <DoctorPosts profiles={profiles} token={token} /> : <Navigate to="/" />} />
					<Route path="/doctor-patients" element={role === "ROLE_DOCTOR" ? <DoctorPatients patients={patients} /> : <Navigate to="/" />} />
					<Route path="/patient-details=:id" element={role === "ROLE_DOCTOR" || role === "ROLE_ADMIN" ? <DoctorPatientDetails token={token} /> : <Navigate to="/" />} />

					{/* Admin */}
					<Route path="/admin-dashboard" element={role === "ROLE_ADMIN" ? <AdminDashboard patients={patients} doctors={doctors} posts={posts} /> : <Navigate to="/" />} />
					<Route path="/admin-appointments" element={role === "ROLE_ADMIN" ? <AdminAppointments token={token} /> : <Navigate to="/" />} />
					<Route path="/admin-doctors" element={role === "ROLE_ADMIN" ? <AdminDoctors doctors={doctors} /> : <Navigate to="/" />} />
					<Route path="/admin-patients" element={role === "ROLE_ADMIN" ? <AdminPatients patients={patients} /> : <Navigate to="/" />} />
					<Route path="/admin-posts" element={role === "ROLE_ADMIN" ? <AdminPosts posts={posts} /> : <Navigate to="/" />} />
					<Route path="/admin-schedules" element={role === "ROLE_ADMIN" ? <AdminSchedules token={token} doctors={doctors} /> : <Navigate to="/" />} />
					<Route path="/admin-setSchedule" element={role === "ROLE_ADMIN" ? <AdminSetSchedule token={token} doctors={doctors} /> : <Navigate to="/" />} />

					{/* 404 Page */}
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer role={role} />
			</Router>
		</div>
	);
}

export default App;
