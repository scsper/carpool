export default class Member {
    constructor(payload) {
        this.name = payload.name;
        this.address = payload.address;
        this.type = payload.type;
        this.id = payload.id;
    }
}