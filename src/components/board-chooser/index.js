import { h, Component } from 'preact';
import cx from 'classnames';
import style from './style.less';

export default class BoardChooser extends Component {

	boards = (userBoards) =>
		userBoards.map(board => (<Board imgUrl pinCount={10} name={'Name of the Board'} />));

	render ({ userBoards }) {
		return (
			<div class={style.chooser}>
				{this.boards(userBoards)}
			</div>
		);
	}
}

class Board extends Component {

	state = {
		selected: this.props.selected
	}

	toggleSelect = () => {
		this.setState({ selected: !this.state.selected });
		//TODO: actually have it do something
	}
	render  ({ imgUrl, pinCount, name }, { selected }) {
		return (
			<div class={cx(style.board, selected && style.selected)} onclick={this.toggleSelect}>
				<img class={style.boardImg} />
				<div class={style.details}>
					<div class={style.boardName}>{name}</div>
					<div class={style.pinCount}>{pinCount} pins</div>
				</div>
			</div>
		);
	}
}