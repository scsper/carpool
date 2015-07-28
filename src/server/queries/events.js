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

export default {create};
