import axios from "axios";
import React, { useReducer } from "react";
import { AUTH_API } from "../components/helpers/constans";
import jwt_decode from "jwt-decode";


export const authContext = React.createContext();
const INIT_STATE = {
  user: {},
  isAuth: false,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };

    case "LOGOUT_USER":
      return {
        ...state,
        user: {},            
        isAuth: false,
      };

    default:
      return state;
  }
};
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  async function registerUser(e, history) {
    e.preventDefault();
    const newUser = {
      email: e.target[0].value,
      password: e.target[2].value,
    };
    try {
      const res = await axios.post(`${AUTH_API}/api/auth/register`, newUser);
      history.push("/login");
    } catch (err) {
      console.log(err.response);
    }
  }

  async function loginUser(e, history) {
    e.preventDefault();
    const user = {
      email: e.target[0].value,
      password: e.target[2].value,
    };

    console.error(e.target, "this is target");
    try {
      const { data } = await axios.post(`${AUTH_API}/api/auth/login`, user);
      localStorage.setItem("token", data.token);
      window.localStorage.setItem("rr_login", user.email);
      const login = window.localStorage.getItem("rr_login");
      if (login === "admin@gmail.ru") {
        console.log("пропусти");
        history.push("/admin");
      } else {
        history.push("/");
      }
      const decoded = jwt_decode(data.token);
      dispatch({
        type: "LOGIN_USER",
        payload: decoded,
      });
    } catch (err) {
      alert(err.response.data.message);
    }
  }
  return (
    <authContext.Provider value={{ registerUser, loginUser }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
