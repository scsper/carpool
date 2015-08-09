import {query} from '../db';

const create = (params) => {
    return new Promise((resolve, reject) => {
        query(
            `insert into events (name, address, organizationId)
            values ($1, $2, $3) returning id`,
            [params.name, params.address, params.organizationId]
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

export default {create, getEvents, get};
