import {create, index, members, addMember} from '../organizations';
import usersQueries from '../users';

describe('queries organizations', () => {
    beforeEach(function(done) {
        const _this = this;

        // create an organization and a member
        Promise.all([
            usersQueries.create({name: 'test1', address: 'abc'}),
            usersQueries.create({name: 'test2', address: 'abc'}),
            create({name: 'test', addres: 'abc'}),
            // create other organization and members
            // to make sure we separate the users
            usersQueries.create({name: 'test3', address: 'abc'}),
            usersQueries.create({name: 'test4', address: 'abc'}),
            create({name: 'other_org', addres: 'cde'})
        ]).then((results) => {
            const [
                user1Id,
                user2Id,
                organization1Id,
                user3Id,
                user4Id,
                organization2Id
            ] = [
                results[0].id,
                results[1].id,
                results[2].id,
                results[3].id,
                results[4].id,
                results[5].id
            ];

            _this.organizationId = organization1Id;
            Promise.all([
                addMember(organization1Id, user1Id),
                addMember(organization1Id, user2Id),
                addMember(organization2Id, user3Id),
                addMember(organization2Id, user4Id),
            ]).then(() => { done(); }, done);
        }).catch(done);
    });

    it('creates and returns the list of organizations', (done) => {
        index().then((result) => {
            expect(result.length).to.equal(2);
            expect(result[0].name).to.equal('test');
            done();
        }).catch(done);
    });

    it('returns members of an organization', function(done) {
        members(this.organizationId).then((users) => {
            expect(users.length).to.equal(2);
            expect(users[0].name).to.equal('test1');
            done();
        }).catch(done);
    });
});
