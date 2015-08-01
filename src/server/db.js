import pg from 'pg';
import chalk from 'chalk';
var config = require('../../config/pg.json');

const connString = 'postgress://' + config.development.username + ':password@localhost/carpool_dev';
const DEBUG = false;

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


            if (DEBUG) {
                console.log(chalk.red('========================================'));
                console.log(chalk.blue('=> SQL:'), chalk.green(text));
                console.log(chalk.blue('=> values: '), chalk.green((values || '').toString()));
                console.log(chalk.red('========================================='));
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
