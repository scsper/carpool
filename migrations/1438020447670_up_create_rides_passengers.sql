create table rides_passengers(
    id serial primary key,
    userId integer references users(id),
    rideId integer references rides(id)
);
