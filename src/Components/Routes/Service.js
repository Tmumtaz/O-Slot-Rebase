import Navbar from "../NavBar/Navbar";
import { useState } from "react";

const Service = () => {
  //this is part 1/2 for sending email reminders. Some additional code added in index.html. This doesn't seems to work (it does not really send an email, apparently)
  const [formState, setFormState] = useState({});

  

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const config = { // we will need to replace some of this info with an encrypted version so users can't see this. 8:40 in the video https://www.youtube.com/watch?v=wUK40U6sPH0
      Username: "oslot@mailhog.local",
      Password: "9035ACBC1327C0ABC78E7BAA80092A42FFC1",
      Host: "smtp.elasticemail.com",
      Post: 2525,
      To: "oslot@mailhog.local",
      From: formState.email,
      Subject: "This is the subject",
      Body: `${formState.name} connected to you over email`,
    };
    if(window.Email) {
      window.Email.send(config).then(() => alert("email sent succesfully"));
    }
  };
  //above is part 1/2 for sending email reminders. Some additional code added in index.html
    return(
        <>
        <Navbar />
        <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', height: '90vh'}}>
            <h1>Service</h1>
            {/* below is part 2/2 for sending email reminders. Some additional code added in index.html */}
            <div>
              <form className='flex flex-col justify-center items-center' onSubmit={submitHandler}>
                <input type='text' name='name' placeholder='Your Name' value={formState.name || ''} onChange={changeHandler} />
                <input type='email' name='email' placeholder='Your Email' value={formState.email || ''} onChange={changeHandler} />
                <input type='submit' value='Send Email' />
              </form>
            </div>
            {/* above is part 2/2 for sending email reminders. Some additional code added in index.html */}
        </div>
        </>
    )
}

export default Service;