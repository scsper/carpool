import organizationsQueries from './queries/organizations';
import ridesQueries from './queries/rides';
import eventsQueries from './queries/events';
import ridesPassengerQueries from './queries/rides_passengers';

const getOrganizations = (req, res, next) => {
    return organizationsQueries.index().then((organizations) => {
        res.json(organizations);
    }).catch(next);
};

const getRides = (req, res, next) => {
    return eventsQueries.getRides(req.params.eventId).then((rides) => {
        let ridePromises = [];

        rides.forEach(ride => {
            ridePromises.push(ridesPassengerQueries.getPassengers(ride.id))
        });

        /* TODO: this is really dirty.  fix it.  */
        return Promise.all(ridePromises).then(results => {
            var ridesWithPassengers = [];
            let passengerIds = {};

            rides.forEach((ride, index) => {
                let rideWithPassenger = JSON.parse(JSON.stringify(ride));

                rideWithPassenger.passengers = results[index].map(passenger => {
                    passengerIds[passenger.userid] = true;
                    return passenger.userid;
                });

                ridesWithPassengers.push(rideWithPassenger);
            });

            return organizationsQueries.members(req.params.organizationId).then(members => {
                let membersWhoNeedRides = members.filter(member => {
                    return !passengerIds[member.id];
                });

                let response = {
                    rides: ridesWithPassengers,
                    membersWhoNeedRides: membersWhoNeedRides
                };

                res.json(response);
            }).catch(next);
        }).catch(next);
    }).catch(next);
};

const getMembers = (req, res, next) => {
    return organizationsQueries.members(req.params.id).then((users) => {
        res.json(users);
    }).catch(next);
};

const getEvents = (req, res, next) => {
    return eventsQueries.getEvents(req.params.organizationId).then((events) => {
        res.json(events);
    }).catch(next);
};

const getRide = (req, res, next) => {
    return ridesQueries.get(req.params.id).then((ride) => {
        res.json(ride);
    }).catch(next);
};

const launch = (req, res, next) => {
    return organizationsQueries.index().then(function(organizations) {
        var organizationId = organizations[0].id;

        Promise.all([
            organizationsQueries.members(organizationId),
            eventsQueries.getEvents(organizationId),
        ]).then(function(results) {
            var members = results[0];
            var events = results[1];

            res.render('index', {
                organizations: organizations,
                events: events,
                members: members
            });
        }).catch(next);
    }).catch(next);
};

const addPassengerToRide = (req, res, next) => {
    let memberIds = req.body.memberIds;
    let rideId = req.params.rideId;
    let addPassengerToRideQueries = memberIds.map(memberId => ridesPassengerQueries.insert(memberId, rideId));

    return Promise.all(addPassengerToRideQueries).then(results => {
        res.json(results);
    }).catch(next);
};

export default {
    getOrganizations,
    getRides,
    getRide,
    getMembers,
    getEvents,
    addPassengerToRide,
    launch
};
