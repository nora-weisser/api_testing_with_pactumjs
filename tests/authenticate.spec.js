const { spec } = require('pactum');
const { like } = require('pactum-matchers');

describe('/authenticate', () => {
    it('POST: should get a response and status code of 200, when credentials are correct', async () => {
        const ctx = this;
        await spec()
            .post('/auth')
            .inspect()
            .withHeaders('Content-Type', 'application/json')
            .withJson({
                "username": "admin",
                "password": "password123"
            })
            .expectStatus(200)
            .expectJsonMatch({
                "token": like("some-token")
            })
            .records('mocha', ctx);
    })
})
