//login component

import * as React from "react";
import * as Types from "../types";
import * as Fetcher from "../client/Client Utils/Fetcher";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isNewUser, setisNewUser] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const nav = useNavigate();

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (isNewUser) {
      Fetcher.POST(`/auth/register`, { email, password, name })
        .then((data) => {
          if (data) {
            localStorage.setItem(Fetcher.TOKEN_KEY, data);
            nav(`/books`);
          } else {
            alert(data.message);
          }
        })
        .catch((err) => {
          console.log(`register new user error...\n`);
          console.error(err);
        });
    } else {
      Fetcher.POST(`/auth/login`, { email, password })
        .then((data) => {
          if (data) {
            localStorage.setItem(Fetcher.TOKEN_KEY, data);
            nav(`/books`);
          } else {
            alert(data.message);
          }
        })
        .catch((err) => {
          console.log(`login error...\n`);
          console.error(err);
        });
    }
  };

  const inputForExistingUser = () => {
    return (
      <div>
        <input
          value={email}
          type="email"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          value={password}
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
      </div>
    );
  };

  const inputForNewUser = () => {
    return (
      <div>
        <input
          value={email}
          type="email"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          value={password}
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>

        <input
          value={name}
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
      </div>
    );
  };

  return (
    <div>
      <h2>Login, or click the New User button</h2>
      {!isNewUser && inputForExistingUser()}
      {isNewUser && inputForNewUser()}
      <button
        onClick={() => {
          setisNewUser(true);
        }}
      >
        I am a new User
      </button>
      <button
        onClick={(e) => {
          handleLogin(e);
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
