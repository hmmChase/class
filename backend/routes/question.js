import express from 'express';
import * as questionController from '../controllers/questionController';

const router = express.Router();

/* GET */

router.get('/', function (req, res, next) {
  return res.json({ route: 'question' });
});

router.get('/all', questionController.getAllQuestions);

router.get('/:questionId', questionController.getQuestion);

router.get(
  '/challenge/:challengePath',
  questionController.getChallengeQuestions
);

/* POST */

router.post('/create/:challengePath', questionController.create);

router.post('/delete-soft', questionController.deleteSoft);

export default router;
