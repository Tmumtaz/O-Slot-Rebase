import { Link } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { updateDB, deleteTimeSlot } from "../../Database/Write";
import { deleteField } from "firebase/firestore";

function Calender(props) {
  const {selectedDate, setSelectedDate, selectedTime, setSelectedTime, selectedStaff, setSelectedStaff, staffs, setStaffs} = props;
  let timeSlotIndex = null;

  //Minimum date to today
  const minDate = new Date();

  //Maximum date to next 7 days 
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 7);

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  async function handleTime(event){
    const slot = (JSON.parse(event.target.value));
    setSelectedTime(slot.time);
    timeSlotIndex = event.target.id
    console.log(timeSlotIndex)
    const newTimeSlot = selectedStaff.timeSlot.slice(0,timeSlotIndex).concat(selectedStaff.timeSlot.slice(timeSlotIndex + 1))
    await updateDB(
      selectedStaff.id,
      {timeSlot: newTimeSlot}
    )
  }

  const handleContinue = (event) => {
    event.preventDefault();
}

  return (
    <>
    <div>Calender</div>
    <button> <Link to="/staff">Back</Link></button>
    <br></br>
    <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        minDate={minDate}
        maxDate={maxDate}
      />
      <div className='time_slot'>
        
        {selectedStaff.timeSlot && selectedStaff.timeSlot.map((timeS,index) => (
          <button key={index} id={index} value={JSON.stringify(timeS)} onClick={handleTime}>{timeS.time}</button>
          ))
        }
        {
          selectedStaff.timeSlot.length == 0 && <div>No Slots Available</div>
        }
      </div>
      { selectedStaff.timeSlot.length == 0 ? 
      <Link className="button-text" to="/staff">Back</Link> : 
      <button onClick={(event) => handleContinue(event)}><Link to="/Details">Continue</Link></button>
      }
    </>
  )
}

export default Calender
