import { h, Component } from 'preact';
import cx from 'classnames';
import 'bootstrap/dist/css/bootstrap';
import style from './style.less'; // TODO: eventually switch to less? Need less-loader

export default class Home extends Component {
	onLoginClick = () => {
	  console.log('I WAS CLICKED!');
	};

	login = () => (
		<div class={style.home}>
			<div class={style.overlay}>
				<div class={style.homeBody}>
					<div class={style.welcomeMessage}>
						<h1>Pindish</h1>
						<p>Pindish will suggest recipes from your favorite boards.<br />
							Creates a shopping list based off your Pinterest pinned recipes
						</p>
					</div>
					<button type="button" class={cx(style.loginButton, 'btn btn-danger')} onclick={this.onLoginClick}><i class={style.pinterestIcon} />Log in to Pinterest</button>
				</div>
			</div>
		</div>
	);

	render ({ showLogin }) {
		return ( showLogin && this.login()
		);
	}
}