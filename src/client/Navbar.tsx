//navbar component

import * as React from "react";
import * as Fetcher from "../client/Client Utils/Fetcher";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TOKEN_KEY } from "../client/Client Utils/Fetcher";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const nav = useNavigate();
  const loc = useLocation();

  useEffect(() => {
    Fetcher.GET(`/auth/verify`)
      .then((data) => {
        if (data.message === "valid token") {
          setLoggedIn(true);
        }
      })
      .catch((error) => {
        setLoggedIn(false);
        console.log(`error with token...\n`);
        console.error(error);
        nav("/");
      });
  }, [loc.pathname]);
  return (
    <div>
      {loggedIn && (
        <div className="mb-4">
          <Link to="/books">
            <button>Books</button>
          </Link>
          <Link to="/categories">
            <button>Categories</button>
          </Link>

          <Link to="/">
            <button
              onClick={() => {
                setLoggedIn(false);
                localStorage.removeItem(TOKEN_KEY);
                nav(`/`);
              }}
            >
              Logout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
