import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import "./Summary.css";
import PropTypes from "prop-types";

function Summary({ state, add, setAdd }) {
  const sum = add.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);
  const totalPrice = sum + state.price;
  return (
    <div className="SummaryBox">
      <div className="SummaryBox-Sidebar">
        <Sidebar num={4} />
      </div>
      <div className="SummaryBox-Content">
        <h1 className="SummaryBox-Content-Title">Finishing up</h1>
        <p className="SummaryBox-Content-Para">
          Double-check everything looks OK before confirming
        </p>
        <div className="SummaryBox-Content-Wrapper">
          <div className="SummaryBox-Content-Wrapper-Card">
            <div>
              <h2 className="SummaryBox-Content-Wrapper-Card-Title">
                {state.name} ({state.yearly ? "Yearly" : "Monthly"})
              </h2>
              <Link to="/plan" className="SummaryBox-Content-Wrapper-Card-Link">
                Change
              </Link>
            </div>
            <p className="SummaryBox-Content-Wrapper-Card-Price first">
              ${state.price}/{state.yearly ? "yr" : "mo"}
            </p>
          </div>
          {add.map((el, idx) => (
            <div key={idx} className="SummaryBox-Content-Wrapper-Card">
              <p className="SummaryBox-Content-Wrapper-Card-Name">{el.name}</p>
              <p className="SummaryBox-Content-Wrapper-Card-Price">
                ${el.price}/{el.yearly ? "yr" : "mo"}
              </p>
            </div>
          ))}
        </div>
        <div className="SummaryBox-Content-TotalBox">
          <p className="SummaryBox-Content-TotalBox-Name">
            Total (per {state.yearly ? "year" : "month"})
          </p>
          <p className="SummaryBox-Content-TotalBox-Price">
            ${totalPrice}/{state.yearly ? "yr" : "mo"}
          </p>
        </div>
        <div className="SummaryBox-Content-LinksBox">
          <Link
            className="SummaryBox-Content-LinksBox-Back"
            to="/addons"
            onClick={() => setAdd([])}
          >
            go back
          </Link>
          <Link className="SummaryBox-Content-LinksBox-Next" to="/thank">
            confirm
          </Link>
        </div>
      </div>
    </div>
  );
}

Summary.propTypes = {
  state: PropTypes.object,
  add: PropTypes.array,
  setAdd: PropTypes.func,
};

export default Summary;
