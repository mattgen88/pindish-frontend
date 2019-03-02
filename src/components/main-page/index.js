import { h, Component } from 'preact';
import style from './style.less';
import BoardChooser from '../board-chooser';
import RecipeSuggestion from '../recipe-suggestion';
import cx from 'classnames';

export default class mainPage extends Component {

	state = {
		pickBoard: this.props.pickBoard
	}

	render(_, { pickBoard }) {
		let boardArr = [1,2,3,4,5];
		console.log('HIT MAIN PAGE');
		return (
			<div class={style.mainPage}>
				<div class={style.header}>
					<div class={style.title}>Recipe suggestion</div>
					<Tab active={pickBoard} text="Boards" />
				</div>
				{
					pickBoard ?
						<BoardChooser userBoards={boardArr} /> :
						<RecipeSuggestion />
				}
			</div>
		);
	}
}

function Tab ({ active, text }) {
	return (<div class={cx(style.tab, active && style.active)}>{text}</div>);
}