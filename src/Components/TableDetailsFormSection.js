import React from "react";

const TableDetailsFormSection = ({
  availableTimes,
  dispatch,
  bookingInfo,
  setBookingInfo,
}) => {
  return (
    <section>
      <h2>Table Details</h2>
      <fieldset className="input-grid">
        <div className="input-group">
          <label>Choose your date</label>
          <input
            type="date"
            value={bookingInfo.date}
            onChange={(e) => {
              setBookingInfo({ ...bookingInfo, date: e.target.value });
              dispatch({ type: "date_change", date: e.target.value });
            }}
          />
        </div>
        <div className="input-group">
          <label>Choose your time</label>
          <select
            value={bookingInfo.time}
            onChange={(e) =>
              setBookingInfo({ ...bookingInfo, time: e.target.value })
            }
          >
            {availableTimes.map((time) => (
              <option value={time} key={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label>Number of people</label>
          <input
            type="number"
            max="8"
            value={bookingInfo.numPeople}
            onChange={(e) =>
              setBookingInfo({ ...bookingInfo, numPeople: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label>What will you be joining us for?</label>
          <div className="radio-container">
            <div className="radio-item">
              <input
                type="radio"
                name="joining-for"
                value="drinks"
                checked={bookingInfo.joiningFor === "drinks"}
                aria-checked={bookingInfo.joiningFor === "drinks"}
                onChange={(e) =>
                  setBookingInfo({
                    ...bookingInfo,
                    joiningFor: e.target.value,
                  })
                }
              />
              <label htmlFor="radio-drinks">Drinks</label>
            </div>
            <div className="radio-item">
              <input
                type="radio"
                name="joining-for"
                value="food-and-drinks"
                checked={bookingInfo.joiningFor === "food-and-drinks"}
                aria-checked={bookingInfo.joiningFor === "food-and-drinks"}
                onChange={(e) =>
                  setBookingInfo({
                    ...bookingInfo,
                    joiningFor: e.target.value,
                  })
                }
              />
              <label htmlFor="radio-foodanddrinks">Food and drinks</label>
            </div>
          </div>
        </div>
        <div className="input-group">
          <label>Where would you like to sit?</label>
          <div className="radio-container">
            <div className="radio-item">
              <input
                type="radio"
                name="sitting-location"
                value="outside"
                checked={bookingInfo.sittingLocation === "outside"}
                aria-checked={bookingInfo.sittingLocation === "outside"}
                onChange={(e) =>
                  setBookingInfo({
                    ...bookingInfo,
                    sittingLocation: e.target.value,
                  })
                }
              />
              <label htmlFor="radio-drinks">Outside</label>
            </div>
            <div className="radio-item">
              <input
                type="radio"
                name="sitting-location"
                value="indoors"
                checked={bookingInfo.sittingLocation === "indoors"}
                aria-checked={bookingInfo.sittingLocation === "indoors"}
                onChange={(e) =>
                  setBookingInfo({
                    ...bookingInfo,
                    sittingLocation: e.target.value,
                  })
                }
              />
              <label htmlFor="radio-foodanddrinks">Indoors</label>
            </div>
          </div>
        </div>
        <div className="input-group">
          <label>What's the occasion?</label>
          <select
            value={bookingInfo.occasion}
            onChange={(e) =>
              setBookingInfo({ ...bookingInfo, occasion: e.target.value })
            }
          >
            <option value="none">None</option>
            <option value="birthday">Birthday</option>
            <option value="engagement">Engagement</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>
        <div className="input-group">
          <label>Any additional comments?</label>
          <textarea
            value={bookingInfo.comments}
            onChange={(e) =>
              setBookingInfo({ ...bookingInfo, comments: e.target.value })
            }
          />
        </div>
      </fieldset>
    </section>
  );
};

export default TableDetailsFormSection;
