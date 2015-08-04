var filterMemberList = require('../filter_member_list.js');

describe('Component Utils', function() {
    describe('#filterMemberList', function() {
        it('returns an object with member names that fit the criteria', function() {
            let members = [{
                name: 'Scott'
            }, {
                name: 'Dmitrii'
            }];

            let filterString = 'Sc';
            let filteredMembers = filterMemberList(members, filterString);

            expect(filteredMembers['Scott']).to.equal('Scott');
        });

        it('converts the filter string to lowercase', function() {
            let members = [{
                name: 'scott'
            }, {
                name: 'Dmitrii'
            }];

            let filterString = 'SC';
            let filteredMembers = filterMemberList(members, filterString);

            expect(filteredMembers['scott']).to.equal('scott');
        });

        it('converts the member name to lowercase', function() {
            let members = [{
                name: 'SCOTT'
            }, {
                name: 'Dmitrii'
            }];

            let filterString = 'sc';
            let filteredMembers = filterMemberList(members, filterString);

            expect(filteredMembers['SCOTT']).to.equal('SCOTT');
        });

        it('returns all names when an empty string is passed in', function() {
            let members = [{
                name: 'Scott'
            }, {
                name: 'Dmitrii'
            }];

            let filterString = '';
            let filteredMembers = filterMemberList(members, filterString);

            expect(filteredMembers['Scott']).to.equal('Scott');
            expect(filteredMembers['Dmitrii']).to.equal('Dmitrii');
        });

        it('returns all names when no string is passed in', function() {
            let members = [{
                name: 'Scott'
            }, {
                name: 'Dmitrii'
            }];

            let filteredMembers = filterMemberList(members);

            expect(filteredMembers['Scott']).to.equal('Scott');
            expect(filteredMembers['Dmitrii']).to.equal('Dmitrii');
        });
    });
});
