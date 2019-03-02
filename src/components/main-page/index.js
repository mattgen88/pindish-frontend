import { h } from 'preact';
import style from './style.less';
import BoardChooser from '../board-chooser';
import RecipeSuggestion from '../recipe-suggestion';
import cx from 'classnames';

export default function mainPage ({ boards, togglePickBoard, pickBoard, selectBoard, selectedBoards, suggestedRecipe }) {
	return (
		<div class={style.mainPage}>
			<div class={style.header}>
				<div class={style.title}>Recipe suggestion</div>
				<Tab active={pickBoard} text="Boards" toggle={togglePickBoard} />
			</div>
			{
				pickBoard ?
					<BoardChooser
						boards={boards}
						selectBoard={selectBoard}
						selectedBoards={selectedBoards}
					/> :
					<RecipeSuggestion suggestedRecipe={suggestedRecipe} />
			}
		</div>
	);
}

function Tab ({ active, text, toggle }) {
	return (<div onclick={toggle} class={cx(style.tab, active && style.active)}>{text}</div>);
}