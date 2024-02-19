import React from "react";

const PersonalDetailsFormSection = ({ personInfo, setPersonInfo }) => {
  return (
    <section>
      <h2>Your details</h2>
      <fieldset className="input-grid-2">
        <label>Contact Details</label>
        <div className="input-group-container">
          <div className="input-group-2">
            <label htmlFor="first-name">First name</label>
            <input
              type="text"
              value={personInfo.firstName}
              onChange={(e) =>
                setPersonInfo({ ...personInfo, firstName: e.target.value })
              }
            />
          </div>
          <div className="input-group-2">
            <label htmlFor="last-name">Last name</label>
            <input
              type="text"
              value={personInfo.lastName}
              onChange={(e) =>
                setPersonInfo({ ...personInfo, lastName: e.target.value })
              }
            />
          </div>
          <div className="input-group-2">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              value={personInfo.email}
              onChange={(e) =>
                setPersonInfo({ ...personInfo, email: e.target.value })
              }
            />
          </div>
        </div>
      </fieldset>
    </section>
  );
};

export default PersonalDetailsFormSection;
