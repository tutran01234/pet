// import { WikiPhotoItem } from "../WikiPhotoItem";
// import { useAPIFetch } from "../../../hooks/useAPIFetch.js";
// import { useEffect } from "react";
// import { PHOTOS_GET } from "../../../api/api.js";
// import { Warning } from "../../Warning";
// import { Loading } from "../../Loading";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Article(props) {
  const navigate = useNavigate();
  const { handleOpenModal, imagePost, valueArticle, name } = props;
  const [isLike, setIsLike] = useState(false);
  return (
    <div
      className="list-post-article"
      style={{ boxShadow: "rgb(203 202 202) 1px 1px 1px 1px" }}
    >
      <div className="flex-content">
        <div
          onClick={() => {
            navigate(
              `/profile?userId=${valueArticle && valueArticle.author.id}`
            );
          }}
          className="avatar"
          style={{
            margin: "10px 0 0 10px",

            backgroundImage: `url("https://media.istockphoto.com/id/842845642/vi/anh/ng%C6%B0%E1%BB%9Di-ph%E1%BB%A5-n%E1%BB%AF-v%E1%BB%9Bi-m%E1%BB%99t-con-m%C3%A8o.jpg?s=612x612&w=0&k=20&c=gDMVXn2ONuWmiYC0_VuB-1WOtc2AmsB4qPrOjJCY3Wg=")`,
          }}
        ></div>

        <div className="flex-name-report">
          <div className="name-report">
            <div className="name-user-post">
              <p className="name">
                {valueArticle ? valueArticle.author.name : "user name"}
              </p>
              <p className="time">1 hous ago</p>
            </div>
            <i
              className="fa-solid fa-ellipsis"
              onClick={() => {
                handleOpenModal();
              }}
            ></i>
          </div>
        </div>
      </div>
      <div className="text-article">
        <p>{valueArticle && valueArticle.content}</p>
      </div>
      {valueArticle &&
        valueArticle.attachment.length > 0 &&
        valueArticle.attachment[0].attachment !== "aaaaaaaaaa" && (
          <img
            src={valueArticle && valueArticle.attachment[0].attachment}
            style={{ borderRadius: "5px", marginTop: "10px" }}
          />
        )}

      <div
        className="like-comment"
        style={{
          display: "flex",
          height: "50px",
          alignItems: "center",
          fontWeight: 300,
          fontSize: "14px",
        }}
      >
        <div
          className="like"
          style={{
            textAlign: "center",
            width: "50%",
            borderRight: "1px solid gray",
            height: "25px",
          }}
        >
          {isLike ? (
            <>
              <i
                className="fa-solid fa-thumbs-up"
                style={{ color: "#006fff" }}
                onClick={() => {
                  setIsLike(false);
                }}
              ></i>
              <span
                style={{ color: "#006fff", cursor: "pointer" }}
                onClick={() => {
                  setIsLike(false);
                }}
              >
                {" "}
                Like
              </span>
            </>
          ) : (
            <>
              <i
                onClick={() => {
                  setIsLike(true);
                }}
                className="fa-regular fa-thumbs-up"
                style={{
                  cursor: "pointer",
                }}
              ></i>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setIsLike(true);
                }}
              >
                {" "}
                Like
              </span>
            </>
          )}
        </div>
        <div
          className="comment"
          style={{
            textAlign: "center",
            width: "50%",
          }}
        >
          <i
            className="fa-regular fa-comment"
            style={{
              cursor: "pointer",
            }}
          ></i>{" "}
          Commnent
        </div>
      </div>
    </div>
  );
}
