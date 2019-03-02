import { h, Component } from 'preact';
import cx from 'classnames';
import 'bootstrap/dist/css/bootstrap';
import style from './style.less'; // TODO: eventually switch to less? Need less-loader
import MainPage from '../../components/main-page';
import { fetch } from 'whatwg-fetch';
import get from 'lodash-es/get';
import find from 'lodash-es/find';

export default class Home extends Component {

	state = {
		showLogin: this.props.showLogin
	}

	loginPage = () => (
		<div class={style.home}>
			<div class={style.overlay}>
				<div class={style.homeBody}>
					<div class={style.welcomeMessage}>
						<img class={style.logo} src="/assets/images/Pindish_Logo.svg" />
						<p>Pindish will suggest recipes from your favorite boards.<br />
							Creates a shopping list based off your Pinterest pinned recipes
						</p>
					</div>
					{
						//<button onClick={this.props.login} type="button" class={cx(style.loginButton, 'btn btn-danger')}><i class={style.pinterestIcon} />Log in to Pinterest</button>
						//<a href="https://172.17.8.30:3000/auth">
						<a href="https://pindish.herokuapp.com/auth">
							<button onClick={this.props.login} type="button" class={cx(style.loginButton, 'btn btn-danger')}><i class={style.pinterestIcon} />Log in to Pinterest</button>
						</a>
					}
				</div>
			</div>
		</div>
	);

	togglePickBoard = () => {

		let { boards, selectedBoards } = this.state,
			randId = selectedBoards && selectedBoards[Math.floor(Math.random() * selectedBoards.length)],
			board = find(boards, ['id', randId]),
			boardTitle = board.name;

		console.log({ selectedBoards });

		
		//TODO: for each board
		selectedBoards ?
			//fetch(`https://172.17.8.30:3000/recipes/board/${randId}`, {
			fetch(`https://pindish.herokuapp.com/recipes/board/${randId}`, {
				method: 'GET',
				credentials: 'include'
			}).then(response => response.json())
				.then(res => {
					console.log('RECIPES:', res);
					let recipes = get(res, '_embedded.recipes');
					let suggested = null;
					if (recipes) {
						let count = recipes.length;
						let randomRecipe = Math.floor(Math.random()*count);
						suggested = recipes[randomRecipe];
						suggested.pinnedBoard = boardTitle;

						console.log({ boardTitle });
					}
					this.setState({ pickBoard: !this.state.pickBoard, suggestedRecipe: suggested });
				})
				.catch(e => {
					console.error(e);
				}) :
			this.setState({ pickBoard: !this.state.pickBoard, suggestedRecipe: undefined });
	}

	selectBoard = (boardId) => {
		let { selectedBoards } = this.state;
		if (selectedBoards) {
			if (selectedBoards.indexOf(boardId) > -1) {
				selectedBoards = selectedBoards.splice(selectedBoards.indexOf(boardId), 1);
			} else selectedBoards.push(boardId);
		} else {
			selectedBoards = [boardId];
			this.setState({ selectedBoards });
		}

		this.setState();
	}

	componentWillMount() {
		//fetch('https://172.17.8.30:3000/boards', {
		fetch('https://pindish.herokuapp.com/boards', {
			method: 'GET',
			credentials: 'include'
		}).then(response => {
			if (response.ok) {
				return response;
			} this.setState({ showLogin: true });
		}).then(r => r.json())
			.then(result => {
				let boards = get(result, '_embedded.boards' || []),
					user = get(result, '_embedded.me');

				//console.log({ boards });
				this.props.login(user);
				this.setState({ boards, user, showLogin: false, pickBoard: true });
			})
			.catch(e => {
				console.error(e);
				//TODO: probably show error page
				this.setState({ showLogin: true });
			});
	}

	render (_, { showLogin, pickBoard=true, boards, selectedBoards, suggestedRecipe }) {
		
		//return this.loginPage();

		return ( showLogin ?
			this.loginPage() :
			<MainPage
				pickBoard={pickBoard}
				boards={boards}
				togglePickBoard={this.togglePickBoard}
				selectBoard={this.selectBoard}
				selectedBoards={selectedBoards}
				suggestedRecipe={suggestedRecipe}
			/>
		);
	}
}
