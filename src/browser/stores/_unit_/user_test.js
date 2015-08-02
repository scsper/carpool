var UserStore = require('../user.js');

describe('User Store', () => {
    beforeEach(function() {
        this.store = new UserStore();
        this.store.user = {
            name: 'test',
            type: 'admin',
            id: 1
        };
    });

    it('returns a user', function() {
        let user = this.store.get();

        expect(user.type).to.equal('admin');
        expect(user.id).to.equal(1);
    });
});
