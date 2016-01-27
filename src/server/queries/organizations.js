import {query} from '../db';

const index = () => {
    return query('select * from organizations').then(({rows}) => rows);
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
            `select u.*, m.driver, m.admin from users u
            join members m on m.userId = u.id
            where m.organizationId = $1`,
            [organizationId]
        ).then((result) => {
            let members = result.rows.map(row => {
                let member = row;

                if (member.admin) {
                    member.type = 'admin';
                } else if (member.driver) {
                    member.type = 'driver';
                } else {
                    member.type = 'passenger';
                }

                return member;
            });

            resolve(members);
        }).catch(reject);
    });
};

export default {index, create, addMember, members};
