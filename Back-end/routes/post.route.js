import express from 'express';

// setup router
const router = express.Router();

// get all controllers
import {handleGet} from '../controllers/post.controller.js';
import {handlePostData} from '../controllers/post.controller.js';

// get router
router.get('/',handleGet)

// post router 
router.post('/post',handlePostData )


export default router;