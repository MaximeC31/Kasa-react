import { Link } from 'react-router';

const NavBar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to='/'>Accueil</Link>
				</li>
				<li>
					<Link to='/a-propos'>À propos</Link>
				</li>
			</ul>
		</nav>
	);
};

const Header = ({ className }) => {
	return (
		<header className={className}>
			<Link to='/'>
				<img src='./kasa.svg'></img>
			</Link>
			<NavBar />
		</header>
	);
};

export default Header;
