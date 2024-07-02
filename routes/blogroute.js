import { Router } from 'express';
import { deleteBlogs, getBlogs, patchBlogs, postBlogs } from '../controllers/blog.js';

const blogRouter = Router();


blogRouter.get('/blogs',getBlogs );

blogRouter.post('/blogs',postBlogs);

blogRouter.patch('/blogs/:id',patchBlogs);

blogRouter.delete('/blogs/:id',deleteBlogs);


export default blogRouter;