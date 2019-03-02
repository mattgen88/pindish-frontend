import { h, Component } from 'preact';
import style from './style.less';
import BoardChooser from '../board-chooser';
import RecipeSuggestion from '../recipe-suggestion';

export default class mainPage extends Component {

	state = {
		pickBoard: this.props.pickBoard || true
	}

	render(_, { pickBoard }) {
		let boardArr = [1,2,3,4,5];
		return (
			<div class={style.mainPage}>
				<div class={style.suggestionHeader}>
					<div class={style.title}>Recipe suggestion</div>
					{/*TODO: your pins/more ideas*/}
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