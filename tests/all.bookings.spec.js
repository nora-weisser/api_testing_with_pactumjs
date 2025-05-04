const { spec } = require('pactum');

describe('GET All Bookings', () => {

    beforeEach(async () => {
        await spec()
            .post('/auth/login')
            .withHeaders('Content-Type', 'application/json')
            .withJson({
                '@DATA:TEMPLATE@': 'ExistingUser'
            }).stores('token', 'token')
    });


    it.only('GET: All Rooms', async () => {

        await spec()
            .get('/room')
            .withHeaders('Content-Type', 'application/json')
            .withHeaders('Cookie', 'token=$S{token}')
            .expectStatus(200)
    })
})
