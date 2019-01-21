import {Request, Response, Router} from 'express';

const router = Router();

/* GET users listing. */
router.get('/', function(req: Request, res: Response) {
  res.send('respond with a resource');
});

export default router;
