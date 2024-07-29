import { BiCalendar } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";
import { useState, useEffect, useCallback } from "react";

function App() {
	document.documentElement.classList.toggle("dark");
	document.querySelector("body").classList.add("bg-background", "text-text");

	let [appointmentList, setAppointmentList] = useState([]);

	const fetchData = useCallback(() => {
		fetch("./appointment-data.json")
			.then((response) => response.json())
			.then((data) => {
				setAppointmentList(data);
			});
	}, []);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return (
		<div className="App container mx-auto mt-40 font-thin">
			<h1 className="text-5xl mb-4">
				<BiCalendar className="inline-block text-red-600" /> Your
				Appointments
			</h1>
			<AddAppointment />
			<Search />
			<ul className="divide-y divide-gray-200">
				{appointmentList.map((appointment) => (
					<AppointmentInfo
						key={appointment.id}
						appointment={appointment}
						onDeleteAppointment={(appointmentId) =>
							setAppointmentList(
								appointmentList.filter(
									(appointment) =>
										appointment.id !== appointmentId
								)
							)
						}
					/>
				))}
			</ul>
		</div>
	);
}

export default App;
