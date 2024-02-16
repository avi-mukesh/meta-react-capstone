import React from "react";
import { Hero } from "./Hero";
import marioadrian from "../images/mario-adrian.webp";

const ReservationsPage = () => {
  return (
    <main id="reservationPage">
      <Hero
        title="Reservations"
        subtitle="Simple and easily make a reservation in advance to guarantee a table upon arrival."
        image={marioadrian}
      />
      <section>
        <h2>Table Details</h2>
        <fieldset className="input-grid">
          <div className="input-group">
            <label>Choose your date</label>
            <input type="date" />
          </div>
          <div className="input-group">
            <label>Choose your time</label>
            <input type="time" />
          </div>
          <div className="input-group">
            <label>Number of people</label>
            <input type="number" max="8" />
          </div>
          <div className="input-group">
            <label>What will you be joining us for?</label>
            <div className="radio-container">
              <div className="radio-item">
                <input
                  type="radio"
                  id="radio-drinks"
                  name="joining-for"
                  value="Drinks"
                />
                <label for="radio-drinks">Drinks</label>
              </div>
              <div className="radio-item">
                <input
                  type="radio"
                  id="radio-foodanddrinks"
                  name="joining-for"
                  value="Food and drinks"
                />
                <label for="radio-foodanddrinks">Food and drinks</label>
              </div>
            </div>
          </div>
          <div className="input-group">
            <label>Where would you like to sit?</label>
            <div className="radio-container">
              <div className="radio-item">
                <input
                  type="radio"
                  id="radio-outside"
                  name="sitting-location"
                  value="outside"
                />
                <label for="radio-drinks">Outside</label>
              </div>
              <div className="radio-item">
                <input
                  type="radio"
                  id="radio-indoors"
                  name="sitting-location"
                  value="indoors"
                />
                <label for="radio-foodanddrinks">Indoors</label>
              </div>
            </div>
          </div>
          <div className="input-group">
            <label>What's the occasion?</label>
            <select>
              <option>None</option>
              <option>Birthday</option>
              <option>Engagement</option>
              <option>Anniversary</option>
            </select>
          </div>
          <div className="input-group">
            <label>Any additional comments?</label>
            <textarea />
          </div>
        </fieldset>
      </section>
      <section>
        <h2>Your details</h2>
        <fieldset className="input-grid-2">
          <label>Contact Details</label>
          <div className="input-group-container">
            <div className="input-group-2">
              <label for="first-name">First name</label>
              <input type="text" />
            </div>
            <div className="input-group-2">
              <label for="last-name">Last name</label>
              <input type="text" />
            </div>
            <div className="input-group-2">
              <label for="email">Email address</label>
              <input type="email" />
            </div>
          </div>
        </fieldset>
      </section>
      <section>
        <fieldset className="input-grid-2">
          <label>Addres Details</label>
          <div className="input-group-container">
            <div className="input-group-2">
              <label for="address-line-one">Line 1</label>
              <input id="address-line-one" type="text" />
            </div>
            <div className="input-group-2">
              <label for="address-line-two">Line 2</label>
              <input id="address-line-two" type="text" />
            </div>
            <div className="input-group-2">
              <label for="address-line-three">Line 3</label>
              <input id="address-line-three" type="text" />
            </div>
            <div className="input-group-2">
              <label for="address-city">City</label>
              <input id="address-city" type="text" />
            </div>
            <div className="input-group-2">
              <label for="address-county">County</label>
              <input id="address-county" type="text" />
            </div>
            <div className="input-group-2">
              <label for="address-country">Country</label>
              <select id="address-country">
                <option>United Kingdom</option>
                <option>India</option>
                <option>France</option>
              </select>
            </div>
            <div className="input-group-2">
              <label for="address-postcode">Postcode</label>
              <input id="address-postcode" type="text" />
            </div>
          </div>
        </fieldset>
      </section>
      <section>
        <fieldset className="input-grid-2">
          <label>Addres Details</label>
          <div className="input-group-container">
            <div className="input-group-2 card-number-input-group">
              <label for="payment-card-number">16 digit card number</label>
              <input id="payment-card-number" type="text" />
            </div>
            <div className="input-group-3">
              <div className="input-group-2">
                <label for="address-line-two">Expiry Date</label>
                <input id="address-line-two" type="date" />
              </div>
              <div className="input-group-2">
                <label for="address-line-two">CVC</label>
                <input id="address-line-two" type="text" />
              </div>
            </div>
          </div>
        </fieldset>
      </section>
      <button className="button">Make Reservation</button>
    </main>
  );
};

export default ReservationsPage;
