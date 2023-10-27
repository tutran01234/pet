import React, { useContext } from "react";
import "./trading.css";
import { ItemTrading } from "./tradingItem";

export function DetailTrade() {
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
      <div
        style={{
          height: "850px",
          borderRadius: "10px",
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "64%",
            backgroundColor: "#fff",
            borderRadius: "10px",
          }}
        >
          <div style={{ width: "95%", margin: "0 auto" }}>
            <img
              src="https://kenh14cdn.com/thumb_w/660/2019/5/18/photo-9-1558183156886996747997.jpg"
              style={{
                width: "100%",
                borderRadius: "10px",
                margin: "10px auto",
              }}
            ></img>
            <h5 style={{ fontWeight: "500" }}>
              Need to give away a corgi dog with a super cute heart-shaped butt
            </h5>
            <h5 style={{ fontWeight: "500", color: "red" }}>Give Away</h5>

            <p style={{ fontWeight: "300", margin: "10px 0" }}>
              <p style={{ fontWeight: "300", margin: "10px 0" }}>
                Pet breed: Corgi
              </p>
              I need to find a new home for my corgi puppy, super beautiful blue
              eyes. All children have been vaccinated and dewormed and are in
              excellent health. Just go home now.
            </p>
            <p style={{ fontWeight: "300" }}>Ship nationwide.</p>
            <div style={{ height: "35px" }}></div>
            <p>Area : Ho Chi Minh</p>
          </div>
        </div>
        <div
          style={{
            width: "34%",
            backgroundColor: "#fff",
            height: "200px",
            borderRadius: "10px",
          }}
        >
          <div style={{ display: "flex", width: "95%", margin: "10px auto" }}>
            <div
              onClick={() => {
                setDropDown(!isDropdown);
              }}
              className="avata-trade"
              style={{
                backgroundImage: `url("https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
              }}
            ></div>
            <div style={{ marginLeft: "10px" }}>
              <h5>Anh bán chó đầu gấu</h5>
              <p>95 Follow</p>
            </div>
          </div>
          <p style={{ fontWeight: "500", margin: "10px" }}>
            Địa chỉ: 117/11 X*****
          </p>
          <p style={{ fontWeight: "500", margin: "10px" }}>
            Số điện thoại: 09*****
          </p>
          <button
            style={{
              backgroundColor: "orange",
              width: "90%",
              margin: "0 auto",
              borderRadius: "5px",
              padding: "5px",
            }}
          >
            Trao đổi
          </button>
        </div>
      </div>
    </div>
  );
}
