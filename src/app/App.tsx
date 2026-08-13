import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from '../components/layout/AppLayout';
import { routes } from './routes';

const router = createBrowserRouter(routes.map((route) => ({ ...route, element: <AppLayout>{route.element}</AppLayout> })));

export function App() { return <RouterProvider router={router} />; }
