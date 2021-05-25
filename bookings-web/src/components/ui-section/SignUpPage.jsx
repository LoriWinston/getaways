import React, { Component } from 'react';


export class SignupPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="form-wrap">
          <h1>New User Sign Up</h1>

          <form>
            <div className="form-group">
              <label>
                Email
                <input />
              </label>
            </div>

            <div className="form-group">
              <label>
                Password
                <input />
              </label>
            </div>

            <button type="submit" className="btn">
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupPage;
