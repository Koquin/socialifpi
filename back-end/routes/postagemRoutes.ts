import { Router } from 'express';
import * as postagemController from '../controller/postagemController';

const router = Router();

router.get('/', postagemController.getAllPosts);
router.get('/:id', postagemController.getPostById);
router.post('/', postagemController.createPost);
router.put('/:id', postagemController.updatePost);
router.delete('/:id', postagemController.deletePost);
router.post('/compartilhar/:id', postagemController.compartilharPostagem);

export default router;