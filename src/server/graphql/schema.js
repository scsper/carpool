import {GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList, GraphQLNonNull} from 'graphql/type';
import {graphql} from 'graphql';
import {get, getAll, create} from '../queries/users';
import userType from './types/user';

let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            hello: {
                type: GraphQLString,
                resolve: function() {
                    return 'World';
                }
            },
            user: {
                type: userType,
                args: {
                    id: {
                        type: GraphQLString
                    }
                },
                resolve: (root, {id}) => {
                    return get(id || '1');
                }

            },
            users: {
                type: new GraphQLList(userType),
                resolve: () => {
                    return getAll();
                }
            }
        }
    }),
    mutation: new GraphQLObjectType({
        name: 'RootMutationType',
        fields: {
            addUser: {
                type: userType,
                description: 'Add a new user',
                args: {
                    name: {type: new GraphQLNonNull(GraphQLString)},
                    address: {type: new GraphQLNonNull(GraphQLString)}
                },
                resolve: (root, {name, address}) => {
                    return create({name, address});
                }
            }
        }
    })
});

export default schema;

graphql(schema, 'mutation {addUser(name: "Deema Abraham", address: "USA") {id, name, address}}').then(result => {
    console.log(JSON.stringify(result, null, 4));
}).catch(error => {
    console.error(error);
});
