const { spec } = require('pactum');

describe('GET All Bookings', () => {
    it('GET: All Bookings', async () => {
        await spec()
            .get('/booking')
            .withHeaders('Content-Type', 'application/json')
            .expectStatus(200)
    })
})
