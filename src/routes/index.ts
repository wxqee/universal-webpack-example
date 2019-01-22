import {Router, NextFunction, Request, Response} from 'express';
import {fetchPeopleList, PeopleList} from "../both/namelist";
import People from "../both/People";

const router = Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'Express' });
});

router.get('/people', function(req: Request, res: Response): void {
  try {
    fetchPeopleList()
      .then((guys: PeopleList) => {
        res.json(guys.map((guy: People) => guy.getResume()));
      });
  } catch (e) {
    res.json([]);
  }
});

export default router;
