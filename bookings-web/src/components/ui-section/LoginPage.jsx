import React, { Component } from 'react';

export class LoginPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="form-wrap">
          <h1>Returning User Log In</h1>

          <form onSubmit={this.handleSubmit}>
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
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  }
}


export default LoginPage;
