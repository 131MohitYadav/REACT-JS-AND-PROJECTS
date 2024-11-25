import React, { useState } from "react";
import "./App.css";
import AppointmentForm from ".components/AppointmentForm";
import AppointmentList from ".components/AppointmentList";

const Appointement = () => {
    const [appointments, setAppointments] = useState([]);

    const addAppointment = (appointment) => {
        setAppointments([...appointments, appointment]);
    };

    const deleteAppointment = ( index ) => {
        const deletedAppointments = [...appointments];
        deletedAppointments.splice(index , 1);
        setAppointments(deletedAppointments);
    };

    const editAppointment = (index , editName, editDate) => {
        const updatedAppointments = [...appointments];
        updatedAppointments[index] = {
            name: editName,
            date: editDate,
        };
        setAppointments(updatedAppointments);
    };
    const clearAppointments = () => {
        setAppointments([]);
    };

    return (
        <div>
            <h1>APPOINTMENT MANAGEMENT SYSTEM</h1>
            <AppointmentForm addAppointment={addAppointment} />
            <AppointmentList
            appointments={appointments}
            deleteAppointment={deleteAppointment}
            clearAppointments={clearAppointments}
            editAppointment={editAppointment}
            />
        </div>
    );

};
export default Appointement;