import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { login, logout } from "../../actions/authActions";
import SignUp from "./signup";
import { Input, Button } from "antd";
import { withRouter } from "react-router-dom";
// import propTypes from "prop-types";

class Auth extends Component {
  state = {
    username: "",
    password: "",
    flag: 0,
  };

  _handleLogin = (e) => {
    e.preventDefault();
    console.log("redux token: " + this.props.token);
    if (this.props.token) {
      this.props.logout();
    } else {
      const { username, password } = this.state;

      const credentials = {
        username: username,
        password: password,
      };

      this.props.login(credentials);
      this.setState({ flag: 1 });
    }
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        {!this.props.token ? (
          <Fragment>
            <div style={{ float: "left", marginLeft: 500 }}>
              <SignUp />
            </div>

            <form
              onSubmit={(e) => this._handleLogin(e)}
              style={{ float: "right", marginRight: 500 }}
            >
              <h2>Login</h2>
              <br />
              <Input
                type="text"
                name="username"
                placeholder="username"
                required
                value={username}
                onChange={(e) =>
                  this.setState({ [e.target.name]: e.target.value })
                }
              />
              <br />
              <br />
              <Input
                type="password"
                name="password"
                placeholder="password"
                required
                value={password}
                onChange={(e) =>
                  this.setState({ [e.target.name]: e.target.value })
                }
              />
              <br />
              <br />
              <Button htmlType="submit">
                {this.props.token ? "Logout" : "Login"}
              </Button>
              <p style={{ color: "red" }}>
                {this.state.flag === 1 &&
                  !this.props.token &&
                  "Credentials mismatch"}
              </p>
            </form>
          </Fragment>
        ) : (
          this.props.history.push("/")
        )}
      </div>
    );
  }
}

// Auth.propTypes = {
//   token: propTypes.string.isRequired,
// };

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, { login, logout })(withRouter(Auth));
