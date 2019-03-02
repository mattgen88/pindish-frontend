import { h } from 'preact';
import { Link } from 'preact-router/match';
import { FaSearch } from 'react-icons/fa';
import style from './style.less';

function Header({ name }) {
	return (
		<header class={style.header}>
			<img class={style.logo} src="/assets/images/Pindish_Logo.svg" />

			<form class="form-inline md-form form-sm mt-0">
				<FaSearch />
				<input class="form-control form-control-sm ml-3 w-75" type="text" aria-label="Search" />
			</form>

			<div class={style.user}>{name}</div>
			{/*TODO: swap out image icon for user icon once we have the actual one*/}
			<img src="/assets/images/profile-circle.svg" class={style.userIcon} />

			{/*}
			<nav>
				<Link activeClassName={style.active} href="/">Home</Link>
				<Link activeClassName={style.active} href="/profile">Me</Link>
				<Link activeClassName={style.active} href="/profile/john">John</Link>
			</nav>
	*/}
		</header>
	);
}
export default Header;
