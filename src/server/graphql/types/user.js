import {GraphQLObjectType, GraphQLString} from 'graphql/type';

export default new GraphQLObjectType({
    name: 'User',
    description: 'Carpool user',
    fields: () => ({
        id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString,
            description: 'Full name'
        },
        address: {
            type: GraphQLString
        }
    })
});
