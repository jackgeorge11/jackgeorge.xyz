import React from "react";
import { Link } from "gatsby";

export default function NotFound() {
  return (
    <div className="home center">
      <h1 className="fw-400">
        Sorry, but the page you are looking for doesn't exist.
      </h1>
      <h2 className="muted fw-400 m-0">
        click{" "}
        <Link className="muted fw-700" to="/">
          here
        </Link>{" "}
        to go back to the home page.
      </h2>
    </div>
  );
}
