var OrganizationStore = require('../organization.js');

describe('Organization Store', () => {
    beforeEach(function() {
        this.store = new OrganizationStore();
        this.store.organizations = require('../../../../test/fixtures/organization.js');
    });

    it('returns a list of organizations', function() {
        let orgs = this.store.get();

        expect(orgs[0].name).to.equal('hello');
        expect(orgs[0].id).to.equal(1);
    });
});
