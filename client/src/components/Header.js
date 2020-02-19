import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
	renderLoginContent() {
		let userData = this.props.auth;
		switch(userData) {
			case null:
				return;
			case false:
				return(
					<li><a href="/auth/google">Login with Google</a></li>
				);
			default:
				return(
					<li><a href="/api/logout">Logout</a></li>
				);
		}
	}

  render() {
		console.log(this.props.auth);
    return(
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo">
						SendSurveys
					</Link>
          <ul className="right">
						<li>{this.renderLoginContent()}</li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
	return { auth: state.auth }
}

export default connect(mapStateToProps)(Header);
