import MemberCollection from '../member';

describe('stores/collections/member', function() {
    beforeEach(function() {
        this.collection = new MemberCollection();
    });

    describe('#get', function() {
        it('returns the member with the given id', function() {
            let members = {
                1: {
                    id: 1,
                    name: 'Henry',
                    type: 'driver'
                }
            };

            this.collection.members = members;
            expect(this.collection.get(1)).to.deep.equal(members[1]);
        });

        it('returns an error with an invalid id', function() {
            this.collection.members = {};
            expect(() => {
                this.collection.get(1)
            }).to.throw(/No member found with this id/);
        });
    });

    describe('#getAll', function() {
        it('returns all the members', function() {
            let members = {
                1: {
                    id: 1,
                    name: 'Henry',
                    type: 'driver'
                }
            };

            this.collection.members = members;
            expect(this.collection.getAll()).to.deep.equal(members);
        });
    });

    describe('#setMembers', function() {
        it('returns all the members', function() {
            let members = {
                1: {
                    id: 1,
                    name: 'Henry',
                    type: 'driver',
                    address: 'somewhere'
                },
                2: {
                    id: 2,
                    name: 'Scott',
                    type: 'admin',
                    address: undefined
                }
            };

            this.collection.setMembers([members[1], members[2]]);

            expect(this.collection.getAll()).to.deep.equal(members);
        });
    });
});
