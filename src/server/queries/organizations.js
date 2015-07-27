import {query} from '../db';

const index = () => {
    return new Promise((resolve, reject) => {
        query('select * from organizations').then((result) => {
            resolve(result.rows);
        }).catch(reject);
    });
};

/**
 * Create an organiation
 *
 * @param {Object} params organization files @see the query in the function code
 */
const create = (params) => {
    return new Promise((resolve, reject) => {
        query(
            'insert into organizations (name, address) values ($1, $2) returning id',
            [params.name, params.address]
        ).then((result) => {
            resolve(result.rows[0]);
        }).catch(reject);

    });
};

const addMember = (organizationId, userId) => {
    return new Promise((resolve, reject) => {
        query(
            'insert into members (organizationId, userId) values ($1, $2)',
            [organizationId, userId]
        ).then((result) => {
            resolve(result);
        }).catch(reject);
    });
};

const members = (organizationId) => {
    return new Promise((resolve, reject) => {
        query(
            `select u.* from users u
            join members m on m.userId = u.id
            where m.organizationId = $1`,
            [organizationId]
        ).then((result) => {
            resolve(result.rows);
        }).catch(reject);
    });
};

export default {index, create, addMember, members};
