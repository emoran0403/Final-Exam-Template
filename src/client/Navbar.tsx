import * as React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as Fetcher from "../client/Client_Utils/Fetcher";
import { TOKEN_KEY } from "../client/Client_Utils/Fetcher";

const Navbar = () => {
  const [loggedIn, setloggedIn] = useState<boolean>(false);
  const nav = useNavigate();
  const loc = useLocation();

  const PublicPages = [`/books`, `/categories`];

  useEffect(() => {
    // if (!PublicPages.includes(loc.pathname)) {
    Fetcher.GET("/auth/verify")
      .then((data) => {
        console.log(data);
        if (data.message === `valid token!`) setloggedIn(true);
      })
      .catch((error) => {
        setloggedIn(false);
        console.log(`error...\n`);
        console.error(error);
        nav("/");
      });
    // }
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
                setloggedIn(false);
                localStorage.removeItem(TOKEN_KEY);
                nav("/");
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
