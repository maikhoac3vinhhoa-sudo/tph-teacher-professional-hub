import type { RouteObject } from 'react-router-dom';
import { navigationItems } from '../config/navigation';
import { DashboardPage } from '../pages/DashboardPage';
import { PlaceholderPage } from '../pages/PlaceholderPage';

export const routes: RouteObject[] = [
{ path: '/', element: <DashboardPage /> },
...navigationItems.filter((item) => item.path !== '/').map((item) => ({ path: item.path, element: <PlaceholderPage title={item.label} description={item.description} /> })),
];
