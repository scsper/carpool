import usersQueries from '../users';

describe('users queries', function() {
    it('creates a user', function(done) {
        let params = {
            name: 'Scott',
            address: 'Random'
        };

        usersQueries.create(params).then(user => {
            // the query only returns an id
            expect(user.id).to.be.a('number');

            done();
        }).catch(done);
    });
});
