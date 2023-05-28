import React, { useState } from "react";
import "./Close.css";
import "../Operation.css";
import { useDispatch } from "react-redux";
import { closeAccount } from "../../../../reducers/rootReducer";

const Close = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");

  const handleAccountClosure = (e) => {
    e.preventDefault();
    dispatch(closeAccount(username, pin));
    setUsername("");
    setPin("");
  };

  return (
    <>
      <div className="operation operation--close">
        <h2>Close account</h2>
        <form className="form form--close">
          <input
            type="text"
            className="form__input form__input--user"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            maxLength="6"
            className="form__input form__input--pin"
            onChange={(e) => setPin(e.target.value)}
          />
          <button
            className="form__btn form__btn--close"
            onClick={() => handleAccountClosure}
          >
            &rarr;
          </button>
          <label className="form__label">Confirm user</label>
          <label className="form__label">Confirm PIN</label>
        </form>
      </div>
    </>
  );
};

export default Close;
