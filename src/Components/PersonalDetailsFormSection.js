import { Field } from "formik";
import React from "react";

const PersonalDetailsFormSection = ({
  personInfo,
  setPersonInfo,
  setFieldValue,
  errors,
  touched,
}) => {
  return (
    <section>
      <h2>Your details</h2>
      <fieldset className="input-grid-2">
        <label>Contact Details</label>
        <div className="input-group-container">
          <div className="input-group-2">
            <label htmlFor="firstName">First name</label>

            <Field
              id="firstName"
              name="firstName"
              type="text"
              value={personInfo.firstName}
              onChange={(e) => {
                setPersonInfo({
                  ...personInfo,
                  firstName: e.target.value,
                });
                setFieldValue("firstName", e.target.value);
              }}
            />
            {errors.firstName && touched.firstName && (
              <span
                data-testid="firstNameError"
                className="field-validation-error"
              >
                {errors.firstName}
              </span>
            )}
          </div>
          <div className="input-group-2">
            <label htmlFor="lastName">Last name</label>
            <Field
              id="lastName"
              name="lastName"
              type="text"
              value={personInfo.lastName}
              onChange={(e) => {
                setPersonInfo({
                  ...personInfo,
                  lastName: e.target.value,
                });
                setFieldValue("lastName", e.target.value);
              }}
            />
            {errors.lastName && touched.lastName && (
              <span className="field-validation-error">{errors.lastName}</span>
            )}
          </div>
          <div className="input-group-2">
            <label htmlFor="email">Email address</label>
            <Field
              id="email"
              name="email"
              type="email"
              value={personInfo.email}
              onChange={(e) => {
                setPersonInfo({
                  ...personInfo,
                  email: e.target.value,
                });
                setFieldValue("email", e.target.value);
              }}
            />
            {errors.email && touched.email && (
              <span className="field-validation-error">{errors.email}</span>
            )}
          </div>
        </div>
      </fieldset>
    </section>
  );
};

export default PersonalDetailsFormSection;
