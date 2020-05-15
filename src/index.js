// eslint-disable-file
import React, { useState } from "react";

export default ({ onSubmit, errors, routeTo }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const errorMessages = !errors ? (
    undefined
  ) : (
    <ul className="error-messages">
      {errors.map((error, index) => (
        <li key={index}>
          {index}
          {"  "}
          {error}
        </li>
      ))}
    </ul>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  const internalRoute = (route) => (e) => {
    e.preventDefault();
    routeTo(route);
  };

  return (
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Sign in</h1>
            <p class="text-xs-center">
              <a onClick={internalRoute("register")}>Need an account?</a>
            </p>
            {errorMessages}
            <form onSubmit={handleSubmit}>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  value={email}
                  onSubmit={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  value={password}
                  onSubmit={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
