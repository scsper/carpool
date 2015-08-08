import {Router} from 'express';
import organizationsQueries from '../queries/organizations';

const router = Router();

router.get('/organizations', (req, res, next) => {
    organizationsQueries.index().then((organizations) => {
        res.json(organizations);
    }).catch(next);
});

router.get('/organizations/:id/members', (req, res, next) => {
    organizationsQueries.members(req.params.id).then((users) => {
        res.json(users);
    }).catch(next);
});

router.get('/organizations/:organizationId/events', (req, res, next) => {
    eventsQueries.getEvents(req.params.organizationId).then((events) => {
        res.json(events);
    }).catch(next);
});

export default router;
