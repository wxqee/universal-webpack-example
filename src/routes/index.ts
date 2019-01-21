import {Router, NextFunction, Request, Response} from 'express';
import {fetchPeopleList} from "../both/namelist";
import People from "../both/People";

const router = Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'Express' });
});

router.get('/people', function(req: Request, res: Response): void {
  fetchPeopleList().then((guys: Array<People>) => {
    if (!guys.length) {
      res.json([]);
      return;
    }

    res.json(guys.map((guy: People) => guy.getResume()));
  });
});

export default router;
