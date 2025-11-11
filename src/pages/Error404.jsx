import { Link } from 'react-router';

const Error404 = () => {
	return (
		<section className='error-404'>
			<h1>404</h1>
			<p>Oups! La page que vous demandez n&apos;existe pas.</p>
			<Link to='/'>Retourner sur la page d’accueil</Link>
		</section>
	);
};

export default Error404;
