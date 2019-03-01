import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	login = () => {
		this.setState({ showLogin: false });
	}

	render(_, { showLogin=true }) {
		console.log(showLogin);
		return (
			<div id="app">
				{
					//<Header />
				}
				<Router onChange={this.handleRoute}>
					<Home showLogin={showLogin} login={this.login} path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}
