import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/general/About";
import AdminAccountDetails from "./pages/admin/AdminAccountDetails";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminDoctors from "./pages/admin/AdminDoctors";
import AdminPatients from "./pages/admin/AdminPatients";
import AdminPosts from "./pages/admin/AdminPosts";
import AdminSchedules from "./pages/admin/AdminSchedules";
import DoctorAccountDetails from "./pages/doctor/DoctorAccountDetails";
import DoctorAppointments from "./pages/doctor/DoctorAppointments";
import DoctorPatients from "./pages/doctor/DoctorPatients";
import DoctorPatientDetails from "./pages/doctor/DoctorPatientDetails";
import DoctorPosts from "./pages/doctor/DoctorPosts";
import Footer from "./components/Footer";
import Home from "./pages/general/Home";
import Login from "./pages/general/Login";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import PatientAppointment from "./pages/patient/PatientAppointment";
import PatientDiagnosis from "./pages/patient/PatientDiagnosis";
import PatientDisease from "./pages/patient/PatientDisease";
import PatientDiseaseDetails from "./pages/patient/PatientDiseaseDetails";
import PatientDoctors from "./pages/patient/PatientDoctors";
import PatientDoctorDetails from "./pages/patient/PatientDoctorDetails";
import PatientProfile from "./pages/patient/PatientProfile";
import Register from "./pages/general/Register";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					{/* Menu */}
					<Route path="/Menu" element={<Menu />} />

					{/* General */}
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />

					{/* Patient */}
					<Route path="/patient-appointment" element={<PatientAppointment />} />
					<Route path="/patient-diagnosis" element={<PatientDiagnosis />} />
					<Route path="/patient-disease" element={<PatientDisease />} />
					<Route path="/patient-disease-details" element={<PatientDiseaseDetails />} />
					<Route path="/patient-doctors" element={<PatientDoctors />} />
					<Route path="/patient-doctors-details" element={<PatientDoctorDetails />} />
					<Route path="/patient-profile" element={<PatientProfile />} />

					{/* Doctor */}
					<Route path="/doctor-appointments" element={<DoctorAppointments />} />
					<Route path="/doctor-account-details" element={<DoctorAccountDetails />} />
					<Route path="/doctor-posts" element={<DoctorPosts />} />
					<Route path="/doctor-patients" element={<DoctorPatients />} />
					<Route path="/doctor-patient-details" element={<DoctorPatientDetails />} />

					{/* Admin */}
					<Route path="/admin-dashboard" element={<AdminDashboard />} />
					<Route path="/admin-account-details" element={<AdminAccountDetails />} />
					<Route path="/admin-patients" element={<AdminPatients />} />
					<Route path="/admin-doctors" element={<AdminDoctors />} />
					<Route path="/admin-schedules" element={<AdminSchedules />} />
					<Route path="/admin-posts" element={<AdminPosts />} />

					{/* 404 Page */}
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
