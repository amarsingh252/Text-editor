import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar(props) {

  const location = useLocation();

  const { pathname }  = location;

  const splitLocation = pathname.split("/");

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
           <b>{props.title}</b>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link className={splitLocation[1] === "" ? "nav-link active" : "nav-link"} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className={splitLocation[1] === "about" ? "nav-link active" : "nav-link"} to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
