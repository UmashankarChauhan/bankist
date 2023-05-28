import React from "react";
import "./Balance.css";
import { useSelector } from "react-redux";

const Balance = () => {
  const acc = useSelector((state) => state.currentAccount);
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  const date = new Date().toLocaleDateString().padStart(10, "0");
  return (
    <>
      <div className="balance">
        <div>
          <p className="balance__label">Current balance</p>
          <p className="balance__date">
            As of <span className="date">{date}</span>
          </p>
        </div>
        <p className="balance__value">₹ {acc.balance} </p>
      </div>
    </>
  );
};

export default Balance;
