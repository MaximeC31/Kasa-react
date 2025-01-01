import { createBrowserRouter, RouterProvider } from 'react-router';

import Layout from './components/Layout.jsx';

import Home from './pages/Home.jsx';
import AccomodationSheet from './pages/AccomodationSheet.jsx';
import Error404 from './pages/Error404.jsx';
import APropos from './pages/APropos.jsx';

export const LOGEMENT_PATH = 'fiche-logement';

const App = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: `${LOGEMENT_PATH}/:id`,
					element: <AccomodationSheet />,
				},
				{
					path: 'a-propos',
					element: <APropos />,
				},
				{
					path: '*',
					element: <Error404 />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
