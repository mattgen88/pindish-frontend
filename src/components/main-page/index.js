import { h } from 'preact';
import style from './style.less';
import BoardChooser from '../board-chooser';
import RecipeSuggestion from '../recipe-suggestion';

export default function mainPage ({ pickBoard=false }) {
	return (
		<div class={style.mainPage}>
			{
				pickBoard ?
					<BoardChooser /> :
					<RecipeSuggestion />
			}
		</div>
	);
}