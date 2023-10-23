// import { useAPIFetch } from "../../../hooks/useAPIFetch.js";
// import { useEffect } from "react";
import React, { useContext, useEffect, useState } from "react";
import { Article } from "../../pages/Home/article";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export function Profile(props) {
  const { getListPostByUser } = useContext(UserContext);
  const [dataUser, setDataUser] = useState("");
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");
  useEffect(() => {
    console.log("userId", userId);
    async function getData() {
      let res = await getListPostByUser(userId);
      setDataUser(res);
    }
    getData();
  }, [userId]);
  console.log(dataUser);
  const {} = props;
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#D9D9D9",
        height: "100%",
      }}
    >
      <div style={{ height: "80px" }}></div>
      <div
        style={{
          boxShadow: "rgb(203 202 202) 1px 1px 3px",
          width: "80%",
          backgroundColor: "#fff",
          margin: "0 auto",
          borderRadius: "10px",
          paddingTop: "20px",
        }}
      >
        <div
          style={{
            marginTop: "20px",
            boxShadow: "rgb(110 110 110) 1px 1px 1px 2px",
            width: "95%",
            margin: "0 auto",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            height: "160px",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            className="avatar-profile"
            style={{
              margin: "10px 0 0 10px",

              backgroundImage: `url("https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
            }}
          ></div>
          <div style={{ width: "86%", height: "90px", margin: "0 auto" }}>
            <p style={{ fontSize: "16px", fontWeight: "500" }}>
              {dataUser && dataUser.name}
            </p>
            <p
              style={{ fontSize: "11px", fontWeight: "300", marginTop: "-7px" }}
            >
              {dataUser && `@${dataUser.username}`}
            </p>
            <div
              style={{
                display: "flex",
                marginTop: "38px",
                width: "100%",
                justifyContent: "space-between",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              <p>1000 folow</p>
              <p style={{ cursor: "pointer" }}>edit profile</p>
            </div>
          </div>
          <hr
            style={{
              width: "95%",
              height: "10px",
              color: "black !important",
              position: "absolute",
              right: "2%",
              bottom: "5px",
            }}
          />
        </div>

        <div
          style={{
            width: "60%",
            margin: "20px auto",
            paddingTop: "20px",
          }}
        >
          <Article
            handleOpenModal={() => {}}
            imagePost={
              "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
            }
          />
          <Article
            handleOpenModal={() => {}}
            imagePost={
              "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
            }
          />
          <Article
            handleOpenModal={() => {}}
            imagePost={
              "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
            }
          />
        </div>
        <div style={{ height: "20px" }}></div>
      </div>
      <div style={{ height: "100px" }}></div>
    </div>
  );
}
