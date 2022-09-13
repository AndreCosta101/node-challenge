import { Router } from 'express';

import { CreatePostController } from '../../controllers/posts/CreatePostController';
import { DeletePostController } from '../../controllers/posts/DeletePostController';
import { ListPostController } from '../../controllers/posts/ListPostController';
import { ShowPostController } from '../../controllers/posts/ShowPostController';
import { UpdatePostController } from '../../controllers/posts/UpdatePostController';
import { checkValidId, checkValidPost, ensureAuthentication } from '../../helpers/middlewares/globalMiddleware';

const postRoutes = Router();

const createPostController = new CreatePostController();
const listPostController = new ListPostController();
const showPostController = new ShowPostController();
const updatePostController = new UpdatePostController();
const deletePostController = new DeletePostController();


postRoutes.use(ensureAuthentication)
postRoutes.post('/post', createPostController.handle);
postRoutes.get('/posts', listPostController.handle);
postRoutes.get('/post/:id', checkValidId, checkValidPost, showPostController.handle);
postRoutes.put('/post/:id', checkValidId, checkValidPost, updatePostController.handle);
postRoutes.delete('/post/:id', checkValidId, checkValidPost, deletePostController.handle);

export { postRoutes };
