import gulp from 'gulp';
import glob from 'glob';
import path from 'path';
import istanbul from 'istanbul';
import gutil from 'gulp-util';

const FINAL_COVERAGE_DIR = path.resolve(__dirname, '../coverage');
const FINAL_OUTPUT_FORMATS = ['lcov', 'json'];



gulp.task('merge_coverage', (cb) => {
    const PATTERN = path.join(__dirname, '../coverage/json/*.json');
    const collector = new istanbul.Collector();
    const reporter = new istanbul.Reporter(null, FINAL_COVERAGE_DIR);
    const reports = glob.sync(PATTERN);

    gutil.log('[merge_coverage]', 'collecting reports from: ' + PATTERN);

    if (!reports.length) {
        throw new Error('No report files found. pattern: ' + PATTERN);
    }

    reports.forEach(function(file) {
        var coverageObject = require(file);
        gutil.log('[merge_coverage]', 'Adding file: ' + file);
        collector.add(coverageObject);
    });

    reporter.addAll(FINAL_OUTPUT_FORMATS);

    reporter.write(collector, false, function() {
            gutil.log('[merge_coverage]', 'report is saved to: ', FINAL_COVERAGE_DIR);
            cb();
    });
});
