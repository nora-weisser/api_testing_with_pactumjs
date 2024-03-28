const { spec } = require('pactum');

describe('/authenticate', () => {
    describe('Happy Flows', () => {
        it('POST: should get a response and status code of 200, when credentials are correct', async () => {
            await spec()
                .post('https://restful-booker.herokuapp.com/auth')
                .withHeaders('Content-Type', 'application/json')
                .withJson({
                    "username" : "admin",
                    "password" : "password123"
                })
                .expectStatus(200)
        })
    })
})
