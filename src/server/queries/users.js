import {query} from '../db';

const create = (params) => {
    return new Promise((resolve, reject) => {
        query(
            'insert into users (name, address) values ($1, $2) returning id', [params.name, params.address]
        ).then((result) => {
            resolve(result.rows[0]);
        }).catch(reject);
    });
};

export function get(userId) {
    return query('select * from events where id = ($1)', [userId])
        .then(result => result.rows[0]);
}

export default {create};
