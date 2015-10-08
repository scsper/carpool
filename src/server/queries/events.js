import {query} from '../db';

const create = (params) => {
    return new Promise((resolve, reject) => {
        query(
            `insert into events (name, address, organizationId, date, description)
            values ($1, $2, $3, $4, $5) returning id`,
            [params.name, params.address, params.organizationId, params.date, params.description]
        ).then((result) => {
            resolve(result.rows[0]);
        }).catch(reject);
    });
};

const getEvents = (organizationId) => {
    return new Promise((resolve, reject) => {
        query(
            'select * from events where organizationId = ($1)',
            [organizationId]
        ).then((result) => {
            resolve(result.rows);
        }).catch(reject);
    });
};

const getRides = (eventId) => {
    return new Promise((resolve, reject) => {
        query(
            `select r.* from rides r
            join events e on e.id = r.eventId
            where r.eventId = $1`,
            [eventId]
        ).then((result) => {
            resolve(result.rows);
        }).catch(reject);
    });
};

const get = (eventId) => {
    return new Promise((resolve, reject) => {
        query(
            'select * from events where id = ($1)',
            [eventId]
        ).then((result) => {
            resolve(result.rows[0]);
        }).catch(reject);
    });
};

export default {create, getEvents, getRides, get};
