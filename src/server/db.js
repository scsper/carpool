import pg from 'pg';

const connString = 'postgress://dabramov:password@localhost/carpool_dev';

/**
 * Make a db query using current connection string (based on environment)
 *
 * @return {Promise}
 */
const query = (text, values) => {
    return new Promise((resolve, reject) => {
        pg.connect(connString, (connectionErr, client, release) => {
            if (connectionErr) {
                return reject(connectionErr);
            }

            client.query(text, values, (queryError, result) => {
                // release the connection
                release();

                if (queryError) {
                    return reject(queryError);
                }

                resolve(result);
            });
        });
    });
};

export {query};
