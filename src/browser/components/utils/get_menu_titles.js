/**
 * Returns the menu items based on the type of user that is passed in.
 */
module.exports = (type) => {
    switch (type) {
        case 'admin':
            return ['Events', 'Members', 'Notifications'];
        case 'driver':
            return ['Drive', 'Upcoming Drives', 'Notifications'];
        case 'passenger':
            return ['Book', 'Upcoming Rides', 'Notifications'];
        default:
            throw new Error ('Unknown user type ' + type + ' passed to Navigation component.');
    }
};
