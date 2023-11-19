import "./Info.css";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

function Info() {
  const [input, setInput] = useState({ email: "", name: "", phone: "" });
  const [error, setError] = useState({
    emailError: false,
    nameError: false,
    phoneError: false,
  });
  const link = useRef();

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const nameRegex = /^[A-Za-z]+(?:[\s'-][A-Za-z]+)*$/;
  const phoneNumberRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameRegex.test(input.name)) {
      setError((prev) => ({ ...prev, nameError: true }));
    }
    if (!emailRegex.test(input.email)) {
      setError((prev) => ({ ...prev, emailError: true }));
    }
    if (!phoneNumberRegex.test(input.phone)) {
      setError((prev) => ({ ...prev, phoneError: true }));
    }

    if (
      !nameRegex.test(input.name) ||
      !emailRegex.test(input.email) ||
      !phoneNumberRegex.test(input.phone)
    ) {
      return;
    } else {
      link.current.click();
    }
  };

  return (
    <div className="InfoBox">
      <div className="InfoBox-SidebarBox">
        <Sidebar num={1} />
      </div>
      <div className="InfoBox-Content">
        <h1 className="InfoBox-Content-Title">Personal info</h1>
        <p className="InfoBox-Content-Para">
          Please provide your name, email address, and phone number.
        </p>
        <form action="#" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name" className="InfoBox-Content-Label">
            Name
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="e.g.Stephen King"
              className={
                error.nameError
                  ? "InfoBox-Content-Label-Input error"
                  : "InfoBox-Content-Label-Input"
              }
              value={input.name}
              onChange={handleChange}
            />
            {error.nameError && (
              <p className="NameError">This field is required!</p>
            )}
          </label>
          <label htmlFor="email" className="InfoBox-Content-Label">
            Email Address
            <input
              type="email"
              name="email"
              id="email"
              placeholder="e.g.stephenking@lorem.com"
              required
              className={
                error.emailError
                  ? "InfoBox-Content-Label-Input error"
                  : "InfoBox-Content-Label-Input"
              }
              value={input.email}
              onChange={handleChange}
            />
            {error.emailError && (
              <p className="EmailError">This field is required!</p>
            )}
          </label>
          <label htmlFor="phone" className="InfoBox-Content-Label">
            Phone Number
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="e.g. +1234567890"
              required
              className={
                error.phoneError
                  ? "InfoBox-Content-Label-Input error"
                  : "InfoBox-Content-Label-Input"
              }
              value={input.phone}
              onChange={handleChange}
            />
            {error.phoneError && (
              <p className="PhoneError">This field is required!</p>
            )}
          </label>
          <button className="InfoBox-Content-Btn" onSubmit={handleSubmit}>
            next step
          </button>
        </form>
        <div className="InfoBox-Content-LinkBox">
          <Link to="/plan" className="InfoBox-Content-LinkBox-Link" ref={link}>
            next step
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Info;
