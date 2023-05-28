import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../reducers/rootReducer";
import "./AccountDetails.css";
import Balance from "./balance/Balance";
import Movements from "./movements/Movements";
import Summary from "./summary/Summary";
import Transfer from "./events/transfer/Transfer";
import Loan from "./events/loan/Loan";
import Close from "./events/close/Close";

const AccountDetails = () => {
  const dispatch = useDispatch();

  const [isSort, setIsSort] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <main className="account--container">
        {/* <!-- BALANCE --> */}
        <Balance />

        {/* <!-- MOVEMENTS --> */}
        <Movements isSort={isSort} />

        {/* <!-- SUMMARY --> */}
        <Summary setIsSort={setIsSort} />

        {/* <!-- OPERATION: TRANSFERS --> */}
        <Transfer />

        {/* <!-- OPERATION: LOAN --> */}
        <Loan />

        {/* <!-- OPERATION: CLOSE --> */}
        <Close />
      </main>
      <div class="overlay--account_detail">
        <div className="nav__item logout">
          <button className="nav__link--btn logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;

// onClick={onLogoutAccountClick}
