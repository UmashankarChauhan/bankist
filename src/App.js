import React, { useState } from "react";
import Header from "./components/header/Header";
import Features from "./components/features/Features";
import Operations from "./components/operations/Operations";
import Testimonials from "./components/testimonials/Testimonials";
import OpenAccount from "./components/open_account/OpenAccount";
import Footer from "./components/footer/Footer";
import SignUp from "./components/sign_up/SignUp";
import LoginAccount from "./components/login_account/LoginAccount";
import AccountDetails from "./components/account_details/AccountDetails";
import { useSelector } from "react-redux";

const App = () => {
  const [showOpenAccount, setShowOpenAccount] = useState(false);
  const [showLoginAccount, setShowLoginAccount] = useState(false);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <>
      <Header onLoginAccountClick={() => setShowLoginAccount(true)} />
      <Features />
      <Operations />
      <Testimonials />
      {showOpenAccount && (
        <OpenAccount onClose={() => setShowOpenAccount(false)} />
      )}
      {showLoginAccount && (
        <LoginAccount onClose={() => setShowLoginAccount(false)} />
      )}
      {isLoggedIn && <AccountDetails />}

      <SignUp onOpenAccountClick={() => setShowOpenAccount(true)} />
      <Footer />
    </>
  );
};

export default App;
