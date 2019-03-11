import { h, Component } from 'preact';
import style from './style.less';
import { FaStar } from 'react-icons/fa';
import get from 'lodash-es/get';

export default function RecipeSuggestion ({ suggestedRecipe }) {
	return (
		<div class={style.recipeSuggestion} >
			{
				suggestedRecipe ?
					<Recipe recipe={suggestedRecipe} />
					: <div class={style.noSuggestion}>No recipes could be found. Please make sure that you have a board selected that contains recipes</div>
			}
		</div>
	);
}

class Recipe extends Component {

	createList = () => {
		//TODO:
	}

	//render({ recipeName, boardName, rating, url }) {
	render({ recipe, rating = 4 }) {
		let recipeName = recipe.name,
			boardName = recipe.pinnedBoard,
			imgUrl = get(recipe, 'image.original.url'),
			url = recipe.link,
			allIngredients = recipe.ingredients,
			serves = get(recipe, 'servings.summary');

		let stars = [];

		for (let i = 0; i < rating; i++) {
			stars.push(<FaStar class={style.checked} />);
		}

		for (let i = 0; i < 5-rating; i++) {
			stars.push(<FaStar class={style.unchecked} />);
		}

		let ingredientsList = allIngredients.map(cat => {
			let { category, ingredients } = cat;
			return ingredientCategory({ category, ingredients });
		});

		return (
			<div class={style.recipe}>
				<div class={style.recipeContents}>
					<div class={style.leftCol}>
						<div class={style.recipeImg}>
							<img src={imgUrl} />
						</div>
					</div>
					<div class={style.ingredients}>
						<div class={style.savedTo}>You saved to <span class={style.bold}>{boardName}</span></div>
						<div class={style.name}>{recipeName}</div>
						<div class={style.serves}>{serves}</div>
						<div class={style.ingredientsText}>Ingredients</div>
						<div class={style.ingredientsList}>
							{ingredientsList}
						</div>
					</div>
				</div>
				<a href={url} target="_blank" rel="noopener noreferrer">
					<div class={style.viewRecipe}>
						View Full Recipe
					</div>
				</a>
				{/*TODO: your pins/more ideas*/}
			</div>
		);
	}
}

function ingredientCategory({ category, ingredients }) {
	let ingredientsArr = ingredients.map(ingredient => <div>{ingredient.amount} {ingredient.name}</div>);
	return (
		<div>
			<h3 class={style.foodCat}>{category}</h3>
			{ingredientsArr}
		</div>
	);
}