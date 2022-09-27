import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "./side-navigation.scss";

const SideNavigation = (props: any) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className={`sideNavigation ${collapsed ? "collapsed" : ""}`}>
      <div className="sideNavigation__header">
        {collapsed ? (
          <FontAwesomeIcon
            icon={faBars}
            className={"sideNavigation__header__navControlIcon"}
            onClick={() => setCollapsed(false)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faClose}
            className={"sideNavigation__header__navControlIcon"}
            onClick={() => setCollapsed(true)}
          />
        )}
      </div>
      <div className="sideNavigation__navButtons">
        <NavLink end className={"sideNavigation__navButtons__btn"} to={"/"}>
          {!collapsed && <span>{"About"}</span>}
          <FontAwesomeIcon
            icon={faUser}
            className={"sideNavigation__navButtons__btn__icon"}
          />
        </NavLink>
        <NavLink className={"sideNavigation__navButtons__btn"} to={"data"}>
          {!collapsed && <span>{"Coming Soon"}</span>}
          <FontAwesomeIcon
            icon={faQuestion}
            className={"sideNavigation__navButtons__btn__icon"}
          />
        </NavLink>
      </div>
    </div>
  );
};

export default SideNavigation;
