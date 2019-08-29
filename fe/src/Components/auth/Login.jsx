import React from "react";

//react router dom
import { Redirect } from "react-router-dom";

//style
import style from "./auth.module.css";

//redux
import { connect } from "react-redux";

//login components
import Logo from "./Logo";
import Title from "./Title";
import ProfileImg from "./ProfileImg";
import Form from "./Form";
import Footer from "./Footer";

const Login = ({ authenticated, history }) => {
  if (authenticated) return <Redirect to="/home" />;

  return (
    <div className={style.loginBackground}>
      <div className="col-one">
        <Title />
        <Logo />
        <ProfileImg />
        <Form history={history} />
        <Footer />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default connect(
  mapStateToProps,
  null
)(Login);
