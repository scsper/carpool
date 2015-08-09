import {log} from 'gulp-util';
import {exec} from 'child_process';

const execCmd = (cmd, callback) => {
    exec(cmd, (err, stdout, stderr) => {
        if (stderr) {
            log(stderr);
        }
        if (stdout) {
            log(stdout);
        }
        if(!stderr && err) {
            log(err);
        }
        callback();
    });
}

export default {execCmd};
