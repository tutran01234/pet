import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { Button } from "../Forms/Button";
import { Input } from "../Forms/Input/index";
import { UserContext } from "../contexts/UserContext";
import { Warning } from "../Warning";
import { Head } from "../Head/index";
import "../../pages/Home/home.css";

export function NavbarLeft(props) {
  const { handleTab } = props;
  const [isActive, setIsActive] = useState("post");
  const activeCss = {
    color: "orange",
    backgroundColor: "rgba(255, 119, 0, 0.13)",
    borderLeft: "3px solid rgb(255, 94, 0)",
  };
  return (
    <div className="navbar-left">
      <div style={{ height: "50px" }}></div>
      <div
        style={isActive === "post" ? activeCss : {}}
        className="post-list"
        onClick={() => {
          setIsActive("post");
          handleTab("posting");
        }}
      >
        <div className="center">
          <i className="fa fa-home"></i>
          <p>Posting</p>
        </div>
      </div>
      <div
        className="post-list"
        style={isActive === "trade" ? activeCss : {}}
        onClick={() => {
          setIsActive("trade");
          handleTab("trading");
        }}
      >
        <div className="center">
          <i className="fa fa-shop"></i>
          <p>Trading</p>
        </div>
      </div>
    </div>
  );
}
