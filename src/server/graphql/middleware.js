import {graphql} from 'graphql';
import schema from './schema';

export default function graphqlMiddleware(req, res) {
    graphql(schema, req.body).then(result => {
        res.send(JSON.stringify(result, null, 4));
    }).catch(e => {
        res.send(e.toString());
    });
}
