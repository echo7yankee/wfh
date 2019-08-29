import React from "react";

//react router
import { Redirect } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { logoutUser } from "../../Redux/actions/authActions";

const Home = ({ authenticated, logoutUser }) => {
  if (!authenticated) return <Redirect to="/" />;

  return (
    <div>
      <div className="col-one">
        <button onClick={logoutUser}>Log out</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
