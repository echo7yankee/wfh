import React, { useState } from "react";
import spinner from "../../static/spinner.gif";

//style
import style from "./auth.module.css";

//react router dom
import { Link } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { loginUser } from "../../Redux/actions/authActions";

const Form = ({ loginUser, errors, isLoading, history }) => {
  const initCredentials = {
    email: "",
    password: ""
  };

  const [credentials, setCredentials] = useState(initCredentials);
  //destructuring
  const { email, password } = credentials;

  const handleInput = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    try {
      loginUser(history, credentials);
      setCredentials(initCredentials);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.formContainer}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.inputGroup}>
          <img src="/images/input-icon.png" alt="field icon" />
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleInput}
          />
        </div>
        <div className={style.inputGroup}>
          <img src="/images/input-icon.png" alt="field icon" />
          <input
            name="password"
            type="text"
            placeholder="Password"
            value={password}
            onChange={handleInput}
          />
        </div>

        <div className={`${style.inputGroup} dflex`}>
          <div className="dflex">
            <input id="remember" type="checkbox" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <div>
            <Link to="/forgot" className={style.linkBtn}>
              Forgot password
            </Link>
          </div>
        </div>

        {errors.error && <p className="error">{errors.error}</p>}

        <div className={style.formBtnContainer}>
          <button type="submit" className="dflex" disabled={isLoading && true}>
            Log in
            {isLoading && (
              <img src={spinner} alt="spinner" className={style.formSpinner} />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    errors: state.auth.errors,
    isLoading: state.auth.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (history, credentials) =>
      dispatch(loginUser(history, credentials))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
