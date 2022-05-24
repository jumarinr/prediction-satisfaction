import { lazy } from 'react';

const TrabajoUno = lazy(() => import('../screens/Principal/VistaPrincipal.jsx'));
const TrabajoDos = lazy(() => import('../screens/TrabajoDos/TrabajoDos.jsx'));

const routes = [
  {
    path: '/trabajo-1',
    component: TrabajoUno,
  },
  {
    path: '/trabajo-2',
    component: TrabajoDos,
  },
];

export default routes;
