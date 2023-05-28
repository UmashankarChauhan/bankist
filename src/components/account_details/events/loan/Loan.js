import React, { useState } from "react";
import "./Loan.css";
import "../Operation.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { loan } from "../../../../reducers/rootReducer";

const Loan = () => {
  const acc = useSelector((state) => state.currentAccount);

  const dispatch = useDispatch();

  const [amount, setAmount] = useState("");
  const handleLoanRequest = (e) => {
    e.preventDefault();
    dispatch(loan(acc, amount));
    // Reset form fields
    setAmount("");
  };

  return (
    <>
      <div className="operation operation--loan">
        <h2>Request loan</h2>
        <form className="form form--loan">
          <input
            type="number"
            className="form__input form__input--loan-amount"
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            className="form__btn form__btn--loan"
            onClick={handleLoanRequest}
          >
            &rarr;
          </button>
          <label className="form__label form__label--loan">Amount</label>
        </form>
      </div>
    </>
  );
};

export default Loan;
