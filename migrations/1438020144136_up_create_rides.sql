create table rides(
    id serial primary key,
    eventId integer references events(id),
    driverId integer references users(id),
    seats smallint,
    departureTime timestamp with time zone,
    arrivalTime timestamp with time zone,
    notes text
);
