import {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull, GraphQLInt, GraphQLID} from 'graphql/type';
import eventType from './event';
import userType from './user';

export default new GraphQLObjectType({
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
