import { Link } from 'react-router';

const currentYear = new Date().getFullYear();
const pageTitle = document.title;
const Footer = ({ className }) => {
	return (
		<footer className={className}>
			<Link to='/'>
				<img src='./kasa-dark.svg'></img>
			</Link>
			<p>
				© {currentYear} {pageTitle} - All rights reserved
			</p>
		</footer>
	);
};

export default Footer;
