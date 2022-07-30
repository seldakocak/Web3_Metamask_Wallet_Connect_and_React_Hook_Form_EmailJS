import React from "react";
import "./UserForm";

function SuccesMessage() {
  return (
    <div className="success">
      <p>
        Thanks!
        <br />
        <br />
        Your message has reached us. Please check your mailbox.
        <br />
        <br />
        <span>Don't forget to check your spam box.</span>
      </p>
    </div>
  );
}

export default SuccesMessage;
