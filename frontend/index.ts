import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from 'react-router-dom';
import App from './App.js';

createRoot(document.getElementById('outlet')!).render(createElement(App));
// const routes = [
//     {
//         path: "/",
//         component: 'grid-sorting',
//         action: async () => {
//             await import ('./views/TableView');
//         }
//     }
// ]

// const router = new Router(document.querySelector('#outlet'));
// router.setRoutes(routes);
