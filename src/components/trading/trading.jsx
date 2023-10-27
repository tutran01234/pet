import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../../assets/dogs.svg";
import { UserContext } from "../contexts/UserContext";
import "./trading.css";

import { User } from "@phosphor-icons/react";
import { NavbarLeft } from "../navbarLeft";
import { Article } from "../../pages/Home/article";
import { ItemTrading } from "./tradingItem";

export function Trading(props) {
  const { setTabDetail } = props;
  return (
    <div style={{ width: "65%", height: "100vh" }}>
      <h1
        style={{
          marginTop: "20px",
          fontWeight: 500,
          fontSize: "22px",
          color: "black",
        }}
      >
        Trading post
      </h1>
      <ItemTrading
        setTabDetail={setTabDetail}
        imageTrading={
          "https://img.freepik.com/premium-photo/young-pembroke-welsh-corgi-isolated_87557-18774.jpg?w=740"
        }
      />
      <ItemTrading
        imageTrading={
          "https://img.freepik.com/premium-photo/red-cat-isolated-white-background_333900-3173.jpg?size=626&ext=jpg&ga=GA1.1.291117871.1697699581&semt=sph"
        }
      />
      <ItemTrading
        imageTrading={
          "https://img.freepik.com/premium-photo/young-pembroke-welsh-corgi-isolated_87557-18774.jpg?w=740"
        }
      />
      <ItemTrading
        imageTrading={
          "https://img.freepik.com/premium-photo/young-pembroke-welsh-corgi-isolated_87557-18774.jpg?w=740"
        }
      />
    </div>
  );
}
