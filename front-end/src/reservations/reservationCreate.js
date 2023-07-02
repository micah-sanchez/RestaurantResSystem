import React, { useState } from "react";

function ReservationCreate() {

  const initialFormData = {
    first_name: "",
    last_name: "",
    mobile_number: "",
    reservation_date: "",
    reservation_time: "",
    people: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const submitManager = (event) => {
    // event.preventDefault();
    // setReservations((reservations) => [...reservations, formData]);
    // setFormData({ ...initialFormData });
    console.log("hello");
  };

  const handleFormChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  return (
    <form name="create" onSubmit={submitManager}>
      <table>
        <tbody>
          <tr>
            <td>
              <label name="first_name">
                <input
                  name="first_name"
                  id="first_name"
                  placeholder="First Name"
                  type="text"
                  onChange={handleFormChange}
                  value={formData.first_name}
                  required={true}
                />
              </label>
            </td>
            <td>
              <label name="last_name">
                <input
                  name="last_name"
                  id="last_name"
                  placeholder="Last Name"
                  type="text"
                  onChange={handleFormChange}
                  value={formData.last_name}
                  required={true}
                />
              </label>
            </td>
            <td>
              <label name="mobile_number">
                <input
                  name="mobile_number"
                  id="mobile_number"
                  placeholder="Phone Number"
                  type="text"
                  onChange={handleFormChange}
                  value={formData.mobile_number}
                  required={true}
                />
              </label>
            </td>
            <td>
              <label name="reservation_date">
                <textarea
                  name="reservation_date"
                  id="reservation_date"
                  placeholder="Date of Reservation"
                  type="text"
                  onChange={handleFormChange}
                  value={formData.reservation_date}
                  required={true}
                />
              </label>
            </td>
            <td>
              <label name="reservation_time">
                <textarea
                  name="reservation_time"
                  id="reservation_time"
                  placeholder="Time of Reservation"
                  type="text"
                  onChange={handleFormChange}
                  value={formData.reservation_time}
                  required={true}
                />
              </label>
            </td>
            <td>
              <label name="people">
                <textarea
                  name="people"
                  id="people"
                  placeholder="Number of Guests"
                  type="text"
                  onChange={handleFormChange}
                  value={formData.people}
                  required={true}
                />
              </label>
            </td>
            <td>
              <button type="submit">Submit</button>
            </td>
            <td>
              <button type="cancel">Cancel</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default ReservationCreate;
