import React from "react";
import "./Movements.css";
import { useSelector } from "react-redux";

const Movements = ({ isSort }) => {
  const acc = useSelector((state) => state.currentAccount);
  const movs = isSort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  return (
    <>
      <div className="movements">
        {movs.map((mov, i) => {
          const type = mov > 0 ? "deposit" : "withdrawal";
          const classname = `movements__type movements__type--${type}`;
          return (
            <div className="movements__row" key={i + 1}>
              <div className={classname}>
                {i + 1} {type}
              </div>
              <div className="movements__value">₹ {mov}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Movements;
