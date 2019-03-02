import { h, Component } from 'preact';
import { Router } from 'preact-router';
import style from './style.less';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';
import Error from '../routes/error';

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

	render(_, { showLogin=false, error=false }) {
		let name = 'Julia';//TODO:
		return (
			<div id="app" class={style.app}>
				{
					//TODO: update showLogin properly
					!showLogin && !error && <Header name={name} />
				}
				<Router onChange={this.handleRoute}>
					<Home showLogin={showLogin} login={this.login} path="/" />
					<Error path="/error/" />
					{/*
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
					*/}
				</Router>
			</div>
		);
	}
}
