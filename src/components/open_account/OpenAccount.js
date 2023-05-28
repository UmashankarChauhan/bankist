import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAccount } from "../../reducers/rootReducer";
import "./OpenAccount.css";

const OpenAccount = ({ onClose }) => {
  const dispatch = useDispatch();

  const [owner, setOwner] = useState("");
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data or perform any necessary actions
    const newAccount = {
      owner: owner,
      username: username,
      movements: [1000, 500, -250, 300, 50, 2500],
      interestRate: 1.5,
      pin: parseInt(pin),
    };

    console.log("Form submitted!");
    dispatch(addAccount(newAccount));

    // Close the modal after submitting the form
    onClose();
  };

  return (
    <>
      <div className="modal">
        <button className="btn--close-modal" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal__header">
          Open your bank account <br />
          in just <span className="highlight">5 minutes</span>
        </h2>
        <form className="modal__form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            required
          />
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>PIN</label>
          <input
            type="number"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
          />
          <button className="btn" type="submit">
            Submit &rarr;
          </button>
        </form>
      </div>
      <div class="overlay" onClick={onClose}></div>
    </>
  );
};

export default OpenAccount;
