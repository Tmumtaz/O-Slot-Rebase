import Navbar from "../../NavBar/Navbar";

import "./Service.styles.scss";
import { service, staff } from "./variables";

const Service = () => {
  //above is part 1/2 for sending email reminders. Some additional code added in index.html
  return (
    <>
      {/* <Navbar /> */}
      <div className="content-container">
        <div className="service-container">
          <div className="service-item">
            <ul>
              {service.map((item, index) => {
                return (
                  <ul>
                    <li key={index}>
                      <span>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                      </span>
                      <input type="radio" value={item.name} />
                    </li>
                  </ul>
                );
              })}
            </ul>
          </div>
          <div className="service-item">
            <ul>
              {staff.map((item, index) => {
                return (
                  <ul>
                    <li key={index}>
                      <span>
                        <h3>{item.name}</h3>
                      </span>
                      <input type="radio" value={item.name} />
                    </li>
                  </ul>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
