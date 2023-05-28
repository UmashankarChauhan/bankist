import React from "react";
import "./Summary.css";
import { useSelector } from "react-redux";

const Summary = ({ isSort, setIsSort }) => {
  const handleSort = () => {
    setIsSort(!isSort);
  };
  const acc = useSelector((state) => state.currentAccount);

  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  return (
    <>
      <div className="summary">
        <p className="summary__label">In</p>
        <p className="summary__value summary__value--in">`${incomes}€`</p>
        <p className="summary__label">Out</p>
        <p className="summary__value summary__value--out">
          `${Math.abs(out)}€`
        </p>
        <p className="summary__label">Interest</p>
        <p className="summary__value summary__value--interest">
          `${interest}€`
        </p>
        <button className="btn--sort" onClick={handleSort}>
          &#8693; SORT
        </button>
      </div>
    </>
  );
};

export default Summary;
