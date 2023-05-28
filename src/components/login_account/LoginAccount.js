import React, { useState } from "react";
import "../open_account/OpenAccount.css";
import { useDispatch } from "react-redux";
import { login } from "../../reducers/rootReducer";

function LoginAccount({ onClose }) {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, Number(pin)));
    setUsername("");
    setPin("");

    // Close the modal after submitting the form
    onClose();
  };

  return (
    <>
      <div className="modal">
        <button className="btn--close-modal" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal__header">Login to your account</h2>
        <form className="modal__form" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
          />
          <button className="btn" type="submit">
            Login &rarr;
          </button>
        </form>
      </div>
      <div class="overlay hidden" onClick={onClose}></div>
    </>
  );
}

export default LoginAccount;
