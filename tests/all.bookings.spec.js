const { spec } = require('pactum');

describe('GET All Bookings', () => {
    it('GET: All Bookings', async () => {
        await spec()
            .get('/booking')
            .withHeaders('Content-Type', 'application/json')
            .expectStatus(200)
    })
})

describe('GET Booking by ID', () => {

    // create booking
    beforeEach(async () => {
		await spec()
            .post('/booking')
            .withHeaders('Content-Type', 'application/json')
            .expectStatus(200)
	});

    it('GET: All Bookings', async () => {
        await spec()
            .get('/booking')
            .withHeaders('Content-Type', 'application/json')
            .expectStatus(200)
    })

    // delete booking
})
