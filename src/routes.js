import { Router } from 'express';

import SessionsController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionsController.store);

export default routes;
