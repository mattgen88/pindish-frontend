import { h, Component } from 'preact';
import cx from 'classnames';
import 'bootstrap/dist/css/bootstrap';
import style from './style.less'; // TODO: eventually switch to less? Need less-loader
import MainPage from '../../components/main-page';
import { fetch } from 'whatwg-fetch';

export default class Home extends Component {

	state = {
		showLogin: this.props.showLogin
	}

	loginPage = () => (
		<div class={style.home}>
			<div class={style.overlay}>
				<div class={style.homeBody}>
					<div class={style.welcomeMessage}>
						<h1>Pindish</h1>
						<p>Pindish will suggest recipes from your favorite boards.<br />
							Creates a shopping list based off your Pinterest pinned recipes
						</p>
					</div>
					<a href="https://pindish.herokuapp.com/auth">
						<button type="button" class={cx(style.loginButton, 'btn btn-danger')}><i class={style.pinterestIcon} />Log in to Pinterest</button>
					</a>
				</div>
			</div>
		</div>
	);

	componentWillMount() {

		/*
		fetch('https://pindish.herokuapp.com/boards', {
			method: 'GET',
			credentials: 'include'
		}).then(response => {
			console.log({
				response
			});
			if (response.ok) {
				this.setState({ response, showLogin: false });
			} else this.setState({ showLogin: true });
		}).catch(e => {
			console.error(e);
			//TODO: probably show error page
			this.setState({ showLogin: true });
		});
		*/
	}

	render (_, { showLogin }) {
		console.log({ showLogin });
		
		return ( showLogin ?
			this.loginPage() :
			<MainPage pickBoard={false} />
		);
	}
}
