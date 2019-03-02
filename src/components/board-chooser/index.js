import { h, Component } from 'preact';
import style from './style.less';

export default class BoardChooser extends Component {

	boards = (userBoards) =>
		userBoards.map(board => (<Board imgUrl pinCount={10} name={'Board Name'} />));

	render ({ userBoards }) {
		return (
			<div class={style.chooser}>
				{this.boards(userBoards)}
			</div>
		);
	}
}

function Board ({ imgUrl, pinCount, name }) {
	return (
		<div class={style.board}>
			<img class={style.boardImg} />
			<div class={style.boardName}>{name}</div>
			<div class={style.pinCount}>{pinCount} pins</div>
		</div>
	);
}