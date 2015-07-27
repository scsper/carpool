import {query} from '../db';

const index = () => {
    return new Promise((resolve, reject) => {
        console.log('quely', query);
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
            'insert into organizations (name, address) values ($1, $2)',
            [params.name, params.address]
        ).then((result) => {
            resolve(result);
        }).catch(reject);

    });
};

export {index, create};
