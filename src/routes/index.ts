import {Request, Response, Router} from 'express';
import {fetchPeopleList, PeopleList} from '../both/namelist';
import People from '../both/People';

const router = Router();

/* GET home page. */
router.get('/', (req: Request, res: Response) => {
  res.render('index', { title: 'Express' });
});

router.get('/people', (req: Request, res: Response) => {
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
