var getMenuTitles = require('../get_menu_titles.js');

describe('Component Utils', function() {
    describe('#getMenuTitles', function() {
        it('returns the correct passenger menu titles', function() {
            let expectedMenuTitles = ['Book', 'Upcoming Rides', 'Notifications'];

            expect(getMenuTitles('passenger')).to.deep.equal(expectedMenuTitles);
        });

        it('returns the correct driver menu titles', function() {
            let expectedMenuTitles = ['Drive', 'Upcoming Drives', 'Notifications'];

            expect(getMenuTitles('driver')).to.deep.equal(expectedMenuTitles);
        });

        it('returns the correct admin menu titles', function() {
            let expectedMenuTitles = ['Events', 'Members', 'Notifications'];

            expect(getMenuTitles('admin')).to.deep.equal(expectedMenuTitles);
        });

        it('throws an error if an unrecognized user type is passed in', function() {
            expect(function() {
                getMenuTitles('invalid');
            }).to.throw(/Unknown user type/);
        });
    });
});
