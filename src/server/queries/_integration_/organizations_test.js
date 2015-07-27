import {create, index} from '../organizations';

describe('queries organizations', () => {
    it('creates and returns the list of organizations', (done) => {
        create({name: 'test', address: 'abc'}).then(() => {
            index().then((result) => {
                expect(result.length).to.equal(1);
                expect(result[0].name).to.equal('test');
                done();
            }).catch(done);
        }).catch(done);
    });
});
