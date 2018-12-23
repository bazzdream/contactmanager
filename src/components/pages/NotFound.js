import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1 className="display-4 mb-2">
        <span className="text-danger">404</span> Not Found
      </h1>
      <p className="lead">Sorry, that page does not exist.</p>
      <Link to="/" className="btn btn-light">
        Go to homepage
      </Link>
    </div>
  );
}
