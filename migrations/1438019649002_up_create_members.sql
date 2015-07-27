create table members(
    id serial primary key,
    organizationId integer references organizations(id),
    userId integer references users(id),
    driver boolean default false,
    admin boolean default false
);
