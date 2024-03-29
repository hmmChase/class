import express from 'express';

import * as commentController from '../controllers/commentController.js';
import { isAuth } from '../middleware/isAuth.js';
import authRole from '../middleware/authRole.js';

const router = express.Router();

/* GET */

router.get('/', (req, res, next) => res.json({ route: 'question' }));

router.get('/all', commentController.getAllComments);

router.get('/:commentId', commentController.getComment);

router.get('/question/:questionId', commentController.getQuestionComments);

/* POST */

router.post('/create', commentController.create);

router.post('/delete-soft', commentController.deleteSoft);

router.post(
  '/answer-promote',
  isAuth,
  authRole('TEACHER'),
  commentController.answerPromote
);

router.post(
  '/answer-demote',
  isAuth,
  authRole('TEACHER'),
  commentController.answerDemote
);

/* PATCH */

// change to patch

router.post('/update', commentController.update);

export default router;
