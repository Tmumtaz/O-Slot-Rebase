import React from 'react';
import { useNavigate } from "react-router-dom"; 
import { saveDB } from '../../Database/Write';


function ConfirmationPage(props) {
   const {selectedStaff, selectedTime, selectedDate,selectedService, contact, email, fname, lname, appointmentNotes, setContact, setEmail, setFname, setLname, setAppointmentNotes} = props
   const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   const navigate = useNavigate();

   async function handlePayment(event){
           window.confirm("Are you sure?")
           alert("Appointment Booked!")
           await saveDB({
                selectedService: selectedService,
                selectedStaff: selectedStaff.name,
                selectedTime: selectedTime,
                selectedDate: selectedDate,
                contact: contact,
                email: email,
                firstName: fname,
                lastName: lname,
                notes: appointmentNotes
           });
           setContact("");
           setEmail("");
           setFname("");
           setLname("");
           setAppointmentNotes("");
           navigate("/");
   }
  return (
   <>
   <h1>Confirm your Appointment</h1>
   <h3>Service: {selectedService}</h3>
   <h3>Staff: {selectedStaff.name}</h3>
   <h3>Time: {selectedTime}</h3>
   <h3>Date: {selectedDate.getDate()} {months[selectedDate.getMonth()]} {selectedDate.getFullYear()}</h3>
   <h3>Contact: {contact}</h3>
   <h3>Email: {email}</h3>
   <h3>First Name: {fname}</h3>
   <h3>Last Name: {lname}</h3>
   <h3>Notes: {appointmentNotes}</h3>
   <button onClick={handlePayment}>Pay Now</button>
   </>
  )
}

export default ConfirmationPage