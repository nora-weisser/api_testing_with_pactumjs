const { spec } = require('pactum');

describe('GET All Bookings', () => {
    it('GET: All Bookings', async () => {
        const ctx = this;
        await spec()
            .get('/booking')
            .inspect()
            .withHeaders('Content-Type', 'application/json')
            .expectStatus(200)
            .records('mocha', ctx);
    })
})