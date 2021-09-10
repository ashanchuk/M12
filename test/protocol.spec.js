const chai = require('chai');
const { expect } = require ('chai').expect;
const sendRequest = require('./sendRequest');
const params = require('./params.json');
const env = require('./endpoint.json');

describe('Get users', () => {

    params.map((data) => {
        let response;
        let statusCode = '200';
        let responseHeader = 'content-type';
        let responseLength = '10';

        before(async () => {
            data.uri = env.uri + data.uri;
            response = await sendRequest(data);
        });

        it('Verifying Status code ' + statusCode, () => {
            expect(response.status).to.eql(statusCode);
        });

        it('Verifying Header ' + responseHeader, () => {
            // expect(response.getAllResponseHeaders()).to.match(responseHeader);
            expect(response.headers['content-type']).to.eql('application/json');
        });

        it('Verifying Response array length' + responseLength, () => {
            expect(response.body.length).to.eql(responseLength);
        });


    })
});