import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../Operation.css";
import "./Transfer.css";
// import { useSelector } from "react-redux";

import { transfer } from "../../../../reducers/rootReducer";

const Transfer = () => {
  // const acc = useSelector((state) => state.currentAccount);

  const dispatch = useDispatch();

  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = (e) => {
    e.preventDefault();
    dispatch(transfer(to, amount));
    // Reset form fields
    setTo("");
    setAmount("");
  };
  return (
    <>
      <div className="operation operation--transfer">
        <h2>Transfer money</h2>

        <form className="form form--transfer" onSubmit={handleTransfer}>
          <input
            type="text"
            className="form__input form__input--to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <input
            type="number"
            className="form__input form__input--amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button className="form__btn form__btn--transfer" type="submit">
            &rarr;
          </button>
          <label className="form__label">Transfer to</label>
          <label className="form__label">Amount</label>
        </form>
      </div>
    </>
  );
};

export default Transfer;
