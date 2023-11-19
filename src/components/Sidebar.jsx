import "./Sidebar.css";
import PropTypes from "prop-types";

function Sidebar({ num }) {
  return (
    <div className="SidebarBox">
      <div>
        <div
          className={
            num == 1 ? "SidebarBox-NumBox active" : "SidebarBox-NumBox"
          }
        >
          <p>1</p>
        </div>
        <div className="SidebarBox-TxtBox desktop">
          <p className="SidebarBox-TxtBox-StepPara">step 1</p>
          <p className="SidebarBox-TxtBox-NamePara">your info</p>
        </div>
      </div>
      <div>
        <div
          className={
            num == 2 ? "SidebarBox-NumBox active" : "SidebarBox-NumBox"
          }
        >
          <p>2</p>
        </div>
        <div className="SidebarBox-TxtBox desktop">
          <p className="SidebarBox-TxtBox-StepPara">step 2</p>
          <p className="SidebarBox-TxtBox-NamePara">select plan</p>
        </div>
      </div>
      <div>
        <div
          className={
            num == 3 ? "SidebarBox-NumBox active" : "SidebarBox-NumBox"
          }
        >
          <p>3</p>
        </div>
        <div className="SidebarBox-TxtBox desktop">
          <p className="SidebarBox-TxtBox-StepPara">step 3</p>
          <p className="SidebarBox-TxtBox-NamePara">add-ons</p>
        </div>
      </div>
      <div>
        <div
          className={
            num == 4 ? "SidebarBox-NumBox active" : "SidebarBox-NumBox"
          }
        >
          <p>4</p>
        </div>
        <div className="SidebarBox-TxtBox desktop">
          <p className="SidebarBox-TxtBox-StepPara">step 4</p>
          <p className="SidebarBox-TxtBox-NamePara">summary</p>
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  num: PropTypes.number,
};

export default Sidebar;
