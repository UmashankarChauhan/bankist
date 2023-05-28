import React from "react";

import "./SignUp.css";

const SignUp = ({ onOpenAccountClick }) => {
  return (
    <>
      <section className="section section--sign-up">
        <div className="section__title">
          <h3 className="section__header">
            The best day to join Bankist was one year ago. The second best is
            today!
          </h3>
        </div>
        <button className="btn btn--show-modal" onClick={onOpenAccountClick}>
          Open your free account today!
        </button>
      </section>
    </>
  );
};

export default SignUp;
