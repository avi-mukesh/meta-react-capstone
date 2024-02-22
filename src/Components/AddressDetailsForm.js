import { Field } from "formik";
import React from "react";

const AddressDetailsForm = ({
  addressInfo,
  setAddressInfo,
  setFieldValue,
  errors,
  touched,
}) => {
  return (
    <section>
      <fieldset className="input-grid-2">
        <label>Address Details</label>
        <div className="input-group-container">
          <div className="input-group-2">
            <label htmlFor="address-line-one">Line 1</label>
            <Field
              id="address-line-one"
              name="line1"
              type="text"
              value={addressInfo.line1}
              onChange={(e) => {
                setAddressInfo({ ...addressInfo, line1: e.target.value });
                setFieldValue("line1", e.target.value);
              }}
            />
            {errors.line1 && touched.line1 && (
              <span className="field-validation-error">{errors.line1}</span>
            )}
          </div>
          <div className="input-group-2">
            <label htmlFor="address-line-two">Line 2</label>
            <Field
              id="address-line-two"
              name="line2"
              type="text"
              value={addressInfo.line2}
              onChange={(e) => {
                setAddressInfo({ ...addressInfo, line2: e.target.value });
                setFieldValue("line2", e.target.value);
              }}
            />
            {errors.line2 && touched.line2 && (
              <span className="field-validation-error">{errors.line2}</span>
            )}
          </div>
          <div className="input-group-2">
            <label htmlFor="address-line-three">Line 3</label>
            <Field
              id="address-line-three"
              name="line3"
              type="text"
              value={addressInfo.line3}
              onChange={(e) => {
                setAddressInfo({ ...addressInfo, line3: e.target.value });
                setFieldValue("line3", e.target.value);
              }}
            />
            {errors.line3 && touched.line3 && (
              <span className="field-validation-error">{errors.line3}</span>
            )}
          </div>
          <div className="input-group-2">
            <label htmlFor="address-city">City</label>
            <Field
              id="address-city"
              name="city"
              type="text"
              value={addressInfo.city}
              onChange={(e) => {
                setAddressInfo({ ...addressInfo, city: e.target.value });
                setFieldValue("city", e.target.value);
              }}
            />
            {errors.city && touched.city && (
              <span className="field-validation-error">{errors.city}</span>
            )}
          </div>
          <div className="input-group-2">
            <label htmlFor="address-county">County</label>
            <Field
              id="address-county"
              name="county"
              type="text"
              value={addressInfo.county}
              onChange={(e) => {
                setAddressInfo({ ...addressInfo, county: e.target.value });
                setFieldValue("county", e.target.value);
              }}
            />
            {errors.county && touched.county && (
              <span className="field-validation-error">{errors.county}</span>
            )}
          </div>
          <div className="input-group-2">
            <label htmlFor="address-country">Country</label>
            <select
              id="address-country"
              value={addressInfo.country}
              onChange={(e) =>
                setAddressInfo({ ...addressInfo, country: e.target.value })
              }
            >
              <option value="united-kingdom">United Kingdom</option>
              <option value="india">India</option>
              <option value="france">France</option>
            </select>
          </div>
          <div className="input-group-2">
            <label htmlFor="address-postcode">Postcode</label>
            <Field
              id="address-postcode"
              name="postcode"
              type="text"
              value={addressInfo.postcode}
              onChange={(e) => {
                setAddressInfo({ ...addressInfo, postcode: e.target.value });
                setFieldValue("postcode", e.target.value);
              }}
            />
            {errors.postcode && touched.postcode && (
              <span className="field-validation-error">{errors.postcode}</span>
            )}
          </div>
        </div>
      </fieldset>
    </section>
  );
};

export default AddressDetailsForm;
