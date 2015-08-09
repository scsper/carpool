import {query} from '../db';

const create = (params) => {
    return new Promise((resolve, reject) => {
        query(
            `insert into rides (eventId, driverId, seats, departureTime, arrivalTime, notes)
                values ($1, $2, $3, $4, $5, $6) returning id`,
            [params.eventId, params.driverId, params.seats, params.departureTime, params.arrivalTime, params.notes]
        ).then((result) => {
            resolve(result.rows[0]);
        }).catch(reject);
    });
};

export default {create};
