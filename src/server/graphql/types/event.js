import {GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID} from 'graphql/type';
import {getOrganization as getEventOrganization} from '../../queries/events';
import orgType from './organization';

export default new GraphQLObjectType({
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
