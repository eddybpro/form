import Sidebar from "../Sidebar";
import "./Thank.css";
import { ThankImg } from "../../assets";

function Thank() {
  return (
    <div className="ThankBox">
      <div className="ThankBox-Sidebar">
        <Sidebar num={4} />
      </div>
      <div className="ThankBox-Content">
        <img src={ThankImg} alt="" className="ThankBox-Content-Img" />
        <h1 className="ThankBox-Content-Title">Thank you!</h1>
        <p className="ThankBox-Content-Para">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@foremgaming.com.
        </p>
      </div>
    </div>
  );
}
export default Thank;
