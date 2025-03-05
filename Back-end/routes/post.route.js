import express from 'express';

// setup router
const router = express.Router();

// get all controllers
import {handleGet} from '../controllers/post.controller.js';
import {handlePostData} from '../controllers/post.controller.js';
import { getDataById } from '../controllers/post.controller.js';
import {totalNumberOfDocumentsInDatabase} from '../controllers/post.controller.js'

// get router
router.get('/',handleGet)

// get data by id
router.get('/api/byid/:id',getDataById)

// post router 
router.post('/post',handlePostData )

// total documents in mongodb 
router.get('/countOfDocuments',totalNumberOfDocumentsInDatabase)

export default router;