import {Router} from 'express';
import organizationsQueries from '../queries/organizations';

const router = Router();

router.get('/organizations', (req, res, next) => {
    console.log('testtest');
    organizationsQueries.index().then((organizations) => {
        res.json(organizations);
    }).catch(next);
});

export default router;
