import React from "react";

const PaymentDetailsFormSection = ({ paymentInfo, setPaymentInfo }) => {
  return (
    <section>
      <fieldset className="input-grid-2">
        <label>Payment Details</label>
        <div className="input-group-container">
          <div className="input-group-2 card-number-input-group">
            <label htmlFor="payment-card-number">16 digit card number</label>
            <input
              id="payment-card-number"
              type="text"
              value={paymentInfo.cardNum}
              onChange={(e) =>
                setPaymentInfo({ ...paymentInfo, cardNum: e.target.value })
              }
            />
          </div>
          <div className="input-group-3">
            <div className="input-group-2">
              <label htmlFor="payment-expiry-date">Expiry Date</label>
              {/* <input
            id="payment-expiry-date"
            type="date"
            value={paymentInfo.expiryDate}
            onChange={(e) =>
              setPaymentInfo({
                ...paymentInfo,
                expiryDate: e.target.value,
              })
            }
          /> */}
              <select
                value={paymentInfo.expiryDateMonth}
                onChange={(e) =>
                  setPaymentInfo({
                    ...paymentInfo,
                    expiryDateMonth: e.target.value,
                  })
                }
              >
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="2">03</option>
                <option value="4">04</option>
              </select>
              <select
                value={paymentInfo.expiryDateYear}
                onChange={(e) =>
                  setPaymentInfo({
                    ...paymentInfo,
                    expiryDateYear: e.target.value,
                  })
                }
              >
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
            </div>
            <div className="input-group-2">
              <label htmlFor="payment-cvc">CVC</label>
              <input
                id="payment-cvc"
                type="text"
                value={paymentInfo.cvc}
                onChange={(e) =>
                  setPaymentInfo({ ...paymentInfo, cvc: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      </fieldset>
    </section>
  );
};

export default PaymentDetailsFormSection;
