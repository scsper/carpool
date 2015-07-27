create table events(
    id serial primary key,
    name varchar(1024),
    address varchar(1024),
    organizationId integer references organizations(id),
    date timestamp with time zone
);
