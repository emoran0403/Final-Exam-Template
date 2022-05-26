import * as React from "react";
import { useState, useEffect } from "react";
import * as Types from "../types";
import * as Fetcher from "../client/Client_Utils/Fetcher";
import { TOKEN_KEY } from "../client/Client_Utils/Fetcher";
import { useNavigate } from "react-router-dom";

const LoginPage = (props: Types.LoginPageProps) => {
  const [isNewUser, setIsNewUser] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const nav = useNavigate();

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    Fetcher.POST("/auth/login", { email, password })
      .then((data) => {
        // console.log({ data });
        if (data) {
          localStorage.setItem(TOKEN_KEY, data);
          nav(`/books`);
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.log(`Login Error...\n`);
        console.error(error);
        alert(`Something went wrong, please try again`);
      });
  };

  const inputForExistingUser = () => {
    return (
      <div>
        <input value={email} type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}></input>
        <input value={password} type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
      </div>
    );
  };

  const inputForNewUser = () => {
    return (
      <div>
        <input value={email} type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}></input>
        <input value={password} type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
        <input value={name} placeholder="name" onChange={(e) => setName(e.target.value)}></input>
      </div>
    );
  };

  return (
    <div>
      <h3>Please login, or click the new user button</h3>
      {!isNewUser && inputForExistingUser()}
      {isNewUser && inputForNewUser()}
      <button
        onClick={() => {
          setIsNewUser(true);
        }}
      >
        I am a new user
      </button>
      <button onClick={(e) => handleLogin(e)}>Login</button>
    </div>
  );
};

export default LoginPage;
