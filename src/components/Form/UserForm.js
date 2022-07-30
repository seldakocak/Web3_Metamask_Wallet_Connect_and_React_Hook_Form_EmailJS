import React, { useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import SuccesMessage from "./SuccesMessage";
import "./UserForm.css";

function UserForm(props) {
  const {
    register,
    formState: { errors, isValid, },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    setIsSuccess(true);

    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data, 'YOUR_PUBLIC_KEY')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="content">
      <main>
        {isSuccess && <SuccesMessage />}
        {!isSuccess && (
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <h1>NFT Collection Form for Airdrop</h1>
            <label>First Name</label>
            <input
              {...register("firstname", {
                required: "This input is required.",
                pattern: {
                  value: /^[A-Za-z-ğüşöçıİĞÜŞÖÇ]+$/i,
                  message: "Alphabetical characters only",
                },
                maxLength: {
                  value: 30,
                  message: "This input must exceed 30 characters",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="firstname"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p key={type}>{message}</p>
                    ))
                  : null;
              }}
            />

            <label>Last Name</label>
            <input
              {...register("lastname", {
                required: "This input is required.",
                pattern: {
                  value: /^[A-Za-z-ğüşöçıİĞÜŞÖÇ]+$/i,
                  message: "Alphabetical characters only",
                },
                maxLength: {
                  value: 30,
                  message: "This input must exceed 30 characters",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="lastname"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p key={type}>{message}</p>
                    ))
                  : null;
              }}
            />

            <label>E-mail</label>
            <input
              {...register("email", {
                required: "This input is required.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Enter a valid e-mail address",
                },
                maxLength: {
                  value: 50,
                  message: "This input must exceed 50 characters",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p key={type}>{message}</p>
                    ))
                  : null;
              }}
            />

            <label>Wallet Address</label>
            <input
              value=""
              className="walletText"
              {...register("wallet", {
                required: "Please connect to your metamask wallet.",
                pattern: {
                  value: /^[A-Za-z0-9]+$/i,
                  message: "Enter a valid wallet address",
                },
                maxLength: {
                  value: 100,
                  message: "This input must exceed 50 characters",
                },
                // disabled: true,
                disabled: isValid,
              })}
            />
            <ErrorMessage
              errors={errors}
              name="wallet"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p key={type}>{message}</p>
                    ))
                  : null;
              }}
            />

            <div className="form-group form-check">
              <input
                name="acceptTerms"
                type="checkbox"
                {...register("acceptTerms", {
                  required: "This input is required.",
                })}
                id="acceptTerms"
                className={`form-check-input ${
                  errors.acceptTerms ? "is-invalid" : ""
                }`}
              />
              <label htmlFor="acceptTerms" className="form-check-label">
                Accept Terms & Conditions
              </label>
            </div>

            <ErrorMessage
              errors={errors}
              name="acceptTerms"
              render={({ messages }) => {
                console.log("messages", messages);
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p key={type}>{message}</p>
                    ))
                  : null;
              }}
            />

            <input type="submit" value="Send" />
          </form>
        )}
      </main>
    </div>
  );
}

export default UserForm;
