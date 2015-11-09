import {query} from '../db';

const getPassengers = (rideId) => {
    return new Promise ((resolve, reject) => {
        query(
            'select userId from rides_passengers where rideId = ($1)',
            [rideId]
        ).then((result) => {
            resolve(result.rows);
        }).catch(reject);
    })
};

const insert = (userId, rideId) => {
    return new Promise ((resolve, reject) => {
        query(
            'insert into rides_passengers (userId, rideId) values ($1, $2) returning id',
            [userId, rideId]
        ).then(result => {
            resolve(result.rows[0]);
        }).catch(reject);
    });
};

const remove = (userId, rideId) => {
    return new Promise ((resolve, reject) => {
        query(
            'delete from rides_passengers where userId=$1 and rideId=$2 returning id',
            [userId, rideId]
        ).then(result => {
            resolve(result.rows[0]);
        }).catch(reject);
    });
}

export default {getPassengers, insert, remove};
