import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./side-navigation.scss";
import menuIcon from "../../assets/bars-solid.svg";
import closeIcon from "../../assets/xmark-regular.svg";

const SideNavigation = (props: any) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="sideNavigation">
      <div className="navButtons">
        {collapsed ? (
          <img
            src={menuIcon}
            alt={"logo"}
            onClick={() => setCollapsed(false)}
          />
        ) : (
          <img
            src={closeIcon}
            alt={"logo"}
            onClick={() => setCollapsed(true)}
          />
        )}
        <NavLink end className={"btn"} to={"/"}>
          {"About"}
        </NavLink>
        <NavLink className={"btn"} to={"data"}>
          {"Data"}
        </NavLink>
      </div>
    </div>
  );
};

export default SideNavigation;
