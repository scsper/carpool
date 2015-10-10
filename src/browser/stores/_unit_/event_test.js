import EventStore from '../event';

describe('stores/event.js', function() {
    beforeEach(function() {
        this.store = new EventStore();
    });

    describe('#getRide', function() {
        it('gets the ride and adds the driver name', function() {
            let rideId = 1;
            let driverId = 1;

            let rideMock = {
                driverId: driverId,
                id: rideId
            };

            let membersMock = {
                name: 'Scott Sperling'
            };

            let rcStub = this.sandbox.stub(this.store.rideCollection, 'get').returns(rideMock);
            let memStub = this.sandbox.stub(this.store.memberCollection, 'get').returns(membersMock);

            let ride = this.store.getRide(rideId);

            expect(rcStub).to.be.calledWith(rideId);
            expect(memStub).to.be.calledWith(driverId);

            expect(ride.driverName).to.equal('Scott Sperling');
        });
    });

    describe('#getRidesForEvent', function() {
        it('gets a list of rides for the given event id', function() {
            let rideIds = [1];
            let eventId = 1;
            let rideMock = {
                hello: 'world'
            };

            let ecStub = this.sandbox.stub(this.store.eventCollection, 'getRideIdsForEvent').returns(rideIds);
            let rideStub = this.sandbox.stub(this.store, 'getRide').returns(rideMock);

            let rides = this.store.getRidesForEvent(eventId);

            expect(rideStub).to.be.calledWith(1);
            expect(ecStub).to.be.calledWith(eventId);
            expect(rides).to.deep.equal([rideMock]);
        });
    });

    describe('#getEvents', function() {
        it('gets the events', function() {
            let ecStub = this.sandbox.stub(this.store.eventCollection, 'get').returns(1);
            let event = this.store.getEvents();

            expect(event).to.equal(1);
        });
    });

    describe('#getSelectedEvent', function() {
        it('gets the selected event', function() {
            let expectedSelectedEvent = 1;

            this.store.selectedEvent = expectedSelectedEvent;

            expect(this.store.getSelectedEvent()).to.equal(expectedSelectedEvent);
        });
    });

    describe('#getMembers', function() {
        it('gets the members', function() {
            let stub = this.sandbox.stub(this.store.memberCollection, 'getAll').returns(1);
            let member = this.store.getMembers();

            expect(member).to.equal(1);
        });
    });

    describe('#getMembersWhoNeedRides', function() {
        it('gets the members who need rides for a given event', function() {
            let stub = this.sandbox.stub(this.store.memberCollection, 'getMembersWhoNeedRides').returns(1);
            let eventId = 2;
            let member = this.store.getMembersWhoNeedRides(eventId);

            expect(stub).to.be.calledWith(eventId);
            expect(member).to.equal(1);
        });
    });

    describe('#addEvents', function() {
        it('adds events', function() {
            let stub = this.sandbox.stub(this.store.eventCollection, 'addEvents');
            let rawEvents = {
                hello: 'world'
            };

            this.store.addEvents(rawEvents);

            expect(stub).to.be.calledWith(rawEvents);
        });
    });

    describe('#addMembers', function() {
        it('adds members', function() {
            let stub = this.sandbox.stub(this.store.memberCollection, 'setMembers');
            let rawMembers = {
                hello: 'world'
            };

            this.store.addMembers(rawMembers);

            expect(stub).to.be.calledWith(rawMembers);
        });
    });

    describe('#_addMembersToRide', function() {
        it('adds the members to rides and removes them from the members who need rides', function() {
            let rcStub = this.sandbox.stub(this.store.rideCollection, 'addMemberIdsToRide');
            let mcStub = this.sandbox.stub(this.store.memberCollection, 'remove');

            let rideId = 1;
            let memberIds = [2];
            let eventId = 3;

            let payload = {
                rideId: rideId,
                memberIds: memberIds,
                eventId: eventId
            };

            this.store._addMembersToRide(payload);

            expect(rcStub).to.be.calledWith(rideId, memberIds);
            expect(mcStub).to.be.calledWith(eventId, memberIds);
        });
    });

    describe('#_removeMembersFromRide', function() {
        it('removes members from ride and adds them to the members who need rides', function() {
            let rcStub = this.sandbox.stub(this.store.rideCollection, 'removeMemberIdsFromRide');
            let mcStub = this.sandbox.stub(this.store.memberCollection, 'addMembersToEvent');

            let rideId = 1;
            let memberIds = [2];
            let eventId = 3;

            let payload = {
                rideId: rideId,
                memberIds: memberIds,
                eventId: eventId
            };

            this.store._removeMembersFromRide(payload);

            expect(rcStub).to.be.calledWith(rideId, memberIds);
            expect(mcStub).to.be.calledWith(eventId, memberIds);
        });
    });

    describe('#_handleOpenEvent', function() {
        beforeEach(function() {
            this.event = {
                hello: 'world',
                id: 5
            };

            this.rides = [{id: 1}];
            this.membersWhoNeedRides = [3, 4];

            this.payload = {
                event: this.event,
                rides: this.rides,
                membersWhoNeedRides: this.membersWhoNeedRides
            };

            this.rcStub = this.sandbox.stub(this.store.rideCollection, 'addRides');
            this.mcStub = this.sandbox.stub(this.store.memberCollection, 'insert');
            this.ecStub = this.sandbox.stub(this.store.eventCollection, 'addRideIdToEvent');
        });

        it('adds rides to the event and inserts members who need rides', function() {
            this.store._handleOpenEvent(this.payload);

            expect(this.rcStub).to.be.calledWith(this.rides);
            expect(this.mcStub).to.be.calledWith(this.event.id, this.membersWhoNeedRides);
            expect(this.ecStub).to.be.calledWith(this.rides[0].id, this.event.id);
        });

        it('selects the event', function() {
            this.store._handleOpenEvent(this.payload);

            expect(this.store.selectedEvent).to.deep.equal(this.event);
        });
    });
});
