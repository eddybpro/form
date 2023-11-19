import Sidebar from "../Sidebar";
import "./Plan.css";
import { Advanced, Arcade, Pro } from "../../assets";
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";

function Plan({ setIsMonthly, setState }) {
  const [yearly, setYearly] = useState(false);
  const [plan, setPlan] = useState({
    arcade: false,
    advanced: false,
    pro: false,
  });

  const handleChange = (e) => {
    setYearly((prev) => !prev);
    if (e.target.checked) {
      setIsMonthly(false);
    } else {
      setIsMonthly(true);
    }
  };

  const handlePlan1 = () => {
    setPlan((prev) => ({
      ...prev,
      arcade: !plan.arcade,
      advanced: false,
      pro: false,
    }));

    setState((prev) => ({
      ...prev,
      name: "Arcade",
      price: yearly ? 90 : 9,
      yearly: yearly ? true : false,
    }));
  };

  const handlePlan2 = () => {
    setPlan((prev) => ({
      ...prev,
      advanced: !plan.advanced,
      arcade: false,
      pro: false,
    }));

    setState((prev) => ({
      ...prev,
      name: "Advanced",
      price: yearly ? 120 : 12,
      yearly: yearly ? true : false,
    }));
  };
  const handlePlan3 = () => {
    setPlan((prev) => ({
      ...prev,
      pro: !plan.pro,
      arcade: false,
      advanced: false,
    }));
    setState((prev) => ({
      ...prev,
      name: "Pro",
      price: yearly ? 150 : 15,
      yearly: yearly ? true : false,
    }));
  };

  return (
    <div className="PlanBox">
      <div className="PlanBox-SideBox">
        <Sidebar num={2} />
      </div>
      <div className="PlanBox-Content">
        <h1 className="PlanBox-Content-Title">Select your plan</h1>
        <p className="PlanBox-Content-Para">
          You have the option of monthly or yearly billing
        </p>
        <div className="PlanBox-Content-PlansBox">
          <div
            className={
              plan.arcade
                ? "PlanBox-Content-PlansBox-Plan pro"
                : "PlanBox-Content-PlansBox-Plan"
            }
            onClick={handlePlan1}
          >
            <img
              src={Arcade}
              alt=""
              className="PlanBox-Content-PlansBox-Plan-Img"
            />
            <div>
              <h2 className="PlanBox-Content-PlansBox-Plan-Name">arcade</h2>
              <p className="PlanBox-Content-PlansBox-Plan-Desc">
                {yearly ? "$90/yr" : "$9/mo"}
              </p>
              {yearly && (
                <p className="PlanBox-Content-PlansBox-Plan-yearly">
                  2 months free
                </p>
              )}
            </div>
          </div>
          <div
            className={
              plan.advanced
                ? "PlanBox-Content-PlansBox-Plan pro"
                : "PlanBox-Content-PlansBox-Plan"
            }
            onClick={handlePlan2}
          >
            <img
              src={Advanced}
              alt=""
              className="PlanBox-Content-PlansBox-Plan-Img"
            />
            <div>
              <h2 className="PlanBox-Content-PlansBox-Plan-Name">advanced</h2>
              <p className="PlanBox-Content-PlansBox-Plan-Desc">
                {yearly ? "$120/yr" : "$12/mo"}
              </p>
              {yearly && (
                <p className="PlanBox-Content-PlansBox-Plan-yearly">
                  2 months free
                </p>
              )}
            </div>
          </div>
          <div
            className={
              plan.pro
                ? "PlanBox-Content-PlansBox-Plan pro"
                : "PlanBox-Content-PlansBox-Plan"
            }
            onClick={handlePlan3}
          >
            <img
              src={Pro}
              alt=""
              className="PlanBox-Content-PlansBox-Plan-Img"
            />
            <div>
              <h2 className="PlanBox-Content-PlansBox-Plan-Name">pro</h2>
              <p className="PlanBox-Content-PlansBox-Plan-Desc">
                {yearly ? "$150/yr" : "$15/mo"}
              </p>
              {yearly && (
                <p className="PlanBox-Content-PlansBox-Plan-yearly">
                  2 months free
                </p>
              )}
            </div>
          </div>
        </div>
        <label htmlFor="plan" className="PlanBox-Content-Label">
          monthly
          <input
            type="checkbox"
            name="plan"
            id="plan"
            className="PlanBox-Content-Label-Input"
            onChange={handleChange}
          />
          <span>yearly</span>
        </label>
        <div className="PlanBox-Content-LinksBox">
          <Link className="PlanBox-Content-LinksBox-Back" to="/">
            go back
          </Link>
          <Link className="PlanBox-Content-LinksBox-Next" to="/addons">
            next step
          </Link>
        </div>
      </div>
    </div>
  );
}

Plan.propTypes = {
  setIsMonthly: PropTypes.func,
  setState: PropTypes.func,
};

export default Plan;
