import {Router} from 'express';
import organizationsQueries from '../queries/organizations';
import ridesQueries from '../queries/rides';
import eventsQueries from '../queries/events';
import ridesPassengerQueries from '../queries/rides_passengers';

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

router.get('/organizations/:organizationId/events/:eventId/rides', (req, res, next) => {
    eventsQueries.getRides(req.params.eventId).then((rides) => {
        let ridePromises = [];

        rides.forEach(ride => {
            ridePromises.push(ridesPassengerQueries.getPassengers(ride.id))
        });

        /* TODO: this is really dirty.  fix it.  */
        Promise.all(ridePromises).then(results => {
            var ridesWithPassengers = [];

            rides.forEach((ride, index) => {
                let rideWithPassenger = JSON.parse(JSON.stringify(ride));
                rideWithPassenger.passengers = results[index].map(passenger => {
                    return passenger.userid;
                });
                ridesWithPassengers.push(rideWithPassenger);
            });

            res.json(ridesWithPassengers);
        }).catch(error => {
            throw new Error('Failed to get all of the rides.');
        });
    });
});

router.get('/organizations/:organizationId/events/:eventId/rides/:id', (req, res, next) => {
	ridesQueries.get(req.params.id).then((ride) => {
		res.json(ride);
	}).catch(next);
});

export default router;

