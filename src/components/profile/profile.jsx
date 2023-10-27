// import { useAPIFetch } from "../../../hooks/useAPIFetch.js";
// import { useEffect } from "react";
import React, { useContext, useEffect, useState } from "react";
import { Article } from "../../pages/Home/article";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export function Profile(props) {
  const { getListPostByUser, dataUser, postFollow } = useContext(UserContext);
  const [userData, setDataUser] = useState("");
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");
  const [isFollow, setIsFollow] = useState(false);
  useEffect(() => {
    if (userId) {
      async function getData() {
        let res = await getListPostByUser(userId);
        setDataUser(res);
      }
      getData();
    } else {
      setDataUser(dataUser && dataUser.data);
    }
  }, [userId]);
  console.log("use data", userData);
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
              {userData && userData.name}
            </p>
            <p
              style={{ fontSize: "11px", fontWeight: "300", marginTop: "-7px" }}
            >
              {userData && `@${userData.username}`}
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
              <p>
                {" "}
                {userData && userData?.follower} Follow{" "}
                <span style={{ marginLeft: "10px" }}>
                  {" "}
                  {userData && userData.following} Following
                </span>
              </p>{" "}
              <p style={{ cursor: "pointer" }}>
                {" "}
                {userId ? (
                  <p
                    onClick={async () => {
                      let res = await postFollow({
                        token: window.localStorage.getItem("token"),
                        userId: userData.id,
                      });
                      console.log("res:", res);
                    }}
                    style={
                      userData && userData.isFollowed
                        ? {
                            color: "green",
                            backgroundColor: "orange",
                            padding: "4px 10px",
                            borderRadius: "5px",
                          }
                        : {
                            color: "black",
                            backgroundColor: "gray",
                            padding: "4px 10px",
                            borderRadius: "5px",
                          }
                    }
                  >
                    {userData && userData.isFollowed ? "Followed" : "Folow"}
                  </p>
                ) : (
                  <p> edit profile</p>
                )}
              </p>
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
          {userData &&
            userData.posts.length > 0 &&
            userData.posts.map((e, index) => {
              return (
                <Article
                  key={index}
                  valueArticle={e}
                  handleOpenModal={() => {}}
                />
              );
            })}
        </div>
        <div style={{ height: "20px" }}></div>
      </div>
      <div style={{ height: "100px" }}></div>
    </div>
  );
}
