import { useState } from "react";
import Sidebar from "../Sidebar";
import "./AddOns.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function AddOns({ isMonthly, setAdd }) {
  const [service, setService] = useState(false);
  const [storage, setStorage] = useState(false);
  const [profile, setProfile] = useState(false);

  const handleService = () => {
    setService((prev) => !prev);
    const obj = {
      name: "Online service",
      price: isMonthly ? 1 : 10,
      yearly: isMonthly ? false : true,
    };
    setAdd((prev) => [...prev, obj]);
  };

  const handleStorage = () => {
    setStorage((prev) => !prev);
    const obj = {
      name: "Larger storage",
      price: isMonthly ? 2 : 20,
      yearly: isMonthly ? false : true,
    };
    setAdd((prev) => [...prev, obj]);
  };

  const handleProfile = () => {
    setProfile((prev) => !prev);
    const obj = {
      name: "Customizable profile",
      price: isMonthly ? 1 : 10,
      yearly: isMonthly ? false : true,
    };
    setAdd((prev) => [...prev, obj]);
  };

  return (
    <div className="AddOnsBox">
      <div className="AddOnsBox-Sidebar">
        <Sidebar num={3} />
      </div>
      <div className="AddOnsBox-Content">
        <h1 className="AddOnsBox-Content-Title">Pick add-ons</h1>
        <p className="AddOnsBox-Content-Para">
          Add-ons help enhance your gaming experience.
        </p>
        <div
          className={
            service
              ? "AddOnsBox-Content-Form profile"
              : "AddOnsBox-Content-Form"
          }
        >
          <input
            type="checkbox"
            name="service"
            id="service"
            className="AddOnsBox-Content-Form-Input"
            onChange={handleService}
          />
          <div className="AddOnsBox-Content-Form-Box">
            <h2 className="AddOnsBox-Content-Form-Box-Title">Online service</h2>
            <p className="AddOnsBox-Content-Form-Box-Para">
              Access to multiplayer games
            </p>
          </div>
          <p className="AddOnsBox-Content-Form-Price">
            {isMonthly ? "+$1/mo" : "+$10/yr"}
          </p>
        </div>
        <div
          className={
            storage
              ? "AddOnsBox-Content-Form profile"
              : "AddOnsBox-Content-Form"
          }
        >
          <input
            type="checkbox"
            name="service"
            id="storage"
            className="AddOnsBox-Content-Form-Input"
            onChange={handleStorage}
          />
          <div className="AddOnsBox-Content-Form-Box">
            <h2 className="AddOnsBox-Content-Form-Box-Title">Larger storage</h2>
            <p className="AddOnsBox-Content-Form-Box-Para">
              Extra 1TB of cloud save
            </p>
          </div>
          <p className="AddOnsBox-Content-Form-Price">
            {isMonthly ? "+$2/mo" : "+$20/yr"}
          </p>
        </div>
        <div
          className={
            profile
              ? "AddOnsBox-Content-Form profile"
              : "AddOnsBox-Content-Form"
          }
        >
          <input
            type="checkbox"
            name="service"
            id="profile"
            className="AddOnsBox-Content-Form-Input"
            onChange={handleProfile}
          />
          <div className="AddOnsBox-Content-Form-Box">
            <h2 className="AddOnsBox-Content-Form-Box-Title">
              Customizable profile
            </h2>
            <p className="AddOnsBox-Content-Form-Box-Para">
              Custom theme on your profile
            </p>
          </div>
          <p className="AddOnsBox-Content-Form-Price">
            {isMonthly ? "+$1/mo" : "+$10/yr"}
          </p>
        </div>
        <div className="AddOnsBox-Content-LinksBox">
          <Link className="AddOnsBox-Content-LinksBox-Back" to="/plan">
            go back
          </Link>
          <Link className="AddOnsBox-Content-LinksBox-Next" to="/summary">
            next step
          </Link>
        </div>
      </div>
    </div>
  );
}

AddOns.propTypes = {
  isMonthly: PropTypes.bool,
  setAdd: PropTypes.func,
};

export default AddOns;
