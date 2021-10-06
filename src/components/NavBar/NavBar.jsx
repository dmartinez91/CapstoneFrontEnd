import React from "react";
import { Link } from "react-router-dom";
import Logout from "../LogOut/LogOut";

const NavBar = ({ user }) => {
  return (
    <div class="p-2">
      <a href="/" id="homelink" class="nav-link">
        {" "}
        Home
      </a>
      <dl class="nav nav-tabs">
        {!user && (
          <React.Fragment>
            <dd class="nav-item">
              <Link to="/login" class="nav-link active">
                Login
              </Link>
            </dd>
            <dd class="nav-item">
              <Link to="/register" class="nav-link active">
                Register
              </Link>
            </dd>
          </React.Fragment>
        )}
        {user && (
          <React.Fragment>
            <dd class="nav-item">
              <Link to="/profile" class="nav-link active" id="navtabs">
                {" "}
                Profile{" "}
              </Link>
            </dd>
            <dd class="nav-item">
              <Link to="/games" class="nav-link active">
                Games
              </Link>
            </dd>

            <dd class="nav-item">
              <Link to="/mybets" class="nav-link active" id="navtabs">
                {" "}
                Your active bets{" "}
              </Link>
            </dd>

            <dd class="nav-item">
              <Link to="/sportsbooks" class="nav-link active" id="navtabs">
                {" "}
                Sportsbooks{" "}
              </Link>
            </dd>

            <dd class="nav-item" id="navtabs">
              {" "}
              <Logout />
            </dd>
          </React.Fragment>
        )}
      </dl>
    </div>
  );
};

export default NavBar;
