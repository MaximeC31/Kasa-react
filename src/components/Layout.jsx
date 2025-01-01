import { Outlet } from 'react-router';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Layout = () => {
	return (
		<>
			<Header className='header' />
			<main>
				<Outlet />
			</main>
			<Footer className='footer' />
		</>
	);
};

export default Layout;
