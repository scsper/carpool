import {GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID} from 'graphql/type';

export default new GraphQLObjectType({
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
