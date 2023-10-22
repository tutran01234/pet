import React, { createContext, useState, useEffect, useCallback } from 'react';
import {
  CREATE_POST,
  LOGIN_USER,
  TOKEN_POST,
  TOKEN_VALIDATE_POST,
  USER_GET,
} from "../../api/api";
import { useNavigate } from "react-router-dom";
import ToastCustom from "../toast/toastCustom";

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

  async function getUser(token) {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = USER_GET(token);
      const response = await fetch(url, options);
      const json = await response.json();

      setDataUser(json);
      console.log("123");
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
      if (!response.ok) throw new Error(`Sai rồi`);
      const { data } = await response.json();
      console.log("res123:", data, response);
      return response;
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
