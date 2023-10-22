import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../../assets/dogs.svg";
import { UserContext } from "../contexts/UserContext";

import { User } from "@phosphor-icons/react";

export function Header() {
  const { userLogout } = useContext(UserContext);
  const [isDropdown, setDropDown] = useState(false);
  return (
    <header className="fixed w-full top-0 z-100 shadow-sm ease-in-out duration-300 bg-white dark:bg-darkMedium">
      <nav className="h-16 flex items-center justify-between  container my-0 mx-auto py-0 px-4">
        <Link
          to="/"
          aria-label="Dogs - Home"
          className="py-2 px-0"
          style={{ paddingRight: "83px" }}
        >
          <Dogs />
        </Link>
        {/* Search Bar */}
        <div className="flex items-center">
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Tìm kiếm..."
              style={{ width: "570px", borderRadius: "50px" }}
              className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md p-2 mr-2 focus:outline-none"
            />
            <i
              className="fa fa-search"
              style={{
                position: "absolute",
                top: "11px",
                right: "20px",
                color: "gray",
              }}
            ></i>
          </div>
        </div>
        {window.localStorage.getItem("token") ? (
          <div
            style={{
              width: "100px",
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <i
              className="fa-regular fa-bell"
              style={{ marginRight: "10px" }}
            ></i>
            <div
              onClick={() => {
                setDropDown(!isDropdown);
              }}
              className="avata-header"
              style={{
                backgroundImage: `url("https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
              }}
            ></div>
            <i
              className="fa-solid fa-caret-down"
              style={{ fontSize: "13px", marginRight: "20px" }}
            ></i>
          </div>
        ) : (
          // <Link
          //   to="/account"
          //   className="flex items-center text-colorTextBase ease-in-out duration-300 dark:text-txtColorHeader"
          // >
          //   {dataUser.nome}
          // </Link>
          <Link
            to="/login"
            className="flex items-center gap-1 text-colorTextBase ease-in-out duration-300 dark:text-txtColorHeader"
          >
            Đăng nhập
            <User size={18} className="font-bold" />
          </Link>
        )}
      </nav>
      {isDropdown && (
        <div
          style={{
            width: "120px",
            height: "100px",
            position: "absolute",
            right: "10px",
            backgroundColor: "#fff",
            border: "1px solid #eaeaea",
            top: "58px",
            boxShadow: "rgb(203 202 202) 1px 1px 3px",
          }}
        >
          <p
            style={{ marginLeft: "10px", fontSize: "10px", fontWeight: "400" }}
          >
            Xin chào Kay
          </p>
          <p
            onClick={() => {
              setDropDown(false);
            }}
            style={{
              margin: "7px 0 0 10px",
              fontSize: "12px",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            <i className="fa-regular fa-user"></i> Edit profile
          </p>
          <p
            onClick={() => {
              userLogout();
              setDropDown(false);
            }}
            style={{
              margin: "7px 0 0 10px",
              fontSize: "12px",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            {" "}
            <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
          </p>
        </div>
      )}
    </header>
  );
}
