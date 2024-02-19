import React from "react";

const AddressDetailsForm = ({ addressInfo, setAddressInfo }) => {
  <section>
    <fieldset className="input-grid-2">
      <label>Address Details</label>
      <div className="input-group-container">
        <div className="input-group-2">
          <label htmlFor="address-line-one">Line 1</label>
          <input
            id="address-line-one"
            type="text"
            value={addressInfo.line1}
            onChange={(e) =>
              setAddressInfo({ ...addressInfo, line1: e.target.value })
            }
          />
        </div>
        <div className="input-group-2">
          <label htmlFor="address-line-two">Line 2</label>
          <input
            id="address-line-two"
            type="text"
            value={addressInfo.line2}
            onChange={(e) =>
              setAddressInfo({ ...addressInfo, line2: e.target.value })
            }
          />
        </div>
        <div className="input-group-2">
          <label htmlFor="address-line-three">Line 3</label>
          <input
            id="address-line-three"
            type="text"
            value={addressInfo.line3}
            onChange={(e) =>
              setAddressInfo({ ...addressInfo, line3: e.target.value })
            }
          />
        </div>
        <div className="input-group-2">
          <label htmlFor="address-city">City</label>
          <input
            id="address-city"
            type="text"
            value={addressInfo.city}
            onChange={(e) =>
              setAddressInfo({ ...addressInfo, city: e.target.value })
            }
          />
        </div>
        <div className="input-group-2">
          <label htmlFor="address-county">County</label>
          <input
            id="address-county"
            type="text"
            value={addressInfo.county}
            onChange={(e) =>
              setAddressInfo({ ...addressInfo, county: e.target.value })
            }
          />
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
          <input
            id="address-postcode"
            type="text"
            value={addressInfo.postcode}
            onChange={(e) =>
              setAddressInfo({ ...addressInfo, postcode: e.target.value })
            }
          />
        </div>
      </div>
    </fieldset>
  </section>;
};

export default AddressDetailsForm;
