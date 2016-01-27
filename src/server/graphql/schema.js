import {GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList, GraphQLNonNull, GraphQLID} from 'graphql/type';
import {graphql} from 'graphql';
import {get, getAll, create} from '../queries/users';
import userType from './types/user';
import eventType from './types/event';
import orgType from './types/organization';

import {get as getEvent} from '../queries/events';
import {index as getOrganizations} from '../queries/organizations';

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
            },
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
            organizations: {
                type: new GraphQLList(orgType),
                resolve: () => getOrganizations()
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

graphql(schema, '{organizations {id, name, address}}').then(result => {
    console.log(JSON.stringify(result, null, 4));
}).catch(error => {
    console.error(error);
});
