import { Router } from 'express';
import { AuthenticateUserController } from '../../controllers/users/AuthenticateUserController';

import { CreateUserController } from '../../controllers/users/CreateUserController';
import { DeleteUserController } from '../../controllers/users/DeleteUserController';
import { ListUserController } from '../../controllers/users/ListUserController';
import { ShowUserController } from '../../controllers/users/ShowUserController';
import { UpdateUserController } from '../../controllers/users/UpdateUserController';
import { checkValidId, checkValidUser, ensureAuthentication } from '../../helpers/middlewares/globalMiddleware';

const userRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const showUserController = new ShowUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const authenticateUserController = new AuthenticateUserController();

userRoutes.post('/user', createUserController.handle);
userRoutes.post('/auth', authenticateUserController.handle);

userRoutes.use(ensureAuthentication)
userRoutes.get('/users', listUserController.handle);
userRoutes.get('/user/:id', checkValidId, checkValidUser, showUserController.handle);
userRoutes.put('/user/:id', checkValidId, updateUserController.handle);
userRoutes.delete('/user/:id', checkValidId, deleteUserController.handle);

export { userRoutes };
