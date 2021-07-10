import express from 'express';
import type {PeopleList} from "../both/namelist";
import {fetchPeopleList} from "../both/namelist";
import People from "../both/People";

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/people', function(rea, res) {
  try {
    fetchPeopleList()
      .then((peopleList: PeopleList) => {
        res.json(peopleList.map((guy: People) => guy.getResume()));
      });
  } catch (e) {
    res.json([]);
  }
});

export default router;
