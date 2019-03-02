import { h, Component } from 'preact';
import cx from 'classnames';
import style from './style.less';
import get from 'lodash-es/get';

export default class BoardChooser extends Component {


	boards = (userBoards) =>
		userBoards.map(board => (
			<Board
				imgUrl={get(board, 'image.60x60.url')}
				pinCount={get(board, 'counts.pins')}
				name={get(board, 'name')}
				id={board.id}
				selectBoard={this.props.selectBoard}
				selectedBoards={this.props.selectedBoards}
			/>));

	render ({ boards }) {
		return (
			<div class={style.chooser}>
				{boards && this.boards(boards)}
			</div>
		);
	}
}

class Board extends Component {

	toggleSelect = () => {
		this.props.selectBoard(this.props.id);
	}

	render  ({ imgUrl, pinCount, name, id, selectedBoards }) {
		return (
			<div class={cx(style.board, selectedBoards && selectedBoards.indexOf(id) > -1 && style.selected)} onclick={this.toggleSelect}>
				<img class={style.boardImg} src={imgUrl} />
				<div class={style.details}>
					<div class={style.boardName}>{name}</div>
					<div class={style.pinCount}>{pinCount} pins</div>
				</div>
			</div>
		);
	}
}