import React, { createContext, useState, useEffect, useCallback } from 'react';
import {
  CREATE_POST,
  LOGIN_USER,
  TOKEN_POST,
  TOKEN_VALIDATE_POST,
  USER_GET,
  LIST_POST_NEW_FEEDS,
  GET_LIST_POST_BY_USER,
  GET_POST_PENDDING,
  ACCEPT_POST,
  REFUSE_POST,
} from "../../api/api";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

// import ToastCustom from "../toast/toastCustom";

export const UserContext = createContext();

export function UserStorage({ children }) {
  const [dataUser, setDataUser] = useState(null);
  const [isLogged, setIsLogged] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isToken, setToken] = useState("");
  const navigate = useNavigate();
  const userLogout = useCallback(
    async function () {
      setDataUser(null);
      setError(null);
      setLoading(false);
      setIsLogged(false);
      window.localStorage.removeItem("token");
      navigate("/login");
    },
    [navigate]
  );

  async function getUser(idUser, data) {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = USER_GET(idUser, data);
      const response = await fetch(url, options);
      const json = await response.json();
      if (json.data.roleId === "e112130c-4665-45f6-93e4-19f98bc51f24") {
        navigate("/staff");
      } else {
        navigate("/home");
      }
      console.log("res pon detail user:", json.data);

      setDataUser(json);
      setIsLogged(true);
    } catch (error) {
      setError(error.message);
      setIsLogged(false);
    }
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = LOGIN_USER({ username, password });
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Sai rồi`);
      const { data } = await response.json();
      window.localStorage.setItem("token", data);
      const decoded = await jwtDecode(data);
      await getUser(decoded.userid, data);
      return;

      // console.log("decode:", decoded);

      navigate("/home");

      await getUser(data);
    } catch (error) {
      setError(error.message);
      setIsLogged(false);
    } finally {
      setLoading(false);
    }
  }

  async function postArticle(dataArticle, tokenUser) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = CREATE_POST(dataArticle, tokenUser);
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Tạo bài viết lỗi`);
      const { data } = await response.json();
      return response;
    } catch (error) {
      setError(error.message);
      setIsLogged(false);
    } finally {
      setLoading(false);
    }
  }

  async function acceptPost(dataform) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = ACCEPT_POST(dataform);
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Tạo bài viết lỗi`);
      const { data } = await response.json();
      return response;
    } catch (error) {
      setError(error.message);
      setIsLogged(false);
    } finally {
      setLoading(false);
    }
  }

  async function refusePost(dataform) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = REFUSE_POST(dataform);
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Tạo bài viết lỗi`);
      const { data } = await response.json();
      return response;
    } catch (error) {
      setError(error.message);
      setIsLogged(false);
    } finally {
      setLoading(false);
    }
  }

  async function getListPost() {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = LIST_POST_NEW_FEEDS();
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Lỗi`);
      const { data } = await response.json();
      return data;
    } catch (error) {
      setError(error.message);
      setIsLogged(false);
    } finally {
      setLoading(false);
    }
  }

  async function getPostPendding() {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = GET_POST_PENDDING();
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Lỗi`);
      const { data } = await response.json();
      return data;
    } catch (error) {
      setError(error.message);
      setIsLogged(false);
    } finally {
      setLoading(false);
    }
  }

  async function getListPostByUser(userId) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = GET_LIST_POST_BY_USER(userId);
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Lỗi`);
      const { data } = await response.json();
      return data;
    } catch (error) {
      setError(error.message);
      setIsLogged(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);

          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error(`Error: ${response.statusText}`);
          await getUser(token);
        } catch (error) {
          setError(error.message);
          setIsLogged(false);
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setIsLogged(false);
      }
    }
    // autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{
        userLogin,
        dataUser,
        userLogout,
        error,
        isLogged,
        loading,
        isToken,
        postArticle,
        getListPost,
        getListPostByUser,
        getPostPendding,
        acceptPost,
        refusePost,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
