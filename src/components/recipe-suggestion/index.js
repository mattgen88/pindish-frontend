import { h, Component } from 'preact';
import style from './style.less';
import { FaStar } from 'react-icons/fa';
export default function RecipeSuggestion () {
	return (
		<div class={style.recipeSuggestion} >
			<Recipe recipeName="Parmesan Crusted Chicken" boardName="Hot Recipes" rating={4} url="https://google.com" />
		</div>
	);
}

class Recipe extends Component {

	createList = () => {
		//TODO:
	}

	render({ recipeName, boardName, rating, url }) {
		let stars = [];

		for (let i = 0; i < rating; i++) {
			stars.push(<FaStar class={style.checked} />);
		}

		for (let i = 0; i < 5-rating; i++) {
			stars.push(<FaStar class={style.unchecked} />);
		}

		return (
			<div class={style.recipe}>
				<div class={style.recipeContents}>
					<div class={style.leftCol}>
						<div class={style.recipeImg}>
							<img />
						</div>
						<div class={style.stars}>
							<div>{stars}</div>
						</div>
					</div>
					<div class={style.ingredients}>
						<div class={style.savedTo}>You saved to <span class={style.bold}>{boardName}</span></div>
						<div class={style.name}>{recipeName}</div>
						<div class={style.ingredientsText}>Ingredients</div>
						Estimated time:<br />
						lalal<br />
						asdf<br />
						asdfasdfasdf<br />
						asdfasdfasdfasdf<br />
						asdfasdfasdf
						asdf<br />
						asdfasdfasdfasdff<br />
						asd<br />
						sadf
						asdfasdfasdfasdfsadf<br />
						asdfasdfasdfasdf
					</div>
				</div>
				<a href={url}>
					<div class={style.viewRecipe}>
						View Full Recipe
					</div>
				</a>
				{/*TODO: your pins/more ideas*/}
			</div>
		);
	}
}