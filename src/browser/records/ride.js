export default class Ride {
    constructor(payload) {
        this.id = payload.id;
        this.driver = payload.driver;
        this.car = payload.car;
        this.leaveTime = payload.leaveTime;
        this.leaveDate = payload.leaveDate;
        this.returnTime = payload.returnTime;
        this.returnDate = payload.returnDate;
        this.totalSpots = payload.totalSpots; // total spots the driver has in the car
        this.passengers = payload.passengers; // [] of the passenger ids
    }
}
