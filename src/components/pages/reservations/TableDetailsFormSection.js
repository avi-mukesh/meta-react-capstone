import { Field } from "formik";
import React from "react";

const TableDetailsFormSection = ({
  availableTimes,
  dispatch,
  bookingInfo,
  setBookingInfo,
  setFieldValue,
  errors,
  touched,
}) => {
  return (
    <section aria-label="Table details section">
      <h2>Table Details</h2>
      <fieldset className="input-grid">
        <div className="input-group">
          <label htmlFor="bookingDate">Choose your date</label>

          <Field
            id="bookingDate"
            name="date"
            type="date"
            value={bookingInfo.date}
            onChange={(e) => {
              setBookingInfo({ ...bookingInfo, date: e.target.value });
              setFieldValue("date", e.target.value);
              dispatch({ type: "date_change", date: e.target.value });
            }}
          />
          {errors.date && touched.date && (
            <span className="field-validation-error">{errors.date}</span>
          )}
        </div>
        <div className="input-group">
          <label htmlFor="bookingTime">Choose your time</label>
          <Field
            id="bookingTime"
            as="select"
            name="time"
            onChange={(e) => {
              setBookingInfo({ ...bookingInfo, time: e.target.value });
              setFieldValue("time", e.target.value);
            }}
          >
            {availableTimes.map((time) => (
              <option value={time} key={time}>
                {time}
              </option>
            ))}
          </Field>
        </div>
        <div className="input-group">
          <label htmlFor="numPeople">Number of people</label>
          <Field
            id="numPeople"
            type="number"
            name="numPeople"
            min="1"
            max="8"
            value={bookingInfo.numPeople}
            onChange={(e) => {
              setBookingInfo({ ...bookingInfo, numPeople: e.target.value });
              setFieldValue("numPeople", e.target.value);
            }}
          />
          {errors.numPeople && touched.numPeople && (
            <span
              data-testid="numPeopleValidation"
              className="field-validation-error"
            >
              {errors.numPeople}
            </span>
          )}
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
          <label htmlFor="occasion">What's the occasion?</label>
          <Field
            id="occasion"
            name="occasion"
            as="select"
            onChange={(e) => {
              setBookingInfo({ ...bookingInfo, occasion: e.target.value });
              setFieldValue("occasion", e.target.value);
            }}
          >
            <option value="none">None</option>
            <option value="birthday">Birthday</option>
            <option value="engagement">Engagement</option>
            <option value="anniversary">Anniversary</option>
          </Field>
        </div>
        <div className="input-group">
          <label htmlFor="comments">Any additional comments?</label>

          <Field
            id="comments"
            as="textarea"
            name="comments"
            value={bookingInfo.comments}
            onChange={(e) => {
              setBookingInfo({ ...bookingInfo, comments: e.target.value });
              setFieldValue("comments", e.target.value);
            }}
          />
          {errors.comments && touched.comments && (
            <span className="field-validation-error">{errors.comments}</span>
          )}
        </div>
      </fieldset>
    </section>
  );
};

export default TableDetailsFormSection;
