import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLID
} from 'graphql/type';

import {
    get as getUser
} from '../queries/users';

import {
    get as getEvent,
    getOrganization as getEventOrganization
} from '../queries/events';

import {
    get as getRides
} from '../queries/rides';

import {
    index as getOrganizations
} from '../queries/organizations';

const orgType = new GraphQLObjectType({
    name: 'Organization',
    description: 'An organization of a user?',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            description: 'The id of the user.'
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The name of the user.'
        },
        address: {
            type: GraphQLString,
            description: `The friends of the user, or an empty list if they have none.`
        }
    })
});

const userType = new GraphQLObjectType({
    name: 'User',
    description: 'An organization of a user?',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            description: 'The id of the user.'
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The name of the user.'
        },
        address: {
            type: GraphQLString,
            description: `The friends of the user, or an empty list if they have none.`
        }
    })
});

const eventType = new GraphQLObjectType({
    name: 'Event',
    description: 'An organization of a user?',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            description: 'The id of the user.'
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The name of the user.'
        },
        address: {
            type: GraphQLString,
            description: `The friends of the user, or an empty list if they have none.`
        },
        organization: {
            type: orgType,
            description: '',
            resolve: event => getEventOrganization(event.id)
        },
        date: {
            type: GraphQLString,
            description: ''
        },
        description: {
            type: GraphQLString,
            description: `The friends of the user, or an empty list if they have none.`
        }
    })
});

// const memberType = new GraphQLObjectType({
//     name: 'Member',
//     description: 'An organization of a user?',
//     fields: () => ({
//         // id: {
//         //     type: new GraphQLNonNull(GraphQLID),
//         //     description: 'The id of the user.'
//         // },
//         organization: {
//             type: orgType,
//             description: ''
//         },
//         user: {
//             type: userType,
//             description: ''
//         },
//         driver: {
//             type: GraphQLBoolean,
//             description: ''
//         },
//         admin: {
//             type: GraphQLBoolean,
//             description: ''
//         }
//     })
// });

const rideType = new GraphQLObjectType({
    name: 'Ride',
    description: 'An organization of a user?',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            description: 'The id of the user.'
        },
        event: {
            type: eventType,
            description: ''
        },
        user: {
            type: userType,
            description: ''
        },
        passengers: {
            type: new GraphQLList(userType),
            description: ''
        },
        seat: {
            type: GraphQLInt,
            description: ''
        },
        departureTime: {
            type: GraphQLInt,
            description: ''
        },
        arrivalTime: {
            type: GraphQLInt,
            description: ''
        },
        notes: {
            type: GraphQLString,
            description: ''
        }
    })
});

/**
 * This is the type that will be the root of our query, and the
 * entry point into our schema. It gives us the ability to fetch
 * objects by their IDs, as well as to fetch the undisputed hero
 * of the Star Wars trilogy, R2-D2, directly.
 *
 * This implements the following type system shorthand:
 *   type Query {
 *     hero(episode: Episode): Character
 *     human(id: String!): Human
 *     droid(id: String!): Droid
 *   }
 *
 */
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        event: {
            type: eventType,
            args: {
                id: {
                    description: 'If omitted, returns the hero of the whole saga. If ' +
                    'provided, returns the hero of that particular episode.',
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve: (root, {id}) => getEvent(id)
        },
        // ride: {
        //     type: rideType,
        //     args: {
        //         id: {
        //             description: 'id of the human',
        //             type: new GraphQLNonNull(GraphQLID)
        //         }
        //     },
        //     resolve: (root, {id}) => getRides(id),
        // },
        user: {
            type: userType,
            args: {
                id: {
                    description: 'id of the droid',
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve: (root, {id}) => getUser(id)
        },
        organizations: {
            type: new GraphQLList(orgType),
            resolve: () => getOrganizations()
        }
    })
});

/**
 * Finally, we construct our schema (whose starting query type is the query
 * type we defined above) and export it.
 */
export default new GraphQLSchema({
    query: queryType
});
