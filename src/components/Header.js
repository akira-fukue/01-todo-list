import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecycle } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header">
      <div className="clear">
        <FontAwesomeIcon style={styles.faRecycle} icon={faRecycle} />
      </div>
      <div id="date"></div>
    </div>
  );
}

const styles = {
  faRecycle: {
    fontSize: "30px",
    color: "#6B51C9",
  }
}

export default Header;
