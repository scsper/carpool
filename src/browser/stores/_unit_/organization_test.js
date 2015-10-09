var OrganizationStore = require('../organization.js');

describe('Organization Store', function() {
    beforeEach(function() {
        let organizations = require('../../../../test/fixtures/organization.js');
        this.store = new OrganizationStore(organizations);
    });

    it('returns a list of organizations', function() {
        let orgs = this.store.getAll();

        expect(orgs[0].name).to.equal('hello');
        expect(orgs[0].id).to.equal(1);
    });
});
