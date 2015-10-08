export default class Ride {
    constructor(payload) {
        this.id = payload.id;
        this.eventId = payload.eventid;
        this.driverId = payload.driverid;
        this.leaveTime = payload.arrivaltime;
        this.leaveDate = payload.leaveDate;
        this.returnTime = payload.departuretime;
        this.returnDate = payload.returnDate;
        this.totalSpots = payload.seats; // total spots the driver has in the car
        this.passengers = payload.passengers; // [] of the passenger ids
    }
}
