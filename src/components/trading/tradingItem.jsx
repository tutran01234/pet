import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../../assets/dogs.svg";
import { UserContext } from "../contexts/UserContext";
import "./trading.css";

import { User } from "@phosphor-icons/react";
import { NavbarLeft } from "../navbarLeft";
import { Article } from "../../pages/Home/article";

export function ItemTrading(props) {
  const { imageTrading } = props;
  const [isFavorite, setFavorite] = useState(false);
  return (
    <div className="item-trade">
      <div
        className="avatar-trade"
        style={{
          margin: "10px 0 0 10px",

          backgroundImage: `url("${imageTrading}")`,
        }}
      ></div>
      <div className="conetnt-trade">
        <p>Con chó có đít hình trái tim</p>
        <p className="type-trade">trade 1:1</p>
      </div>
      {isFavorite ? (
        <i
          className="fa-solid fa-heart"
          style={{
            color: "red",
            position: "absolute",
            right: "10px",
            bottom: "10px",
          }}
          onClick={() => {
            setFavorite(false);
          }}
        ></i>
      ) : (
        <i
          className="fa-regular fa-heart"
          style={{ position: "absolute", right: "10px", bottom: "10px" }}
          onClick={() => {
            setFavorite(true);
          }}
        ></i>
      )}
    </div>
  );
}
