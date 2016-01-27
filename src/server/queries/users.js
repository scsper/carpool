import {query} from '../db';

const create = ({name, address}) => {
    return new Promise((resolve, reject) => {
        query(
            'insert into users (name, address) values ($1, $2) returning *', [name, address]
        ).then((result) => {
            resolve(result.rows[0]);
        }).catch(reject);
    });
};

const getAll = () => {
    return new Promise((resolve, reject) => {
        query('select * from users').then((result) => {
            resolve(result.rows);
        }).catch(reject);
    });
};

const get = (id) => {
    return new Promise((resolve, reject) => {
        query('select * from users where id = $1', [id]).then((result) => {
            resolve(result.rows[0]);
        }).catch(reject);
    });
};

export default {create, getAll, get};
